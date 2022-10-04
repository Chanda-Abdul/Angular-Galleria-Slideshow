import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Artwork, galleria } from '../../artwork'
import { interval, Observable, startWith, Subject, Subscription, take, takeLast, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})


export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() galleria: Artwork[] = galleria;
  @Input() autostart = false;
  firstSlide = 0;
  lastSlide = galleria.length + 1;

  currentSlideIndex = 0;
  currentSlideInfo$ = this.galleria[this.currentSlideIndex];
  slideInterval$ = new Subscription;
  private unsubscribe$ = new Subject();

  constructor() { }
  ngOnInit(): void {
    if (this.autostart) {
   //TO-DO input autostart
      this.autostart = false;
    }
    // this.currentSlideIndex = 5;
    this.startSlideShow();
 

  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
  startSlideShow() {
    this.currentSlideIndex = this.firstSlide;
    this.slideInterval$ = interval(1000)
      .pipe(
        //fix startWith()
        startWith(this.currentSlideIndex),
        take(this.lastSlide),
        takeUntil(this.unsubscribe$))
      .subscribe((inter) => {
        this.currentSlideIndex = inter;
        this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
        console.log(this.currentSlideIndex);
      })


    console.log(this.currentSlideIndex);
    console.log(this.currentSlideInfo$);
  }
  pauseSlideShow() {
    //TO-DO
  }
  endSlideShow() {
    // play once and start over
    this.lastSlide = this.currentSlideIndex;
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }



  setNextSlide() {
    if (this.currentSlideIndex === 14) {
      this.currentSlideIndex = 0;
      this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
    }
    this.currentSlideIndex = this.currentSlideIndex + 1;
    this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
    console.log(this.currentSlideIndex, this.currentSlideInfo$)
  }

  setPreviousSlide() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = 14;
      this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
    }
    this.currentSlideIndex = this.currentSlideIndex - 1;
    this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];

    console.log(this.currentSlideIndex);
  }


}
