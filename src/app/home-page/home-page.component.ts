import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public main: MainService, public apiCall : ApiCallService){}

  listSwitch(wantedType : string){
    this.main.cards = []
    this.main.rows = []
    this.main.wantedListType = wantedType;
    this.apiCall.pageCall(wantedType, 1).subscribe(response => this.main.setCard(response, wantedType))
  }
}
