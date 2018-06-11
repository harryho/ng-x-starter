import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from "../shared/material.module";
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { AuthenticationService } from '../_services';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[MaterialModule, HttpClientModule,
        ReactiveFormsModule, RouterTestingModule],
      providers:[AppService, AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
