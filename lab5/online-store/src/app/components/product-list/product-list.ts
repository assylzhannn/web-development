import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../../components/product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent

  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  
  products = input.required<Product[]>();
  
  productsChange = output<Product[]>();


  onDeleteProduct(productId: number) {
    const updatedProducts = this.products().filter(p => p.id !== productId);
    this.productsChange.emit(updatedProducts);
  }


  onLikeProduct(productId: number) {
    const updatedProducts = this.products().map(p => 
      p.id === productId ? { ...p, likes: p.likes + 1 } : p
    );
    this.productsChange.emit(updatedProducts);
  }

  
  hasProducts(): boolean {
    return this.products().length > 0;
  }
}