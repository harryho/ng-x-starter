import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { AuthGuard } from 'src/app/_guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard",component: DashboardComponent ,   canActivate: [AuthGuard]},
  { path: "page1", component: Page1Component , canActivate: [AuthGuard],},
  { path: "page2", component: Page2Component , canActivate: [AuthGuard],},
  { path: "**", redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })], //, { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
