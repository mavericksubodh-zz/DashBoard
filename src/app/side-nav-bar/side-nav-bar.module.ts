import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideNavBarRoutingModule } from './side-nav-bar-routing.module';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [SearchComponent, DashboardComponent, SideNavBarRoutingModule],
  imports: [
    CommonModule,
    SearchComponent,
    DashboardComponent,
    SideNavBarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    ]
})

export class SideNavBarModule { }
