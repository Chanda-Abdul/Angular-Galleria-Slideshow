import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, of, startWith, Subject, take, takeUntil, takeWhile, tap } from 'rxjs';
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

  slideEmitter$ = new Subject<Artwork>();

  slideEmitterEvent(data: Artwork) {
    this.slideEmitter$.next(data)
  }

  slideEmitterSubscription;

  constructor() { }

  startSlideshow(startingSlideIndex: number) {
    this.slideEmitterSubscription = interval(5000)
      .pipe(
        take(this.gallery.length - startingSlideIndex)
      )
      .subscribe({
        next: (startingSlideIndex) => {
          this.slideIndex$ = startingSlideIndex;
          this.currentSlideInfo$ = this.gallery[this.slideIndex$];
          this.slideEmitterEvent(this.currentSlideInfo$);
          // console.log(this.currentSlideInfo$)
        },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {
          console.log('Observable has completed and emitted all values');
        }
      });
  }

  endSlideshow() {
    this.slideEmitterSubscription.unsubscribe();
  }


  setPreviousSlide() {
    if (this.slideIndex$ !== 0) {
      this.slideIndex$--;
      console.log(this.slideIndex$)
    }
    else {
      this.slideIndex$ = this.gallery.length - 1;
    }
    this.updateSlide();
  }
  setNextSlide() {
    if (this.slideIndex$ < this.gallery.length - 1) {
      this.slideIndex$++;
      console.log(this.slideIndex$)
    } else {
      this.slideIndex$ = 0;
    }
    this.updateSlide();
  }

  updateSlide() {
    //TO-Do => update slide event emitter
    this.currentSlideInfo$ = this.gallery[this.slideIndex$];
    this.slideEmitterEvent(this.currentSlideInfo$);
  }
  /* observe show lightbox image preview ?*/
  showLightBoxPreview$ = false;


  /* observe current slide action (start/stop/pause/next/prev)
   ['none', 'start', 'end', 'pause', 'next', 'prev'] */
  private slideStatusSubject = new BehaviorSubject<string>('none');
  slideStatusAction$ = this.slideStatusSubject.asObservable();

  pauseSlideShow() {
    //TO-DO
  }

  /* observe errors */
  private errorMessageSubject = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessageSubject.asObservable();


  /* observe current slide action (pause) */
  private showStatusActionSubject = new BehaviorSubject<string>('stopped');
  showStatus$ = this.showStatusActionSubject.asObservable();




}
