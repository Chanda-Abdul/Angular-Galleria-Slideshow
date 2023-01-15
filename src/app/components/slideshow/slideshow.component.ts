import { Component, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, OnDestroy {

  slideId$ = this.slideshowService.slideIndex$;
  currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
  currentSlideSubscription;

  constructor(
    private slideshowService: SlideshowService
  ) { }
  ngOnInit(): void {

    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(() => {
        this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
        this.slideId$ = this.slideshowService.slideIndex$;
      });

  }
  ngOnDestroy(): void {
    this.slideshowService.endSlideshow();
    this.currentSlideSubscription.unsubscribe();
  }

  setPreviousSlide() {
    this.slideshowService.setPreviousSlide();
  }

  setNextSlide() {
    this.slideshowService.setNextSlide();
  }
}
