import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Albums</h2>
      <div *ngIf="loading" class="loader">Loading...</div>
      <div *ngIf="!loading && albums.length === 0" class="empty">No albums found.</div>
      <ul class="album-list">
        <li *ngFor="let album of albums" class="album-item">
          <a [routerLink]="['/albums', album.id]" class="album-link">
            {{ album.id }}: {{ album.title }}
          </a>
          <button (click)="deleteAlbum(album.id)" class="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .container { padding: 2rem; }
    .loader { text-align: center; font-size: 1.2rem; }
    .empty { text-align: center; color: #666; }
    .album-list { list-style: none; padding: 0; }
    .album-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid #eee;
    }
    .album-link {
      text-decoration: none;
      color: #333;
      flex: 1;
    }
    .album-link:hover { text-decoration: underline; }
    .delete-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.3rem 0.8rem;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}