import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {

  billingForm: FormGroup;
  billingInformation;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.billingInformation = this.userService.getBillingInformation();

    this.billingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required]
    });

    if (this.billingInformation) {
      this.billingForm.patchValue({
        firstName: this.billingInformation['firstName'],
        lastName: this.billingInformation['lastName'],
        email: this.billingInformation['email'],
        phone: this.billingInformation['phone'],
        address: this.billingInformation['address'],
        city: this.billingInformation['city'],
        country: this.billingInformation['country'],
        zipcode: this.billingInformation['zipcode']
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.billingForm.invalid) {
      return false;
    }
    else {
      console.log(this.billingForm.value);
      this.userService.setBillingInformation(this.billingForm.value);
      this.router.navigate(['/order', 'payment-info']);
    }
  }

  get formControls() { return this.billingForm.controls; }

}
