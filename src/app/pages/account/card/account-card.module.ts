import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';


@NgModule({
  declarations: [AccountCardComponent],
  imports: [
    CommonModule, 
    MatCardModule,
    MatButtonModule,
    OnHoverModule
  ],
  exports: [AccountCardComponent]
})
export class AccountCardModule { }
