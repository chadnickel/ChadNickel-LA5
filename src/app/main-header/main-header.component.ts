import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  firstName = 'Chad';
  lastName = 'Nickel';
  greeting = 'R1C2';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showGreeting() {

    this.greeting = 'Hello this was made by: ' + this.firstName + ' ' + this.lastName + '.';
  }

  resetGreeting() {

    this.greeting = 'R1C2';
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }



}

