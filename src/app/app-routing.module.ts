import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { Route } from './route.constants';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HiremeComponent } from './hireme/hireme.component';
import { OtherprojectsComponent } from './otherprojects/otherprojects.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  
  {
    path: Route.EMPTY,
    component: MaincomponentComponent,
    children: [
      {
        path: Route.mainpage,
        component: MainpageComponent,
      },
      {
        path: Route.aboutme,
        component: AboutmeComponent,
      },
      {
        path: Route.hireme,
        component: HiremeComponent,
      },
      {
        path: Route.otherprojects,
        component: OtherprojectsComponent,
      },
      {
        path: Route.projects,
        component: ProjectsComponent,
      },
      
    ],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },



];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes,{useHash:true})]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
