import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-slide-details',
  templateUrl: './slide-details.component.html',
  styleUrls: ['./slide-details.component.scss']
})

export class SlideDetailsComponent implements OnInit, OnDestroy {

  currentSlideInfo$ = this.slideshowService.currentSlideInfo;
  currentSlideSubscription;


  // @ViewChild('placeholder', { read: ViewContainerRef, static: true });

  // public placeholder!: ViewContainerRef;
  showImagePreview;
  constructor(private slideshowService: SlideshowService, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {

    // this.placehodler.clear();
    // const componentFactory = this.resolver.resolveComponentFactory(LightboxComponent);
    // const component = this.placehodler.createComponent(componentFactory)
    // // console.log(this.slideshowService.slideIndex$)
    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(
        () => {
          this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$
          // console.log(this.showImagePreview)
        })
  }

  ngOnDestroy(): void {
    this.currentSlideSubscription.unsubscribe();
  }

  viewExpandedImage() {
    //  console.log(this.showImagePreview)
    //TO-DO => pause slide show
    this.showImagePreview = true;

  }

  closeLightbox() {
    this.showImagePreview = false;
  }
  private exitLightboxPreview(){}

}
