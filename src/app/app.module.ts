import { NgModule, TemplateRef, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HiremeComponent } from './hireme/hireme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { OtherprojectsComponent } from './otherprojects/otherprojects.component';
import { AppRoutingModule } from './app-routing.module';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from "@angular/common";
import { MatSliderModule } from '@angular/material/slider';

import {Observable} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    HiremeComponent,
    AboutmeComponent,
    OtherprojectsComponent,
    MaincomponentComponent,
    
    
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule, 
    MatProgressSpinnerModule,
    MatSliderModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
