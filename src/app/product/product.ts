import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
 myproduct = input<any>();

  addToCart(product: any) {
    product.addedToCart = true;
  }
}
