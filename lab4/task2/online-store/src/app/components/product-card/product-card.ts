import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {
  @Input() product!: ProductModel;

  currentImageIndex: number = 0;
  showGallery: boolean = false;

  get Stars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }
  get EmptyStars(): number[] {
    return Array(5 - Math.floor(this.product.rating)).fill(0);
  }
  get Halfstars(): number[] {
    return this.product.rating % 1 >= 0.5 ? [0] : [];
  }

   prevImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  
  nextImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

shareOnWhatsApp(){
  const url = ` https://wa.me/?text=Check out this product: ${this.product.link}`;
  window.open(url, '_blank');
}

shareOnTelegram(){
  const url =`https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;
  window.open(url, '_blank');
}

selectedImage: string = '';

openGallery(image: number) {
  this.selectedImage = this.product.images[image];
  this.currentImageIndex = image;
  this.showGallery = true;
}
closeGallery() {
  this.showGallery = false;
}
}
