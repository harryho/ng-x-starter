import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Http, HttpModule, BrowserXhr } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MaterialModule } from "./shared/material.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
// import { ROUTES } from "./app.routes";

import { AppService } from './app.service';

import { environment } from '../environments/environment';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthGuard } from './_guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_services';
import { UserService } from './_services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_services/jwt.interceptor';
import { fakeBackendProvider } from './_services/fake.backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    Page1Component,
    Page2Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AppService,
    AuthGuard,
    AuthenticationService,
    UserService,
    fakeBackendProvider
  ],
  entryComponents:[LoginComponent],
  bootstrap: [AppComponent],
  exports: [MaterialModule],
})
export class AppModule { }
