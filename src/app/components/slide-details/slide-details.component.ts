import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightboxImagePreviewDirective } from 'src/app/directives/lightbox-image-preview-directive.directive';
import { SlideshowService } from 'src/app/services/slideshow.service';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-slide-details',
  templateUrl: './slide-details.component.html',
  styleUrls: ['./slide-details.component.scss']
})

export class SlideDetailsComponent implements OnInit, OnDestroy {
  currentSlideInfo$ = this.slideshowService.currentSlideInfo;

  private currentSlideSubscription;
  private closeSubscription: Subscription;

  @ViewChild(LightboxImagePreviewDirective) alertHost: LightboxImagePreviewDirective;


  constructor(private slideshowService: SlideshowService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.currentSlideSubscription =
      this.slideshowService.slideEmitter$.subscribe(
        () => {
          this.currentSlideInfo$ = this.slideshowService.currentSlideInfo$
        })
  }

  ngOnDestroy(): void {
    this.currentSlideSubscription.unsubscribe();
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  openLightboxImagePreview(currentImage: string) {
    //TO-DO => pause slide show
    const lightboxComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LightboxComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(lightboxComponentFactory);

    componentRef.instance.linkToImage = currentImage;
    this.closeSubscription = componentRef.instance.close.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
