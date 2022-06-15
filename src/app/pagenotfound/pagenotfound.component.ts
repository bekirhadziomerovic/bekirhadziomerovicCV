import { Component, OnInit } from '@angular/core';
import { Route } from '../route.constants';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  public homeRoute = Route.EMPTY;

  constructor() { }

  ngOnInit(): void {
  }

}
