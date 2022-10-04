import { Component, OnInit } from '@angular/core';
import { Artwork, galleria } from '../../artwork';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //turn to output
  galleria: Artwork[] = galleria;


  constructor() { }

  ngOnInit(): void {
    console.log(this.galleria[0])
  }

}
