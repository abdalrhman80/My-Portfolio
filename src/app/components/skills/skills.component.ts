import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills: any[] = [
    {
      skillTitle: "Programming Languages",
      skillItems: [
        { title: "JavaScript", imgSrc: "assets/images/js.svg", DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { title: "TypeScript", imgSrc: "assets/images/typescript.svg", DocsLink: 'https://www.typescriptlang.org/' },
      ]
    },
    {
      skillTitle: 'FrameWorks',
      skillItems: [
        { title: "Angular", imgSrc: "assets/images/angular.svg", DocsLink: 'https://angular.io/' },
      ]
    },
    {
      skillTitle: "Markup Languages",
      skillItems: [
        { title: "HTML", imgSrc: "assets/images/html.svg", DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { title: "CSS", imgSrc: "assets/images/css.svg", DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { title: "SASS", imgSrc: "assets/images/sass.svg", DocsLink: 'https://sass-lang.com/' },
      ]
    },
    {
      skillTitle: 'Libraries',
      skillItems: [
        { title: "Bootstrap", imgSrc: "assets/images/bootstrap.svg", DocsLink: 'https://getbootstrap.com/' },
        { title: "jQuery", imgSrc: "assets/images/jquery.svg", DocsLink: 'https://jquery.com/' },
        { title: "PrimeNG", imgSrc: "assets/images/primeng-logo.svg", DocsLink: 'https://primeng.org/' },
      ]
    },
    {
      skillTitle: 'Additional Skills',
      skillItems: [
        { title: "Git", imgSrc: "assets/images/git.svg  ", DocsLink: 'https://git-scm.com/' },
        { title: "GitHub", imgSrc: "assets/images/github.svg", DocsLink: 'https://github.com/' },
      ]
    }
  ]
  ngOnInit(): void {
    $('.Skills').fadeOut(0).fadeIn(600);
  }
}
