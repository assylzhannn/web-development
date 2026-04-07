import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Album Browser</h1>
      <p>Welcome to the Album Browser app. You can browse albums, view details, and manage them.</p>
      <a routerLink="/albums" class="btn">Browse Albums</a>
    </div>
  `,
  styles: [`
    .container { text-align: center; padding: 2rem; }
    .btn { display: inline-block; padding: 0.5rem 1rem; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }
  `]
})
export class HomeComponent {}