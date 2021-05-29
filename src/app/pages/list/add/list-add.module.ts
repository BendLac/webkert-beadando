import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAddComponent } from './list-add.component';
import { AccountCardModule } from '../../account/card/account-card.module';



@NgModule({
  declarations: [ListAddComponent],
  imports: [
    CommonModule,
    AccountCardModule
  ],
  exports: [ListAddComponent]
})
export class ListAddModule { }
