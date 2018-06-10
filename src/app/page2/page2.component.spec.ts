import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Component } from './page2.component';
import { MaterialModule } from "../shared/material.module";

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2Component ],
      imports:[MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
