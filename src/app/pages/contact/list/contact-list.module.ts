import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { ContactAddModule } from '../add/contact-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactCardModule } from '../card/contact-card.module';
import { ContainerModule } from 'src/app/shared/container/container.module';
import { ContactListRoutingModule } from './contact-list-routing,module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ContactListRoutingModule,
    MatToolbarModule,
    ContainerModule,
    ContactCardModule,
    MatButtonModule,
    MatIconModule,
    ContactAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule
  ]
})
export class ContactListModule { }
