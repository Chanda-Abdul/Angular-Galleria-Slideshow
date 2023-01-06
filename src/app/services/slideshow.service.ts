import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, of, startWith, Subject, take, takeWhile, tap } from 'rxjs';
import { ArtworkData } from '../artwork-data';

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

  /* current slideindex */
  slideIndex$ = 0;
  get currentSlideIndex() {
    return this.slideIndex$
  }

  /* current slide data */
  currentSlideInfo$ = this.gallery[this.slideIndex$];
  get currentSlideInfo() {
    return this.currentSlideInfo$
  }

  /* observe show lightbox image preview ?*/
  showLightBoxPreview$ = false;


  /* observe current slide action (start/stop/pause/next/prev)
   ['none', 'start', 'end', 'pause', 'next', 'prev'] */
  private slideStatusSubject = new BehaviorSubject<string>('none');
  slideStatusAction$ = this.slideStatusSubject.asObservable();

  /* observe errors */
  private errorMessageSubject = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessageSubject.asObservable();


  /* observe current slide action (start/stop-end/pause/next/prev) */
  private showStatusActionSubject = new BehaviorSubject<string>('stopped');
  showStatus$ = this.showStatusActionSubject.asObservable();

  constructor() { }

  startSlideshow(startingSlideIndex: number) {
    interval(2000).pipe(
      take(this.gallery.length - startingSlideIndex))
      .subscribe({
        next: (count) => {
          this.slideIndex$ = count + startingSlideIndex;
          this.currentSlideInfo$ = this.gallery[this.slideIndex$];
        },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {
          console.log('Observable has completed and emitted all values');
        }
      });
  }
}
