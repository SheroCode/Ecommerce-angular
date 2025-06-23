import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../http-service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-products-page',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit {
  myProducts: any[] = [];
  httpService = inject(HttpService);

  ngOnInit() {
    this.httpService.getProducts().subscribe({
      next: (response: any) => {
        this.myProducts = response.products.map((product: any) => ({
          ...product,
          addedToCart: false,
        }));
      },
      error: (err: any) => {
        console.error('Failed to load products', err);
      },
    });
  }
  addToCart(product: any) {
    product.addedToCart = true;
  }
}
