import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  muteMusic : boolean = false

  constructor(public main : MainService, public apiCall : ApiCallService){}

  moveToList(selectedList : string){
    this.main.wantedListType = selectedList
  }

  listSwitch(wantedType : string){
    this.main.cards = []
    this.main.rows = []
    this.main.wantedListType = wantedType;
    this.apiCall.pageCall(wantedType, 1).subscribe(response => this.main.setCard(response, wantedType))
  }
}
