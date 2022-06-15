import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Route } from '../route.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedRoute: string | undefined;

  constructor(router: Router) {  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(event => {
    this.selectedRoute = ((event as NavigationEnd).url)?.substring(1);
  });}

  public anchors =[
    {
      type:'text',
      text:"About Me",
      routerLink: Route.aboutme,
    }
  ]
  ngOnInit(): void {
  }

}
