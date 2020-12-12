import { CounterService } from './counterService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeInactive: number;
  inactiveActive: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.activeInactive = this.counterService.activeInactive;
    this.inactiveActive = this.counterService.inactiveActive;
  }
}
