import { Component, OnInit } from '@angular/core';
import {IShowBasics} from '../ishow-basics';
import { ShowService } from '../show/show.service';


@Component({
  selector: 'app-show-basics',
  templateUrl: './show-basics.component.html',
  styleUrls: ['./show-basics.component.css']
})
export class ShowBasicsComponent implements OnInit {
basic: IShowBasics
  constructor(private showservice: ShowService) { 
  }

  ngOnInit() {
    this.showservice.getMainShow('name').subscribe(data => this.basic = data);
  }

}
