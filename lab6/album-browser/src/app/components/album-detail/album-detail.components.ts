import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="container" *ngIf="!loading && album">
      <h2>Album Detail</h2>
      <p><strong>ID:</strong> {{ album.id }}</p>
      <p><strong>User ID:</strong> {{ album.userId }}</p>
      <div class="edit-title">
        <label for="title">Title:</label>
        <input id="title" [(ngModel)]="album.title" class="title-input" />
        <button (click)="saveTitle()" class="save-btn">Save</button>
      </div>
      <div class="actions">
        <a [routerLink]="['/albums', album.id, 'photos']" class="btn">View Photos</a>
        <button (click)="goBack()" class="btn back">Back to Albums</button>
      </div>
    </div>
    <div *ngIf="loading" class="loader">Loading...</div>
  `,
  styles: [`
    .container { padding: 2rem; }
    .loader { text-align: center; }
    .edit-title { margin: 1rem 0; }
    .title-input { width: 100%; padding: 0.5rem; margin-right: 0.5rem; }
    .save-btn { background: #28a745; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .actions { margin-top: 2rem; }
    .btn { display: inline-block; margin-right: 1rem; padding: 0.5rem 1rem; background: #007bff; color: white; text-decoration: none; border: none; border-radius: 4px; cursor: pointer; }
    .btn.back { background: #6c757d; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  saveTitle() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(updated => {
        this.album = updated;
        alert('Album updated successfully!');
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}