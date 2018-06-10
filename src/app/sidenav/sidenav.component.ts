import { Component , EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MaterialModule } from "../shared/material.module";
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  private isHandset$: Observable<boolean>;
  isMobile :boolean;

  panelOpenState: boolean = false;
  private isAuth :boolean  ;

  constructor(private breakpointObserver: BreakpointObserver,
     private appService: AppService,    private router: Router) {
  }

  ngOnInit() {
    this.isHandset$ = this.appService.isHandset();
    this.appService.isHandset().subscribe((result)=>{ this.isMobile = result});
    this.isAuth = this.appService.isAuth();
  }

  hasSignined (signined: boolean) {
    this.isAuth = signined;
  }

  logout(): void {
    this.isAuth = false
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
    window.document.location.reload()
  }

  handleClick(drawer) : void {
    if (this.isMobile) {
      drawer.toggle();
    }
  }

}
