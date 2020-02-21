import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './side-nav-bar/search/search.component';
import { DashboardComponent } from './side-nav-bar/dashboard/dashboard.component';


const routes: Routes = [
 { path: 'search', component: SearchComponent},
 { path : 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
