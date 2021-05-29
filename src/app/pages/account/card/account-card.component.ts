import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from './../../../shared/models/account.model';
import { MatDialog } from '@angular/material/dialog';
import { ACCOUNTS } from './../../../shared/database/account.database';



@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {
  //@Input() account: Account = {} as any;
  @Input() account?: Account;
  @Input() hasAction = true;
  //@Output() callMore = new EventEmitter<Account>();
  @Output() getAccount = new EventEmitter<Account>();
  
  //accounts = ACCOUNTS;

  constructor() { }


  ngOnInit(): void {
  }


/*   accountMore(event: any): void {
    event.stopPropagation();
    this.account.more = !this.account.more;
    this.callMore.emit(this.account);
  } */

/*   openDialog(): void {
    const dialogRef = this.dialog.open(ListAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.accounts.push(result);
      }
    });
  } */
}