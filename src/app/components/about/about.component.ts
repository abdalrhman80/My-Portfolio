import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cards: any[] = [
    {
      title: "Backend Development",
      Src: 'assets/images/Development.svg',
      alt: 'Development',
      description: 'Specialized in building scalable RESTful APIs using C# and ASP.NET Core, with expertise in Clean Architecture, CQRS patterns, and Entity Framework Core for robust backend solutions.'
    },
    {
      title: "Clean Architecture",
      Src: 'assets/images/Architecture.svg',
      alt: 'Architecture',
      description: 'Proficient in implementing Clean Architecture principles, N-tier architecture, and design patterns like Repository, Unit of Work, and Specification patterns for maintainable code.'
    },
    {
      title: "Database Design",
      Src: 'assets/images/Database.svg',
      alt: 'Database',
      description: 'Experienced in designing and optimizing database structures using Microsoft SQL Server, implementing efficient data access layers with Entity Framework Core.'
    },
    {
      title: "Testing & Quality",
      Src: 'assets/images/Testing.svg',
      alt: 'Testing',
      description: 'Committed to code quality through unit and integration testing using xUnit, ensuring reliable and maintainable applications with comprehensive test coverage.'
    },
    {
      title: "Security",
      Src: 'assets/images/Security.svg',
      alt: 'Security',
      description: 'Skilled in implementing secure authentication systems using ASP.NET Identity, JWT tokens, OAuth 2.0, and role-based access control for protected applications.'
    },
    {
      title: "Continuous Learning",
      Src: 'assets/images/Learning.svg',
      alt: 'Learning',
      description: 'Dedicated to staying updated with the latest .NET ecosystem developments, backend technologies, and software engineering best practices through continuous learning and hands-on projects.'
    }
  ]
  
  ngOnInit(): void {
    $('.aboutSection').fadeOut(0).fadeIn(600);
  }
}