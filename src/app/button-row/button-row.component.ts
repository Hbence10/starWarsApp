import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-button-row',
  standalone: false,

  templateUrl: './button-row.component.html',
  styleUrl: './button-row.component.css'
})
export class ButtonRowComponent {

  constructor(public main : MainService, public apiCall : ApiCallService){}

  changePage(newPage : number){
    this.apiCall.pageCall(this.main.wantedListType, newPage).subscribe(response => this.main.setCard(response, this.main.wantedListType))
  }
}
