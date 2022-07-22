import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'furama';

  ngOnInit(): void {
    this.changeTitle();
  }

  constructor(private titleService: Title, private router: Router, private activePage: ActivatedRoute) {
  }

  // a-router-events

  changeTitle() {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          this.titleService.setTitle(this.activePage.firstChild.snapshot.data.title);
          break;
        default:
          break;
      }
    });
  }
}
