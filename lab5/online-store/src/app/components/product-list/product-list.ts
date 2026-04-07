import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();
  
  productDeleted = output<number>();
  productLiked = output<number>();

  onDeleteProduct(productId: number) {
    this.productDeleted.emit(productId);
  }

  onLikeProduct(productId: number) {
    this.productLiked.emit(productId);
  }

  hasProducts(): boolean {
    return this.products().length > 0;
  }
}