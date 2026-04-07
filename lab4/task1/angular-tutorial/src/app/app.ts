import { Component } from '@angular/core';

/*@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
}

@Component({
  selector: 'app-user',
  template: `Username: {{username}}`,
})
export class User {
  username = 'Assylzhan';
}
@Component({
  selector: 'app-root',
  template: `<section>
              <app-user />
            </section>`,
            imports: [User],
})*/

/*@Component({
  selector: `app-root`,
  template: `
    @if (isServerRunning){
      <span>Yes, server is running</span>
    }@else{
      <span>No server is not running</span>
      }`,
})
export class App {
  isServerRunning= true;
} */ //IF ELSE

/*@Component({    FOR
  selector :'app-root',
  template:`
   @for (user of users; track user.id){
    <p>{{user.name}}</p>
   }`,
})
export class App{
  users = [
    {id : 0, name : 'Sarah'},
    {id:1 , name: 'Amy'},
    {id:2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id:4, name: 'Poornima'},
  ];
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template:`<div [contentEditable]="isEditable"></div>`,
})

export class App {
  isEditable = true;
}         PROPERTY BINDING
         

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
    There's a secret message here. Hover to see it.{{message}}
    </section>`,
})

export class App {
  message = '';

  showSecretMessage() {
  this.message = 'Way to go';
  }
}  //EVENT HANDLING

import {User} from './user';

@Component({
  selector: 'app-root',
  template: `<app-user name=" Simran" />`,
  imports: [User],
})
export class App{}     //Component input

import {Child} from './child';

@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>turtle all the way down {{ items.length }}</p>`,
    imports:[Child],
})
export class App{
  items= new Array();

  addItem(item: string){
    this.items.push(item);
  }            //Component output properties
}   
   

import { Comments } from './comments';
@Component({
  selector: 'arr-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading(minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
    `,
    imports: [Comments],
})
export class App{}   //DEFERRABLE Views


import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template:`
  <nav>
    <a href="/">Home</a>
    |
    <a href="/users">User</a>
  </nav>
  <router-outlet />`,
  imports: [RouterOutlet],
})

export class App{}   //ROUTING



import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class App {}


import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}  //Reactive Forms
*/


/*import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}           //Validating forms
*/

/*import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class App {
  carService = inject(CarService);
}
//Creating an injectable service
*/

/*import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class App {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}     //injecting a dependency

*/


/*import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class App {
  username = 'yOunGTECh';
}
  //PIPES
   */



/*
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class App {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}*/ //FORMATTING DATA WITH PIPES

/*import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}  //Create a pipe
 */









