import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddComponent } from '../add/contact-add.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, map, startWith } from 'rxjs/operators';
import { CONTACTS } from 'src/app/shared/database/contact.database';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  title = 'Kontaktok';
  list: Observable<Contact[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | null = null;

  constructor(private service: FirebaseService<Contact>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  get(): void {
    this.list = this.service.get('contacts');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactAddComponent, {});
    dialogRef.afterClosed().subscribe((contact: Contact) => {
      console.log(contact);
      if (contact?.contactName) {
        this.service.add('contacts', contact);
      }
    }, err => {
      console.warn(err);
    });
  }
}
