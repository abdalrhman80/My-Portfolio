import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cards: any[] = [
    {
      title: "Attention to details", Src: 'assets/images/Search.svg', alt: 'Search',
      description: 'I obsess over every pixel and detail, ensuring seamless user experiences , honed to perfection in every project.'
    },
    {
      title: "Continuous learning", Src: 'assets/images/Learning.svg', alt: 'Learning',
      description: 'I\'m trying to stay up-to-date with latest trends, technologies, and best practices in frontend development.'
    },
    {
      title: "Responsive design", Src: 'assets/images/Responsive.svg', alt: 'Responsive',
      description: ' I specialize in developing websites that seamlessly adapt across diverse screen sizes and devices.'
    },
    {
      title: "Web development", Src: 'assets/images/Development.svg', alt: 'Development',
      description: 'Now, I study Backend development, and I am excited to develop my skills in it, My journey in development continues.'
    }
  ]
  ngOnInit(): void {
    $('.aboutSection').fadeOut(0).fadeIn(600);
  }
}
