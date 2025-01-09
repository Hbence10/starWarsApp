import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [
  {component: HomePageComponent, path: ""},
  {component: HomePageComponent, path: "home"},
  {component: ListContainerComponent, path: "list"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
