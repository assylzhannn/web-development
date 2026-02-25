import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { TengePipe } from '../../pipes/tenge.pipe';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, TengePipe],
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
    this.delete.emit(this.product().id);
  }

  shareViaWhatsApp() {
    const text = encodeURIComponent(this.product().name + ': ' + this.product().link);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareViaTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
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