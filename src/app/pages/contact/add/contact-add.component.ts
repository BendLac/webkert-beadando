import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    socialNetworkId: new FormControl(''),    //id
    contactName: new FormControl('', Validators.required), 
    city: new FormControl(''), 
    contactType: new FormControl(''), 
    country: new FormControl(''), 
    emailAddress: new FormControl(''), 
    faxNumber: new FormControl(''), 
    phoneNumber: new FormControl(''), 
    postCode: new FormControl(''), 
    stateOrProvince: new FormControl(''), 
    street1: new FormControl(''), 
    street2: new FormControl(''), 
    //street2: new FormControl('asdasd'), alapérték megadás
    //street2: new FormControl(), szám megadás
  });

  constructor(public dialogRef: MatDialogRef<ContactAddComponent>) { }

  ngOnInit(): void {
  }

/*   close(): void {
    if(this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  } */
}
