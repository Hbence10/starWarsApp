import { Component, HostListener } from '@angular/core';
import { MainService } from '../main.service';
import { Card } from '../.models/card.model';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-movie-details',
  standalone: false,

  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  videoWidth : number = 620; //Videonak a szelesege
  showListContainer : boolean = false
  cardList : Card[] = []

  constructor(public main : MainService, public apiCall : ApiCallService){}

    // Video szelessege reszponziv nezetben, Oka: youtube-playerhez nem lehet megadni szelleseget mertekegyseggel
    @HostListener('window:resize', ['$event'])
    onWindowResize() {
      if(window.innerWidth < 620){ //Ha a kepernyo 620px-nel kisebb
        this.videoWidth = window.innerWidth - 40 //akkor a video mindig 40px-el kisebb mint az adott kepernyo
      } else{ //kulonben
        this.videoWidth = 620 //620px szeles
      }
    }

    chooseList(wantedList : string[], wantedType : string){
      wantedList.forEach(link => this.apiCall.singleCall(link).subscribe(response => this.cardList.push(new Card(response.result.properties.name, link, wantedType, response.result.uid))))
      this.showListContainer = true
      this.main.wantedListType = wantedType
    }
}
