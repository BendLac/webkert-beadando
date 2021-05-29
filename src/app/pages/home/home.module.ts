import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
