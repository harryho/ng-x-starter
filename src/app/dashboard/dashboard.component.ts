import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isHandset$: Observable<boolean>;
  cards = [
    // { title: 'Card 1', cols: 2, rows: 1 },
    // { title: 'Card 2', cols: 1, rows: 1 },
    // { title: 'Card 3', cols: 1, rows: 2 },
    // { title: 'Card 4', cols: 1, rows: 1 }
  ];

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.isHandset$ = this.appService.isHandset();
    console.log( this.isHandset$ )
    this.isHandset$.subscribe((result)=>{
    this.cards = [
      { title: 'Card 1', cols: result? 1 : 2, rows: 1 },
      { title: 'Card 2', cols: 1, rows: 1 },
      { title: 'Card 3', cols: 1, rows: 2 },
      { title: 'Card 4', cols: 1, rows: 1 }
    ];
  })
  }
}
