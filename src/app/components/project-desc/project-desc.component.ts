import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-desc',
  templateUrl: './project-desc.component.html',
  styleUrls: ['./project-desc.component.scss']
})
export class ProjectDescComponent implements OnInit {
  project: any;
  displayCustom!: boolean;
  activeIndex: number = 0;
  ngOnInit(): void {
    $('.projectDescSection').fadeOut(0).fadeIn(600);
    this.project = JSON.parse(localStorage.getItem('project') || '')
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
