import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro-home',
    templateUrl: 'intro.template.html',
    styleUrls: ['./intro.style.css']
})

export class IntroComponent implements OnInit {
    intro: any;

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
}
