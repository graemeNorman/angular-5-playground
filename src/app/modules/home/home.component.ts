import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-intro-home',
    templateUrl: 'home.template.html',
    styleUrls: ['./home.style.css']
})

export class IntroComponent implements OnInit {

  intro: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.intro = {
      heading: 'Deals App',
      contents: [
        'HttpClient',
        'Observables',
        'Reactive forms',
        'SASS / Bootstrap 4',
        'Redux data store',
      ]
    };
  }

  // public showResults() {
  //   // this.router.navigate(['/', 'searchResults']);
  //   this.router.navigate(['/searchResults'], { queryParams: { pageSize: 25, 'page': 1 } });
  // }

}
