import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private appService: AppService) {

  }

  ngOnInit() {
  }

}
