import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  darkModeFlag!: boolean;
  @Input() sidebarVisible!: boolean;
  @Output() sidebarHide = new EventEmitter<any>();
  toggleSidebar() {
    this.sidebarHide.emit(this.sidebarVisible);
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
