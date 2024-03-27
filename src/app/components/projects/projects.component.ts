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
      title: 'Fresh Cart',
      description: 'E-Commerce website comes equipped with a range of features that include simplified user management (registration, login, and password reset), product browsing, product description viewing, adding and removing products from your cart, adding and removing products from your wishlist, and secure online payment transactions through an integrated payment gateway.',
      demo: 'https://abdalrhman80.github.io/Fresh-Cart-App',
      githubLink: 'https://github.com/abdalrhman80/Fresh-Cart-App',
      date: 'Feb 27 2024',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/typescript.svg', alt: 'TypeScript', DocsLink: 'https://www.typescriptlang.org/' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
        { src: 'assets/images/angular.svg', alt: 'Angular', DocsLink: 'https://angular.io/' },
        { src: '', alt: 'Api', DocsLink: '' },
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
        { src: '', alt: 'Api', DocsLink: '' },
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
      title: 'Weather Forecast',
      description: 'The Weather-Forecast JS app is a user-friendly web tool for checking real-time weather forecasts. Developed with HTML, CSS, and JavaScript, it uses a weather API to provide users with essential details like temperature, humidity, and wind speed.',
      demo: 'https://abdalrhman80.github.io/Weather-Forecast/',
      githubLink: 'https://github.com/abdalrhman80/Weather-Forecast',
      date: ' Jan 6 2023',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/js.svg', alt: 'JavaScript', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
        { src: '', alt: 'Api', DocsLink: '' },
      ],
      overview: [
        'assets/images/overview-Images/Weather-Forecast.png',
      ]
    },
    {
      title: 'Login System',
      description: `This system consists of: Sign-up form for users to register with a unique email address, name, and password, Sign-in form for logging in with email and password, Home page displaying the user's name upon successful sign-in.`,
      demo: 'https://abdalrhman80.github.io/Smart-Login-System/',
      githubLink: 'https://github.com/abdalrhman80/Smart-Login-System',
      date: ' Jan 24 2023',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/js.svg', alt: 'JavaScript', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { src: 'assets/images/bootstrap.svg', alt: 'Bootstrap', DocsLink: 'https://getbootstrap.com/' },
      ],
      overview: [
        'assets/images/overview-Images/Login-System/Login-System1.png',
        'assets/images/overview-Images/Login-System/Login-System2.png',
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
    {
      title: 'Mealify',
      description: `Simple responsive website with dark-mode feature`,
      demo: 'https://abdalrhman80.github.io/Mealify/',
      githubLink: 'https://github.com/abdalrhman80/Mealify/',
      date: ' Nov 18 2023',
      technologies: [
        { src: 'assets/images/html.svg', alt: 'HTML', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { src: 'assets/images/css.svg', alt: 'CSS', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { src: 'assets/images/js.svg', alt: 'JavaScript', DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      ],
      overview: [
        'assets/images/overview-Images/Mealify/Mealify1.png',
        'assets/images/overview-Images/Mealify/Mealify2.png',
        'assets/images/overview-Images/Mealify/Mealify3.png',
        'assets/images/overview-Images/Mealify/Mealify4.png',
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
