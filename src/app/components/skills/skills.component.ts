import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills: any[] = [
    {
      skillTitle: "Backend Development",
      skillItems: [
        { title: "C#" },
        { title: "ASP.NET Core Web API" },
        { title: "ASP.NET Core MVC" },
        { title: "Microsoft SQL Server" },
        { title: "Entity Framework Core" },
        { title: "LINQ" },
        { title: "OOP" },
      ]
    },
    {
      skillTitle: "Architecture & Patterns",
      skillItems: [
        { title: "Clean Architecture" },
        { title: "Onion Architecture" },
        { title: "N-tier Architecture" },
        { title: "CQRS" },
        { title: "MediatR" },
        { title: "Repository Pattern" },
        { title: "Unit of Work" },
        { title: "Specification Pattern" },
      ]
    },
    {
      skillTitle: "Testing & Tools",
      skillItems: [
        { title: "Unit Testing" },
        { title: "Integration Testing" },
        { title: "xUnit" },
        { title: "AutoMapper" },
        { title: "Fluent Validation" },
        { title: "Serilog" },
      ]
    },
    {
      skillTitle: "Frontend",
      skillItems: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JavaScript" },
        { title: "Bootstrap" },
        { title: "Angular" },
      ]
    },
    {
      skillTitle: 'Version Control',
      skillItems: [
        { title: "Git" },
        { title: "GitHub" },
      ]
    }
  ]
  
  ngOnInit(): void {
    $('.Skills').fadeOut(0).fadeIn(600);
  }
}