import {Component,ComponentFactoryResolver,OnDestroy,OnInit} from '@angular/core';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { ChangeDetectorRef } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, OnDestroy {
  gallery = this.slideshowService.gallery.length;
  slideId$ = this.slideshowService.slideIndex$;


  currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
  currentSlideSubscription;
  // showImagePreview = false;

  // @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  constructor(
    private slideshowService: SlideshowService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _cd: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.slideshowService.startSlideshow(this.slideId$);
    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(() => {
        this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$;
        this.slideId$ = this.slideshowService.slideIndex$;
        console.log(this.slideId$, this.currentSlideInfo$);
      });
    // console.log(this.slideshowService.slideIndex$);
    // // console.log(this.showImagePreview);
    // if (this.autostart) {
    //   //TO-DO input autostart
    //   this.autostart = false;
    // }
    // this.currentSlideIndex = 5;
  }
  ngOnDestroy(): void {
    this.slideshowService.endSlideshow();

    this.currentSlideSubscription.unsubscribe();
  }
  /* Dynamic lightbox component */
  showLightbox(): void {
    // this.showImagePreview = true;
    // console.log(this.showImagePreview, event);
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
  setPreviousSlide() {
    this.slideshowService.setPreviousSlide();
  }

  setNextSlide() {
    this.slideshowService.setNextSlide();
  }
}
