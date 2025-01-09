import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  muteMusic : boolean = false

  constructor(public main : MainService){}

  moveToList(selectedList : string){
    this.main.wantedListType = selectedList
  }
}
