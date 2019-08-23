import { Component, OnInit } from '@angular/core';
import {IShowBasics} from '../ishow-basics';


@Component({
  selector: 'app-show-basics',
  templateUrl: './show-basics.component.html',
  styleUrls: ['./show-basics.component.css']
})
export class ShowBasicsComponent implements OnInit {
basic: IShowBasics
  constructor() { 
    this.basic = {
      name: 'Ellen',
      image: '',
      summary: 'Funny talk show'}
  }

  ngOnInit() {
  }

}
