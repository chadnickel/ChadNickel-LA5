import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  condX = false;
  condY = false;

  r2conX = false;
  r2conY = true;

  r3conX = true;
  r3conY = false;

  r4conX = true;
  r4conY = true;

  constructor() { }

  ngOnInit() {
  }

}
