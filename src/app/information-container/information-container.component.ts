import { Component, Input, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { MainService } from '../main.service';
import { Card } from '../.models/card.model';
import { response } from 'express';

@Component({
  selector: 'app-information-container',
  standalone: false,

  templateUrl: './information-container.component.html',
  styleUrl: './information-container.component.css',
})
export class InformationContainerComponent implements OnInit {
  @Input() apiLink: string;
  @Input() card: Card;
  keys: string[] = [];
  values: string[] = [];
  listProperties: string[] = ["pilots", "people", "name", "id", "imgPath", "homeworld"];
  planetCard : Card

  constructor(public apiCall: ApiCallService, public main: MainService) {}

  ngOnInit(): void {
    if (this.main.wantedListType != 'movie') {
      this.apiCall
        .singleCall(this.apiLink)
        .subscribe(response => this.main.setElement(response.result));

      this.keys = Object.keys(this.main.selectedElement)
      this.values = Object.values(this.main.selectedElement)

      //Karaktereknek a sajat tulajdonsaga:
      if(this.keys.includes("homeworld")){
        this.apiCall.singleCall(this.values[this.keys.indexOf("homeworld")]).subscribe(response =>this.planetCard = new Card(response.result.properties.name, "", "planet", response.result.uid))
      }



    } else {

    }
  }

  getPlanet(link : string){
   return this.apiCall.singleCall(link)
  }
}
