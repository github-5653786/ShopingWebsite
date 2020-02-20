import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carosalimages',
  templateUrl: './carosalimages.component.html',
  styleUrls: ['./carosalimages.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class CarosalimagesComponent implements OnInit {

  constructor(private router:Router){}

  @HostListener('window:scroll', ['$event'])
  onScroll3() {
    let prev = window.pageYOffset;
    if (prev > 800) {
      document.getElementById("top").style.display = 'block'
    } else {
      document.getElementById("top").style.display = 'none';
    }
  }


  isMobileView = true;
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 500) {
      this.isMobileView = false;
    } else {
      this.isMobileView = true;
    }
  }

  login;
  ngOnInit() {
    if (localStorage.getItem("user") == "mustafa@gmail.com") {
      this.login = "Logout"
    } else {
      this.login = "Login"
    }
  }

  backtotop() {
    window.scrollTo({
      'behavior': 'smooth',
      'top': 0,
      'left': 0
    });
  }

  logout() {
    if (window.confirm("Are you sure want to logout")) {
      localStorage.removeItem("user");
      this.router.navigate(['/signup']);
    } else {
      console.log("you are in same page");

    }
  }

}
