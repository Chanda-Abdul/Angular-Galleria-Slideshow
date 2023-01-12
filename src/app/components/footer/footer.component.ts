import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  gallery = this.slideshowService.gallery.length;
  slideId$ = this.slideshowService.slideIndex$;
  currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
  currentSlideSubscription;

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit(): void {
    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(() => {
        this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
        this.slideId$ = this.slideshowService.slideIndex$;
      });
  }
  ngOnDestroy(): void {

    this.currentSlideSubscription.unsubscribe();
  }
  slideShowProgression() {
    // TO-DO => Add Progress Bar functionality here
  }
  setPreviousSlide() {
    this.slideshowService.setPreviousSlide();
  }

  setNextSlide() {
    this.slideshowService.setNextSlide();
  }

}
