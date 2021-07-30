import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputVisitorDetailsService } from './input-visitor-details.service';
@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  visitorForm!: FormGroup;

  constructor(
    private inputVisitorDetailsSrv: InputVisitorDetailsService,
    private fb: FormBuilder
  ) {}

  createForm(): void {
    this.visitorForm = this.fb.group({
      fullname: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      bpjs_no: ['', Validators.required],
      address: [''],
      address2: [''],
      phone: [''],
      region: [''],
      province: [''],
    });
  }

  postData(formData: any): void {
    console.log(formData);

    const fullname = formData.fullname;
    const dob = formData.dob;
    const gender = formData.gender;
    const bpjs_no = formData.bpjs_no;
    const address = formData.address;
    const address2 = formData.address2;
    const phone = formData.phone;
    const region = formData.region;
    const province = formData.province;
    this.inputVisitorDetailsSrv
      .postData(
        fullname,
        dob,
        gender,
        bpjs_no,
        address,
        address2,
        phone,
        region,
        province
      )
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
    this.createForm();
  }
}
