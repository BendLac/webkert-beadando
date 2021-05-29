import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list.component';

const routes: Routes = [
    {
        path: '',
        component: AccountListComponent,
        data: { title: 'Fiókok - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountListRoutingModule { }