import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../app/services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  categories = signal<Category[]>([]);
  selectedCategoryId = signal<number | null>(null);
  products = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    this.categories.set(this.productService.getCategories());
    this.products.set(this.productService.getProducts());
  }


  selectCategory(categoryId: number) {
    this.selectedCategoryId.set(categoryId);
  }

  
  getFilteredProducts(): Product[] {
    const selectedId = this.selectedCategoryId();
    if (!selectedId) return [];
    return this.products().filter(p => p.categoryId === selectedId);
  }

  
  updateProductsAfterDelete(updatedProducts: Product[]) {
    this.products.set(updatedProducts);
  }
}