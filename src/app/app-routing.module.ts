import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {component: HomePageComponent, path: ""},
  {component: HomePageComponent, path: "home"},
  {component: ListContainerComponent, path: "list/:type"},
  {component: MovieListComponent, path: "movieList"},
  {component: MovieDetailsComponent, path: "movie/:movieTitle"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
