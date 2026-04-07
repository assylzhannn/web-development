import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { background: #333; padding: 1rem; display: flex; gap: 1rem; }
    nav a { color: white; text-decoration: none; padding: 0.5rem; }
    nav a.active { font-weight: bold; border-bottom: 2px solid yellow; }
  `]
})
export class AppComponent {}