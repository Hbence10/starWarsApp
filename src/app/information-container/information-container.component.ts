import { Component, Input, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { MainService } from '../main.service';
import { Card } from '../.models/card.model';

@Component({
  selector: 'app-information-container',
  standalone: false,

  templateUrl: './information-container.component.html',
  styleUrl: './information-container.component.css'
})
export class InformationContainerComponent implements OnInit{
  @Input() apiLink : string;
  @Input() card: Card;
  keys : string[] = []
  values : string[] = []

  constructor(public apiCall : ApiCallService, public main: MainService){}

  ngOnInit(): void {
    if(this.main.wantedListType != "movie"){
      this.apiCall.singleCall(this.apiLink).subscribe(response => {
        this.main.setElement(response)
      })
    } else{       //Nem kell a filmnek kulon componentet letrehozni

    }
  }
}
