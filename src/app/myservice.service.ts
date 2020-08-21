import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: Http) { }

  GetOTP(Num: any) {
    return this.http.get('https://direct-prod-directportal.godigit.com/DirectPortal/generate/otp/' + Num);
  }

  ValidateOTP(Otp) {
    return this.http.get('https://direct-prod-directportal.godigit.com/DirectPortal/validate/otp/' + Otp)
  }
}
