import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule,CardModule, ButtonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit {
  myProducts: any[] = [];
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.myProducts = response.products;
        console.log(this.myProducts);
      },
      error: (err: any) => {
        console.error('Failed to load products', err);
      },
    });
  }
}
