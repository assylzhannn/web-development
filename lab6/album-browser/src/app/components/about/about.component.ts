import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container">
      <h2>About This App</h2>
      <p><strong>Developer:</strong> [Сіздің атыңыз]</p>
      <p><strong>Course:</strong> Angular Development</p>
      <p><strong>Version:</strong> Angular 17+ (Standalone)</p>
      <p>This application demonstrates routing, HTTP services, and CRUD operations using JSONPlaceholder API.</p>
    </div>
  `,
  styles: [`
    .container { padding: 2rem; }
  `]
})
export class AboutComponent {}