import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Observable, pipe, Subscription, take, takeUntil, tap } from 'rxjs';
import { Artwork } from 'src/app/artwork.model';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-slide-details',
  templateUrl: './slide-details.component.html',
  styleUrls: ['./slide-details.component.scss']
})
export class SlideDetailsComponent implements OnInit, OnDestroy {
 slideId$= 0;
 slidesub: any ;
//  this.slideshowService.slideIndex$;
slideShowSubscription: any = new Subscription;
gallery: Artwork[] = this.slideshowService.gallery;
currentSlide$: any;
showImagePreview = this.slideshowService.showLightBoxPreview$;


  constructor(private slideshowService: SlideshowService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params)=> {
    //   // this.slideId$ = +params['id'];
    //   console.log(params)
    // })
 this.slideshowService.startSlideshow(+this.slideId$)
    // this.slideShowSubscription = this.slideshowService.slideIndex$
interval(2000).pipe(

  take(this.slideshowService.gallery.length))
  .subscribe({
    next: (count) => {
    this.currentSlide$= this.gallery[count];
    console.log( this.slideshowService.slideIndex$, this.currentSlide$)}});

   this.slideId$ = this.slideshowService.slideIndex$
   this.slidesub = this.slideId$


    // console.log(this.slideshowService.currentSlideData$)
  }

  ngOnDestroy(): void {
    this.slideShowSubscription.unsubscribe()
  }

}
