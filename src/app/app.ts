import { Component } from '@angular/core';
import { ProductsPage } from './products-page/products-page';
import { Navbar } from './navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [ProductsPage, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
