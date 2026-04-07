import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Photos</h2>
      <div *ngIf="loading" class="loader">Loading...</div>
      <div *ngIf="!loading && photos.length === 0" class="empty">No photos found for this album.</div>
      <div class="photo-grid" *ngIf="!loading && photos.length > 0">
        <div *ngFor="let photo of photos" class="photo-card">
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" class="thumbnail" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
      <button (click)="goBack()" class="btn back">Back to Album</button>
    </div>
  `,
  styles: [`
    .container { padding: 2rem; }
    .loader, .empty { text-align: center; }
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .photo-card {
      border: 1px solid #ddd;
      padding: 0.5rem;
      border-radius: 4px;
      text-align: center;
    }
    .thumbnail { width: 100%; height: auto; border-radius: 4px; }
    .photo-title { font-size: 0.8rem; margin-top: 0.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .btn.back { background: #6c757d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  goBack() {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', albumId]);
  }
}