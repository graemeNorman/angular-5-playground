import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-intro-home',
    templateUrl: 'intro.template.html',
    styleUrls: ['./intro.style.css']
})

export class IntroComponent implements OnInit {
    intro: any;

    constructor(private router: Router) { }

    ngOnInit() {
      this.intro = {
        heading: 'Welcome to Angular 5 playground app',
        contents: [
          'HttpClient',
          'Observables',
          'Reactive forms',
          'SASS / Bootstrap 4',
          'Redux data store',
        ]
      };
    }

    public showResults() {
      console.log('you clicked me... nice one!!');
      this.router.navigate(['/', 'searchResults']);
      //   .then(
      //   nav => {
      //     console.log(nav);
      //   }, err => {
      //     console.log(err);
      //   }
      // );
    }

}
