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
  @Input() normalView : boolean //Az adott dolog a listContainerbol vagy a filmekbol lett meghivva
  keys: any[] = [];
  values: any[] = [];
  listProperties: string[] = ["pilots", "people", "name", "id", "imgPath", "homeworld"];
  planetCard : Card
  pilotCards: Card[] = []
  peopleCards: Card[] = []

  constructor(public apiCall: ApiCallService, public main: MainService) {}

  ngOnInit(): void {
    if (this.main.wantedListType != '') {
      this.apiCall
        .singleCall(this.apiLink)
        .subscribe(response => {
          this.main.setElement(response.result)
          this.keys = Object.keys(this.main.selectedElement)
          this.values = Object.values(this.main.selectedElement)

          //Karaktereknek a sajat tulajdonsaga:
          if (this.keys.includes("homeworld")){
            this.apiCall.singleCall(this.values[this.keys.indexOf("homeworld")]).subscribe(response =>this.planetCard = new Card(response.result.properties.name, "planets", "planets", response.result.uid))
          }

          //Starshipeknek a sajat tulajdonsaga:
          if (this.keys.includes("pilots")){
            const pilots : any[] = this.values[this.keys.indexOf("pilots")]
              pilots.forEach(pilot => this.apiCall.singleCall(pilot)
              .subscribe(response => this.pilotCards.push(new Card(response.result.properties.name, "", "pilot", response.result.uid)))
            )
          }

          //Speciesnek a sajat tulajdonsaga:
          if (this.keys.includes("people")){
            const peoples : any[] = this.values[this.keys.indexOf("people")]
            peoples.forEach(person => this.apiCall.singleCall(person).subscribe(response => this.peopleCards.push(new Card(response.result.properties.name, "", "pilot", response.result.uid))))
          }

        });
    }
  }
}
