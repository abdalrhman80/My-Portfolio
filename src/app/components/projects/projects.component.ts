import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  chipTextArr: string[] = [];
  projects: any[] = [
    {
      title: 'Shopping Cart',
      description: 'MVC E-commerce Website using ASP.NET Core 6, with admin and customer areas, Implemented ASP.NET Core Identity for user management, along with Generic Repository, Unit of Work, and Specification Pattern for clean architecture and reusable queries',
      demo: 'http://shoppingcart.runasp.net',
      githubLink: 'https://github.com/abdalrhman80/ShoppingCartMVC',
      date: 'Nov 15 2024',
      technologies: [
        { src: 'assets/images/Csharp.svg', alt: 'Csharp', DocsLink: 'https://dotnet.microsoft.com/en-us/languages/csharp' },
        { src: 'assets/images/ASP.NET-Core-Boxed.png', alt: 'MVC', DocsLink: 'https://learn.microsoft.com/en-us/aspnet/core/mvc/overview' },
        { src: 'assets/images/EFCore_Boxed.png', alt: 'EFCore', DocsLink: 'https://learn.microsoft.com/en-us/ef/core' },
        { src: 'assets/images/stripe.svg', alt: 'stripe', DocsLink: 'https://stripe.com/' },
        { src: 'assets/images/DotNetCore.svg', alt: 'Identity', DocsLink: 'https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity' },
      ],
      overview: [
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_1.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_2.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_3.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_4.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_5.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_6.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_7.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_8.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_9.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_10.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_11.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_12.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_13.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_14.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_15.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_16.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_17.png',
      ]
    },
    {
      title: 'Talabat',
      description: 'Scalable RESTful API using ASP.NET Core 6 with Onion Architecture, leveraging Generic Repository, Unit of Work, and Specification Pattern Integrated JWT authentication, Automapper, Stripe, and ASP.NET Core Identity..',
      demo: 'https://github.com/abdalrhman80/Talabat',
      githubLink: 'https://github.com/abdalrhman80/Talabat',
      date: 'Oct 24 2024',
      technologies: [
        { src: 'assets/images/Csharp.svg', alt: 'Csharp', DocsLink: 'https://dotnet.microsoft.com/en-us/languages/csharp' },
        { src: 'assets/images/ASP.NET-Core-Boxed.png', alt: 'WebAPI', DocsLink: 'https://dotnet.microsoft.com/en-us/apps/aspnet/apis' },
        { src: 'assets/images/EFCore_Boxed.png', alt: 'EFCore', DocsLink: 'https://learn.microsoft.com/en-us/ef/core' },
        { src: 'assets/images/JWT.png', alt: 'JWT', DocsLink: 'https://jwt.io/' },
        { src: 'assets/images/Automapper.png', alt: 'Automapper', DocsLink: 'https://automapper.org/' },
        { src: 'assets/images/stripe.svg', alt: 'stripe', DocsLink: 'https://stripe.com/' },
        { src: 'assets/images/DotNetCore.svg', alt: 'Identity', DocsLink: 'https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity' },
      ],
      overview: [
        'assets/images/overview-Images/Talabat/Talabat_1.jpeg',
        'assets/images/overview-Images/Talabat/Talabat_2.jpeg',
        'assets/images/overview-Images/Talabat/Talabat_3.jpeg',
      ]
    },
    {
      title: 'Fresh Cart',
      description: 'E-Commerce website comes equipped with a range of features that include simplified user management (registration, login, and password reset), product browsing, product description viewing, adding and removing products from your cart, adding and removing products from your wishlist, and secure online payment transactions through an integrated payment gateway.',
      demo: 'https://abdalrhman80.github.io/Fresh-Cart-App',
      githubLink: 'https://github.com/abdalrhman80/Fresh-Cart-App',
      date: 'Feb 26 2024',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/typescript.svg', alt: 'TypeScript', DocsLink: 'https://www.typescriptlang.org/' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
        { src: 'assets/images/angular.svg', alt: 'Angular', DocsLink: 'https://angular.io/' },
        
      ],
      overview: [
        'assets/images/overview-Images/freshCart/freshCart1.png',
        'assets/images/overview-Images/freshCart/freshCart2.png',
        'assets/images/overview-Images/freshCart/freshCart3.png',
        'assets/images/overview-Images/freshCart/freshCart4.png',
        'assets/images/overview-Images/freshCart/freshCart5.png',
        'assets/images/overview-Images/freshCart/freshCart6.png',
        'assets/images/overview-Images/freshCart/freshCart7.png',
      ]
    },
    {
      title: 'Recipes Website',
      description: 'A recipe website is a platform where users discover diverse cooking instructions. These sites feature a wide array of recipes categorized by region, ingredient, and meal type. Users can easily search for specific recipes and even watch accompanying YouTube videos for guidance.',
      demo: 'https://abdalrhman80.github.io/Recipes-Website/',
      githubLink: 'https://github.com/abdalrhman80/Recipes-Website',
      date: 'Jan 28 2023',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/js.svg', alt: 'JavaScript', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
        { src: 'assets/images/jquery.svg', alt: 'jQuery', DocsLink: 'https://jquery.com/' },
        
      ],
      overview: [
        'assets/images/overview-Images/Recipes-Website/Recipes-Website1.png',
        'assets/images/overview-Images/Recipes-Website/Recipes-Website2.png',
        'assets/images/overview-Images/Recipes-Website/Recipes-Website3.png',
        'assets/images/overview-Images/Recipes-Website/Recipes-Website4.png',
        'assets/images/overview-Images/Recipes-Website/Recipes-Website5.png',
      ]
    },
    {
      title: 'Todo-List',
      description: 'A simple Todo List application. The app allows users to add, edit, and delete tasks.',
      demo: 'https://abdalrhman80.github.io/Todo-List/',
      githubLink: 'https://github.com/abdalrhman80/Todo-List/',
      date: 'Mar 14 2024',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/typescript.svg', alt: 'TypeScript', DocsLink: 'https://www.typescriptlang.org/' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
        { src: 'assets/images/angular.svg', alt: 'Angular', DocsLink: 'https://angular.io/' },
        
      ],
      overview: [
        'assets/images/overview-Images/Todo-List/Todo-List1.png',
        'assets/images/overview-Images/Todo-List/Todo-List2.png',
      ]
    },
    {
      title: 'Personal Dashboard',
      description: 'The website consists of three main sections: Bookmark, Todo, and Note, You can easily add, update, or delete bookmarks, todos, and notes, Customize your experience by changing the background with random ',
      demo: 'https://abdalrhman80.github.io/Personal-Dashboard/bookmarks',
      githubLink: 'https://github.com/abdalrhman80/Personal-Dashboard',
      date: 'Mar 17 2024',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/sass.svg', alt: 'SASS', DocsLink: 'https://sass-lang.com/' },
        { src: 'assets/images/typescript.svg', alt: 'TypeScript', DocsLink: 'https://www.typescriptlang.org/' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
        { src: 'assets/images/angular.svg', alt: 'Angular', DocsLink: 'https://angular.io/' },
        { src: 'assets/images/primeng-logo.svg', alt: 'Primeng', DocsLink: 'https://primeng.org/' },
      ],
      overview: [
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard1.png',
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard2.png',
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard3.png',
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard4.png',
      ]
    },
    {
      title: 'Bookmark',
      description: `Application on CRUD operations, A user-friendly website URL bookmarker that allows you to save and organize your favorite websites with ease.`,
      demo: 'https://abdalrhman80.github.io/Bookmark/',
      githubLink: 'https://github.com/abdalrhman80/Bookmark',
      date: ' Dec 23 2023',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/js.svg', alt: 'JavaScript', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
      ],
      overview: [
        'assets/images/overview-Images/Bookmark.png',
      ]
    },
  ]
  constructor(public _Router: Router) { }
  ngOnInit(): void {
    $('.projectSection').fadeOut(0).fadeIn(600);
  }

  showProjectDes(project: any, event: any) {
    if (event.target.classList.contains('fa-link') || event.target.classList.contains('link-technology'))
      return
    else {
      this._Router.navigate(['/ProjectDesc', project.title])
      localStorage.setItem('project', JSON.stringify(project))
    }
  }
}
