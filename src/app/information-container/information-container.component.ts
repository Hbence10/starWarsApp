import { Component, Input, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-information-container',
  standalone: false,

  templateUrl: './information-container.component.html',
  styleUrl: './information-container.component.css'
})
export class InformationContainerComponent implements OnInit{
  @Input() apiLink : string;

  constructor(public apiCall : ApiCallService, public main: MainService){}

  ngOnInit(): void {
    this.apiCall.singleCall(this.apiLink).subscribe(response => {
      this.main.setElement(response)

    })
  }
}
