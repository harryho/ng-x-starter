
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from "../shared/material.module";
// import { RouterModule , RouterOutlet} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from 'src/app/app.service';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent],
      imports:[MaterialModule, BrowserAnimationsModule,RouterTestingModule, MaterialModule],
      providers:[AppService]
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
