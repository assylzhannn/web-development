import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';
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
  
  private productsByCategory = signal<Map<number, Product[]>>(new Map());
  currentProducts = signal<Product[]>([]);
  
  private productService = inject(ProductService);

  constructor() {
    this.categories.set(this.productService.getCategories());
    this.loadAllCategoriesProducts();
    
    if (this.categories().length > 0) {
      this.selectCategory(this.categories()[0].id);
    }
  }

  private loadAllCategoriesProducts() {
    const categoriesMap = new Map<number, Product[]>();
    this.categories().forEach(category => {
      const products = this.productService.getProductsByCategory(category.id);
      categoriesMap.set(category.id, products);
    });
    this.productsByCategory.set(categoriesMap);
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId.set(categoryId);
    const categoryProducts = this.productsByCategory().get(categoryId) || [];
    this.currentProducts.set(categoryProducts);
  }

  onDeleteProduct(productId: number) {
    const currentCategoryId = this.selectedCategoryId();
    if (!currentCategoryId) return;

    this.productService.deleteProduct(productId);
    
    const updatedProducts = this.productService.getProductsByCategory(currentCategoryId);
    
    const currentMap = new Map(this.productsByCategory());
    currentMap.set(currentCategoryId, updatedProducts);
    this.productsByCategory.set(currentMap);
    
    this.currentProducts.set(updatedProducts);
  }

  onLikeProduct(productId: number) {
    const currentCategoryId = this.selectedCategoryId();
    if (!currentCategoryId) return;

    this.productService.likeProduct(productId);
    
    const updatedProducts = this.productService.getProductsByCategory(currentCategoryId);
    
    const currentMap = new Map(this.productsByCategory());
    currentMap.set(currentCategoryId, updatedProducts);
    this.productsByCategory.set(currentMap);
    
    this.currentProducts.set(updatedProducts);
  }
}