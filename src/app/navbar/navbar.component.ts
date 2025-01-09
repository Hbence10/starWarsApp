import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  muteMusic : boolean = false

  constructor(public main : MainService, public apiCall : ApiCallService, public router : Router){}

  listSwitch(wantedType : string){
    this.main.cards = []
    this.main.rows = []
    this.main.wantedListType = wantedType;

    if (wantedType != "movie"){
      this.apiCall.pageCall(wantedType, 1).subscribe(response => this.main.setCard(response, wantedType))
      this.router.navigate(["list", wantedType])
    } else{
      this.router.navigate(["movieList"])
    }
  }
}
