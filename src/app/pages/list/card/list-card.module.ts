import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card.component';



@NgModule({
  declarations: [ListCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ListCardComponent]
})
export class ListCardModule { }
