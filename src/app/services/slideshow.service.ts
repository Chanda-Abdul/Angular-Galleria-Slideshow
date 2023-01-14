import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, take } from 'rxjs';
import { ArtworkData } from '../artwork-data';
import { Artwork } from '../artwork.model';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  /* slideshow data */
  get gallery() {
    return ArtworkData.galleria.map((art, index) => {
      return { id: index, ...art }
    }
    );
  }

  /* current slide index */
  slideIndex$: number = 0;

  get currentSlideIndex() {
    return this.slideIndex$
  }

  /* current slide data */
  currentSlideInfo$ = this.gallery[this.slideIndex$];

  get currentSlideInfo() {
    return this.currentSlideInfo$
  }

  showStarted$ = false;
  //TO-DO => add event emitter?

  get showStatus() {
    return this.showStarted$;
  }

  slideEmitter$ = new Subject<Artwork>();

  slideEmitterEvent(data: Artwork) {
    this.slideEmitter$.next(data)
  }

  slideEmitterSubscription;


  constructor() { }

  startSlideshow(startingSlideIndex?: number) {
    this.showStarted$ = true;
    this.slideEmitterSubscription = interval(5000)
      .pipe(
        take(this.gallery.length - startingSlideIndex)
      )
      .subscribe({
        next: (startingSlideIndex) => {
          //To-Do => how to set next interval to number other than 0
          this.showStarted$;
          this.slideIndex$ = startingSlideIndex;
          this.currentSlideInfo$ = this.gallery[this.slideIndex$];
          this.slideEmitterEvent(this.currentSlideInfo$);
          if(this.slideIndex$ === this.gallery.length-1){
            this.endSlideshow();
          }
        },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {

          }
      });
  }

  endSlideshow() {
    this.showStarted$ = false;
    this.slideEmitterSubscription.unsubscribe();
  }


  setPreviousSlide() {
    if (this.slideIndex$ !== 0) {
      this.slideIndex$--;
    }
    else {
      this.slideIndex$ = this.gallery.length - 1;
    }
    this.updateSlide(this.slideIndex$);
    // this.slideEmitterEvent(this.currentSlideInfo$)
  }

  setNextSlide() {
    if (this.slideIndex$ < this.gallery.length - 1) {
      this.slideIndex$++;
    } else {
      this.slideIndex$ = 0;
    }
    this.updateSlide(this.slideIndex$);
    // this.slideEmitterEvent(this.currentSlideInfo$)
  }

  updateSlide(slideId?: number) {
    //TO-DO => update slide event emitter for next and prev while
    //slideshow is active
    this.slideIndex$ = slideId;
    this.currentSlideInfo$ = this.gallery[slideId];
    this.slideEmitterEvent(this.currentSlideInfo$);
  }



  /* observe errors */
  private errorMessageSubject = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessageSubject.asObservable();

  pauseSlideShow() {
    // TO-DO *EXTRA* => add Pause Button Functionality
    /* observe current slide action (pause) */
    // private showslideStatusActionSubject = new BehaviorSubject<string>('stopped');
    // showslideStatus$ = this.showStatusActionSubject.asObservable();
  }





}
