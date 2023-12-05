import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'homes';
  names : string [] = [];

  constructor() {
  }

  ngOnInit(){
    console.log('on init');
    this.names = ['Ahmet','Sedat','Mehmet'];
  }

  addNewPerson(value:string){
    console.log('Adding new person: '+value);
    this.names.push(value);
    value="";
  }

  isNullOrEmptyOrUndefined(value : string){
    return !value;
  }

}
