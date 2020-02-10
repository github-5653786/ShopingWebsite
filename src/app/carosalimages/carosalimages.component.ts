import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carosalimages',
  templateUrl: './carosalimages.component.html',
  styleUrls: ['./carosalimages.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class CarosalimagesComponent implements OnInit {

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


  ngOnInit() {
  }

  backtotop() {
    window.scrollTo({
      'behavior': 'smooth',
      'top': 0,
      'left': 0
    });
  }

}
