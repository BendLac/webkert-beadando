import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Account } from 'src/app/shared/models/account.model';
import { Router } from '@angular/router';
import { ACCOUNTS } from 'src/app/shared/database/account.database';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  title = 'Fiókok';
  list: Observable<Account[]> | null = null;

  constructor(private service: FirebaseService<Account>, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('accounts');
  }

  onGetAccount(event: Account): void {
    this.router.navigateByUrl('/details/account/' + event.id);
  }

/*   openDialog(): void {
    const dialogRef = this.dialog.open(ContactAddComponent, {});
    dialogRef.afterClosed().subscribe((contact: Contact) => {
      console.log(contact);
      if (contact?.contactName) {
        this.service.add('contacts', contact);
      }
    }, err => {
      console.warn(err);
    });
  } */
}
