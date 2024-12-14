import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {

  mySkills: any[] = [];
  ngOnInit(): void {
    $('.landingSection').fadeOut(0).fadeIn(600);
    this.mySkills = [
      { title: ".Net Core", src: "assets/images/DotNetCore.svg", alt: ".Net Core" },
      { title: "Csharp", src: "assets/images/Csharp.svg", alt: "Csharp" },
      { title: "MSSQL Server", src: "assets/images/MSSQL-Server.svg", alt: "MSSQL Server" },
      { title: "Entity Framework Core", src: "assets/images/EFCore.svg", alt: "EFCore" },
      { title: "HTML", src: "assets/images/html.svg", alt: "HTML" },
      { title: "CSS", src: "assets/images/css.svg", alt: "CSS" },
      { title: "JavaScript", src: "assets/images/js.svg", alt: "JS" },
      { title: "TypeScript", src: "assets/images/typescript.svg", alt: "TS" },
      { title: "Bootstrap", src: "assets/images/bootstrap.svg", alt: "Bootstrap" },
      { title: "SASS", src: "assets/images/sass.svg", alt: "SASS" },
      { title: "jQuery", src: "assets/images/jquery.svg", alt: "jquery" },
      { title: "Angular", src: "assets/images/angular.svg", alt: "Angular" },
      { title: "Primeng", src: "assets/images/primeng-logo.svg", alt: "Primeng" },
      { title: "Git", src: "assets/images/git.svg", alt: "Git" },
      { title: "Github", src: "assets/images/github.svg", alt: "Github" },
    ]
  }
}
