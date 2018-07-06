import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes } from "@angular/animations";


@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    animations: [
        trigger('collapseAnimation', [
            state('small', style({ height: '0px' })),
            state('large', style({ height: '100px' })),
            transition('small <=> large', animate('400ms ease-in'))
        ])

    ]
})


export class AppComponent {

  title = 'app';
  state: string = 'large';
  collapseFunction() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  btnText: string = 'show';

    msg = "";
    nCnt: number = 0;
    clickMe() {
        this.nCnt = this.nCnt + 1;
        this.msg = "Clicked: " + this.nCnt;
    }



}









