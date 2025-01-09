import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-list-container',
  standalone: false,

  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css'
})
export class ListContainerComponent implements OnInit{

  constructor(public main : MainService, public apiCall : ApiCallService){}

  ngOnInit(): void {
  }
}
