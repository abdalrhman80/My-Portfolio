import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cards: any[] = [
    {
      title: "Backend development",
      Src: 'assets/images/Development.svg',
      alt: 'Development',
      description: 'Passionate about developing robust APIs, database structures, and backend systems, leveraging .NET technologies to build efficient applications.'
    },
    {
      title: "Attention to details",
      Src: 'assets/images/Search.svg',
      alt: 'Search',
      description: 'I focus on writing clean and efficient code, ensuring every aspect of backend logic works flawlessly to deliver a reliable experience.'
    },
    {
      title: "Continuous learning",
      Src: 'assets/images/Learning.svg',
      alt: 'Learning',
      description: 'I dedicated to learning and stay updated with the latest backend development trends, tools, and best practices, especially in the .NET ecosystem.'
    },
    {
      title: "Responsive design",
      Src: 'assets/images/Responsive.svg',
      alt: 'Responsive',
      description: ' I specialize in developing websites that seamlessly adapt across diverse screen sizes and devices.'
    },
  ]
  ngOnInit(): void {
    $('.aboutSection').fadeOut(0).fadeIn(600);
  }
}
