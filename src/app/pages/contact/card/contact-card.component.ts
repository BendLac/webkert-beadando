import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact?: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
