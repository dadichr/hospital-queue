import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisitorInterface } from './visitor.interface';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputVisitorDetailsService {
  constructor(private http: HttpClient) {}

  postData(
    fullname: string,
    dob: string,
    gender: string,
    // tslint:disable-next-line:variable-name
    bpjs_no: string,
    address: string,
    address2: string,
    phone: string,
    region: string,
    province: string
  ): Observable<any> {
    let patient: VisitorInterface;
    patient = {
      fullname,
      dob,
      gender,
      bpjs_no,
      address,
      address2,
      phone,
      region,
      province,
    };
    console.log(patient);
    return this.http.post<any>(`${environment.backendUrl}patients`, patient);
  }
}
