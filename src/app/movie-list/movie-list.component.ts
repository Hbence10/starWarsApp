import { MovieCard } from './../.models/movieCard.model';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { Movie } from '../.models/movies.model';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  allMovieCard : MovieCard[] = []
  rows : MovieCard[][] = []

  constructor(public main : MainService, public router : Router){}

  ngOnInit(): void {
    this.allMovieCard = [ new MovieCard("new_hope.jpg", "A New Hope", 8.6, 8),new MovieCard("the_empire_strikes_back.jpg", "The Empire Strikes Back", 8.7, 6),new MovieCard("return_of_the_jedi.jpg", "Return of The Jedi", 8.3, 6),new MovieCard("the_phantom_menace.jpg", "The Phantom Menace", 6.5, 6),new MovieCard("attack_of_the_clones.jpg", "Attack of The Clones", 6.6, 4),new MovieCard("revenge_of_the_sith.jpg", "The Revenge of the Sith", 7.6, 6),] //A filmeknek az osszes kartyai
    this.rows = [[this.allMovieCard[0], this.allMovieCard[1], this.allMovieCard[2]], [this.allMovieCard[3], this.allMovieCard[4], this.allMovieCard[5]]]
  }

  chooseMovie(selectedMovie : MovieCard){
    this.main.selectedMovie = new Movie()

    this.router.navigate(["movie", selectedMovie.title.replaceAll(" ", "_")])
  }
}
