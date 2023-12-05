import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: '<h1>Hello world!</h1> <br/> <h2>{{title}}</h2>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
