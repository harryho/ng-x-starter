
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from "../shared/material.module";
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../_services';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../app.service';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent, LoginComponent],
      imports: [MaterialModule,
        BrowserAnimationsModule, HttpClientModule,
        RouterTestingModule, ReactiveFormsModule,  MaterialModule],
      providers: [AppService, AuthenticationService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
