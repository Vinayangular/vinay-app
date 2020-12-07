import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) { }

  navigateToHome() {
    console.log("Home Clicked");
    this.router.navigate(['home']);
  };

  navigateToMens() {
    console.log("Mens Clicked");
    this.router.navigate(['mens']);
  };

  navigateToWomens() {
    console.log("Womens Clicked");
    this.router.navigate(['womens']);
  };

  navigateToKids() {
    console.log("Kids Clicked");
    this.router.navigate(['kids']);
  };

  navigateToAbout() {
    console.log("About Clicked");
    this.router.navigate(['about']);
  };

}
