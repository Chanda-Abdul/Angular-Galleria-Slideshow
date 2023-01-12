import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-slide-details',
  templateUrl: './slide-details.component.html',
  styleUrls: ['./slide-details.component.scss']
})

export class SlideDetailsComponent implements OnInit, OnDestroy {

  currentSlideInfo$= this.slideshowService.currentSlideInfo;
  currentSlideSubscription;
  showImagePreview = false;

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit(): void {

    // console.log(this.slideshowService.slideIndex$)
    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(
          () => {
            this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$
            // console.log(this.currentSlideInfo$)
          })
  }

  ngOnDestroy(): void {
    this.currentSlideSubscription.unsubscribe();
  }

}
