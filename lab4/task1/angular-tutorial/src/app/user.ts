import {Component, input} from '@angular/core';

/*@Component({
    selector: 'app-user',
    template: `<p>The user's name is {{name() }}</p>`,
})

export class User {
    readonly name = input<string>();
}

import {NgOptimizedImage }from '@angular/common';

@Component({
    selector: 'app-user',
    template: `
    <p>Username: {{Username}}</p>
    <p>Preferred Framework:</p>
    <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
    </li>
    <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32"/>
    </li>`,
    imports: [NgOptimizedImage],
})

export class User {
    logoUrl= '/logo.svg';
    logoAlt= 'Angular logo';
    username ='youngTech';
}
    
import {FormsModule} from '@angular/forms';
@Component({
    selector: 'app-user',
    template:`
    <p>Username: {{username}}</p>
    <p>{{ username }}</p>
    <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework"/>
    </label>`,
    imports : [FormsModule],
})

export class User{
    favoriteFramework = '';
    username ='youngTech';
}  //FORMS


*/

import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}  //Getting form control values


