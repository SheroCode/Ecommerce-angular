import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  myproduct = input<any>();
  private cartService = inject(CartService);

  addToCart(product: any) {
    product.addedToCart = true;
    this.cartService.increment(); // ✅ this will update the signal
  }
}
