import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills: any[] = [
    {
      skillTitle: "Frontend",
      skillItems: [
        { title: "HTML", imgSrc: "assets/images/html.svg", DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { title: "CSS", imgSrc: "assets/images/css.svg", DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { title: "JavaScript", imgSrc: "assets/images/js.svg", DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { title: "TypeScript", imgSrc: "assets/images/typescript.svg", DocsLink: 'https://www.typescriptlang.org/' },
        { title: "SASS", imgSrc: "assets/images/sass.svg", DocsLink: 'https://sass-lang.com/' },
        { title: "Bootstrap", imgSrc: "assets/images/bootstrap.svg", DocsLink: 'https://getbootstrap.com/' },
        { title: "jQuery", imgSrc: "assets/images/jquery.svg", DocsLink: 'https://jquery.com/' },
        { title: "Angular", imgSrc: "assets/images/angular.svg", DocsLink: 'https://angular.io/' },
        { title: "PrimeNG", imgSrc: "assets/images/primeng-logo.svg", DocsLink: 'https://primeng.org/' },
      ]
    },
    {
      skillTitle: "Backend",
      skillItems: [
        { title: "MSSQL Server", imgSrc: "assets/images/MSSQL-Server.png", DocsLink: 'https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16' },
        { title: "Csharp", imgSrc: "assets/images/Csharp.svg", DocsLink: 'https://dotnet.microsoft.com/en-us/languages/csharp' },
        { title: "OOP", imgSrc: "assets/images/Csharp-OOP.png", DocsLink: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop' },
        { title: "LINQ", imgSrc: "assets/images/LINQ.png", DocsLink: 'https://learn.microsoft.com/en-us/dotnet/csharp/linq/' },
        { title: "EF Core", imgSrc: "assets/images/EFCore.png", DocsLink: 'https://learn.microsoft.com/en-us/ef/core/' },
        { title: "ASP.NET Core MVC", imgSrc: "assets/images/MVC.webp", DocsLink: 'https://learn.microsoft.com/en-us/aspnet/core/mvc/overview' },
        { title: "ASP.NET Core Web API", imgSrc: "assets/images/Web-API.png", DocsLink: 'https://dotnet.microsoft.com/en-us/apps/aspnet/apis' },
      ]
    },
    {
      skillTitle: 'Version Control',
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
