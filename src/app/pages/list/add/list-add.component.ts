import { Component, Input, OnInit } from '@angular/core';
import { Account } from './../../../shared/models/account.model';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss']
})
export class ListAddComponent implements OnInit {
  //@Input() more: Account = {} as any;
  constructor() { }

  ngOnInit(): void {
  }

}
