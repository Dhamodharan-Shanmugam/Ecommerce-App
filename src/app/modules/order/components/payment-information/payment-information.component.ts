import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent implements OnInit {

  paymentForm: FormGroup;
  cardInformation;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.cardInformation = this.userService.getCardInformation();
    this.paymentForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      cardNumber: ['', [Validators.required,Validators.pattern('[0-9-]{19,}')]],
      expireDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])[\/\-]([0-9]{4})')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
    if (this.cardInformation) {
      this.paymentForm.patchValue({
        fullName: this.cardInformation['fullName'],
        cardNumber: this.cardInformation['cardNumber'],
        expireDate: this.cardInformation['expireDate'],
        cvv: this.cardInformation['cvv']
      })
    }
  }

  get formControls() { return this.paymentForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.invalid) {
      return false;
    }
    else {
      console.log(this.paymentForm.value);
      this.userService.setCardInformation(this.paymentForm.value);
      this.router.navigate(['/order', 'order-conformation']);
    }


  }

}
