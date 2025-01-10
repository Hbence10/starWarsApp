import { Component, HostListener } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-movie-details',
  standalone: false,

  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  videoWidth : number = 620; //Videonak a szelesege

  constructor(public main : MainService){}

    // Video szelessege reszponziv nezetben, Oka: youtube-playerhez nem lehet megadni szelleseget mertekegyseggel
    @HostListener('window:resize', ['$event'])
    onWindowResize() {
      if(window.innerWidth < 620){ //Ha a kepernyo 620px-nel kisebb
        this.videoWidth = window.innerWidth - 40 //akkor a video mindig 40px-el kisebb mint az adott kepernyo
      } else{ //kulonben
        this.videoWidth = 620 //620px szeles
      }
    }
}
