import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 99;
  constructor() { }

  ngOnInit(): void {
  }

}
