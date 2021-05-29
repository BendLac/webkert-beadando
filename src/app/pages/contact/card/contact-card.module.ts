import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';



@NgModule({
  declarations: [ContactCardComponent],
  imports: [
    CommonModule,
    MatCardModule, 
    MatIconModule, 
    MatButtonModule,
    OnHoverModule
  ],
  exports: [ContactCardComponent]
})
export class ContactCardModule { }
