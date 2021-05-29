import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list.component';
import { AccountListRoutingModule } from './account-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/container/container.module';
import { AccountCardModule } from '../card/account-card.module';



@NgModule({
  declarations: [
    AccountListComponent
  ],
  imports: [
    CommonModule,
    AccountListRoutingModule,
    MatToolbarModule,
    ContainerModule,
    AccountCardModule
  ]
})
export class AccountListModule { }
