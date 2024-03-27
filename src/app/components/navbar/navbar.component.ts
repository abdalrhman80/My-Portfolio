import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkModeFlag!: boolean;
  sidebarVisible: boolean = false;
  ngOnInit(): void {
    localStorage.getItem('darkClass') ? this.darkModeFlag = true : this.darkModeFlag = false;
  }
  
  toggleSidebar(event: any) {
    this.sidebarVisible = event
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (localStorage.getItem('darkClass') == null) {
      localStorage.setItem('darkClass', 'dark-mode')
      this.darkModeFlag = true
    }
    else {
      localStorage.removeItem('darkClass')
      this.darkModeFlag = false
    }
  }
}
