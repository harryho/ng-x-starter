import { Component , EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { AppService } from 'src/app/app.service';
// import { EventEmitter } from 'selenium-webdriver';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  private isHandset$: Observable<boolean>;
  isMobile :boolean;

  // @Output() open: EventEmitter<boolean> = new EventEmitter();
  // @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver, private appService: AppService) {

  }

  ngOnInit() {
    this.isHandset$ = this.appService.isHandset();
    this.appService.isHandset().subscribe((result)=>{ this.isMobile = result});
  }

  handleClick(drawer) : void {
    if (this.isMobile) {
      drawer.toggle();
    }
  }

}
