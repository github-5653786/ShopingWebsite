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
    let cur = window.pageXOffset;
    // console.log(prev);

    if (prev > 800) {
      document.getElementById("top").style.display = 'block';
    } else {
      document.getElementById("top").style.display = 'none';
    }
    prev = cur
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
