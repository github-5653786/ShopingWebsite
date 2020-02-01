import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosalimagesComponent } from './carosalimages.component';

describe('CarosalimagesComponent', () => {
  let component: CarosalimagesComponent;
  let fixture: ComponentFixture<CarosalimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosalimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosalimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
