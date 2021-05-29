import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { getAccountForm } from 'src/app/shared/forms/account.form';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getAccountForm(); 
    const idFormArray = this.form.get('identify') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.href.setValue("jani");
  }

  log(): void {
    console.log(this.form?.value);
  }
}
