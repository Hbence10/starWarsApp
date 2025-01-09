import { Component, Input } from '@angular/core';
import { Card } from '../.models/card.model';
import { ApiCallService } from '../api-call.service';
import { MainService } from '../main.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card : Card;

  constructor(public apiCall : ApiCallService, public main: MainService, public route : Router){}

  showDetails(){
    if (this.main.wantedListType != "movie"){
      this.apiCall.singleCall(this.card.link).subscribe(response => this.main.setElement(response.result, this.card))
    } else{
      this.route.navigate(["movieList"])
    }
  }

}
