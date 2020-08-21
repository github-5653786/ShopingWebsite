import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showNumModal: boolean;
  showValModal: boolean;
  validateOtp: boolean;
  number = '';

  constructor(private router: Router, private ser: MyserviceService) {
    this.showNumModal = true;
    this.showValModal = false;
    this.validateOtp = false;
  }

  ngOnInit() { }

  SendOTP(e) {
    if (e.number.length == 10) {
      this.ser.GetOTP(e.number).subscribe(data => {
        let dta = data;
      },
        error => {
          console.log("Error Occured ", error);

        });
      this.showNumModal = false;
      this.showValModal = true;
    } else {
      alert("Enter valid Number....!")
    }
  }

  validateOTP(otp) {
    this.ser.ValidateOTP(otp.otp).subscribe(responce => {
      let responces = responce;
      if (responces.status === 204) {
        this.validateOtp = true;
      } else {
        this.validateOtp = false;
        this.router.navigate(['/home']);
      }
    });
  }
}
