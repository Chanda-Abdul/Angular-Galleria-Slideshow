import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, of, startWith, Subject, take, takeWhile, tap } from 'rxjs';
import { ArtworkData } from '../artwork-data';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  /* slide data */
  get gallery() {
    return ArtworkData.galleria.map((art, index) => {
      return { id: index, ...art }
    }
    );
  }

  slideIndex$ = 0;
set slideIndex(newIndex: number){
  this.slideIndex$ = newIndex;
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








  /* observe current slide data */



  /* observe current slide */
  //  currentSlideData$ = of(this.gallery$).pipe(
  //   map(gallery => { return this.gallery[+this.currentSlideShowIndex$]})
  //  )



  //turn to output?





  /* observe current slide action (start/stop-end/pause/next/prev) */
  private showStatusActionSubject = new BehaviorSubject<string>('stopped');
  showStatus$ = this.showStatusActionSubject.asObservable();

  // slide$ = combineLatest([
  //   this.gallery$,
  //   this.showStatus$
  // ]).pipe(tap(data => console.log(data)));

  constructor() { }

 startSlideshow(startingSlideIndex: any){
  //  slideObservable$ = this.slideObservable$
   interval(2000)
   .pipe(
    startWith(startingSlideIndex),
    takeWhile(i => i < this.gallery.length-1, true)
    // take(2)
  // take(this.gallery.length + 1- startingSlideIndex)
  )
  .subscribe((integer) => {
    this.slideIndex$ = integer;
    return integer;
    console.log(this.gallery[this.slideIndex$], integer);
  })


 }
}
