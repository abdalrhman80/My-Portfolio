import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myPortfolio';
  ngOnInit(): void {
    if (localStorage.getItem('darkClass')) document.body.classList.add('dark-mode')
  }
}
