import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  product = input.required<Product>();

  
  delete = output<number>();      
  like = output<number>();       

  
  onLike() {
    this.like.emit(this.product().id);
  }

 
  onDelete() {
    if (confirm('Delete the product?')) {
      this.delete.emit(this.product().id);
    }
  }

  
  shareViaWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product().name + ': ' + this.product().link)}`;
    window.open(url, '_blank');
  }

  
  shareViaTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }

  
  get fullStars(): number[] {
    return Array(Math.floor(this.product().rating)).fill(0);
  }
  get hasHalfStar(): boolean {
    return this.product().rating % 1 >= 0.5;
  }
  get emptyStars(): number[] {
    return Array(5 - Math.ceil(this.product().rating)).fill(0);
  }
}