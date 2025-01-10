import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-movie-details',
  standalone: false,

  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  constructor(public main : MainService){}
}
