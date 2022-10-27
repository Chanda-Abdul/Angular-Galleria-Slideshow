import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { Artwork, galleria } from '../../artwork-data'
import { interval, Observable, startWith, Subject, Subscription, take, takeLast, takeUntil, tap } from 'rxjs';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { ChangeDetectorRef } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})


export class SlideshowComponent implements OnInit, OnDestroy {
  $slideId = this.slideshowService.slideIndex$;


  showImagePreview = false;
  @Input() autostart = false;
  firstSlide = 0;
  // lastSlide = galleria.length;

  // currentSlideIndex$ = this.slideshowService.currentSlideShowIndex$;
  // currentSlideInfo$ = this.galleria[this.currentSlideIndex];
  slideInterval$ = new Subscription;
  private unsubscribe$ = new Subject();

  // @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  // private
  closeSub = new  Subscription;

  constructor(
    private slideshowService: SlideshowService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _cd: ChangeDetectorRef) { }
  ngOnInit(): void {


    console.log(this.slideshowService.slideIndex$);
    // console.log(this.showImagePreview);
    if (this.autostart) {
   //TO-DO input autostart
      this.autostart = false;
    }
    // this.currentSlideIndex = 5;
    // this.startSlideShow();


  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
  // TO-DO => move to slideshow service??
  // startSlideShow() {
  //   this.currentSlideIndex = this.firstSlide;
  //   this.slideInterval$ = interval(1000)
  //     .pipe(
  //       //fix startWith()
  //       startWith(this.currentSlideIndex),
  //       take(1),
  //       // take(this.lastSlide+1),
  //       takeUntil(this.unsubscribe$))
  //     .subscribe((inter) => {
  //       this.currentSlideIndex = inter;
  //       this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
  //       console.log(this.currentSlideIndex, this.currentSlideIndex >= this.lastSlide, this.lastSlide);
  //     })


  //   console.log(this.currentSlideIndex);
  //   console.log(this.currentSlideInfo$);
  // }
  pauseSlideShow() {
    //TO-DO
  }
  endSlideShow() {
    // play once and start over
    // this.lastSlide = this.currentSlideIndex;
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }



  // setNextSlide() {
  //   if (this.currentSlideIndex === 14) {
  //     this.currentSlideIndex = 0;
  //     this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
  //   }
  //   this.currentSlideIndex = this.currentSlideIndex + 1;
  //   this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
  //   console.log(this.currentSlideIndex, this.currentSlideInfo$)
  // }

  // setPreviousSlide() {
  //   if (this.currentSlideIndex === 0) {
  //     this.currentSlideIndex = 14;
  //     this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];
  //   }
  //   this.currentSlideIndex = this.currentSlideIndex - 1;
  //   this.currentSlideInfo$ = this.galleria[this.currentSlideIndex];

  //   console.log(this.currentSlideIndex);
  // }


  /* Dynamic lightbox component */
  showLightbox(): void {
    this.showImagePreview = true;
    console.log(this.showImagePreview, event);
    this._cd.markForCheck();
  //   //
  //   const lightboxComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
  //     lightboxComponent);
  //   // const hostViewContainerRef = this.alertHost.viewContainerRef;
  //   // hostViewContainerRef.clear();

  //   const componentRef = hostViewContainerRef.createComponent(lightboxComponentFactory );

  //   componentRef.instance.lightbox = this.currentSlideInfo$;
  //   this.closeSub = componentRef.instance.close.subscribe(() => {
  //     this.closeSub.unsubscribe();
  //     hostViewContainerRef.clear();
  //   });
  }

}
