import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private subject = new Subject<any>();

  constructor(private breakpointObserver: BreakpointObserver) { }

  sendData(message: string) {
    this.subject.next(message);
  }

  clearData() {
    this.subject.next();
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  isHandset(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe( map(result => result.matches ))
  }
}
