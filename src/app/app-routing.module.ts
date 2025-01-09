import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {component: HomePageComponent, path: ""},
  {component: HomePageComponent, path: "home"},
  {component: ListContainerComponent, path: "list"},
  {component: MovieListComponent, path: "movieList"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
