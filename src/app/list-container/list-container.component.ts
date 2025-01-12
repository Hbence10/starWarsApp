import { loadingAnimation } from './../.animation/loadingAnimation';
import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ApiCallService } from '../api-call.service';
import { animate, query, style, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-list-container',
  standalone: false,
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css',
  animations: [

    //betolteskor ez az animacio folyik le:
    trigger("loadingAnimation", [
      transition(":enter", [
        useAnimation(loadingAnimation)
      ])
    ]),

    // Informacios panel megjelenites:
    trigger("showDetails", [
      transition(':enter', [
        query("#detailsContainer", [
          style({
          opacity: 0,
          transform: "translate(-50%, -100%)"
        }),

        animate('0.5s', style({
          opacity: 1,
          transform: "translate(-50%, -50%)"
        }))]
      )
      ]),

      transition(':leave', [animate('0.5s', style({opacity: 0}))]),
    ]),

  ]

})
export class ListContainerComponent implements OnInit {

  constructor(public main: MainService, public apiCall: ApiCallService) {}

  ngOnInit(): void {

  }
}
