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
  slideshowProgress$ = ((this.slideshowService.slideIndex$ + 1 )/ this.gallery) * 100;

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit(): void {
    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(() => {
        this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
        this.slideId$ = this.slideshowService.slideIndex$;
        //TO-DO => Move to service
        this.slideshowProgress$ = ((this.slideId$ + 1) / this.gallery) * 100;
        // console.log(this.slideshowProgress$, this.slideId$, this.gallery, ((this.slideId$ + 1) / this.gallery) * 100);
      });
    }
  ngOnDestroy(): void {
    this.currentSlideSubscription.unsubscribe();
  }
 
  setPreviousSlide() {
    this.slideshowService.setPreviousSlide();
  }

  setNextSlide() {
    this.slideshowService.setNextSlide();
  }

}
