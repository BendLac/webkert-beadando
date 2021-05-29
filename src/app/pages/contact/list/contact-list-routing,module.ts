import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list.component';

const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
        data: { title: 'Kontaktok - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactListRoutingModule { }