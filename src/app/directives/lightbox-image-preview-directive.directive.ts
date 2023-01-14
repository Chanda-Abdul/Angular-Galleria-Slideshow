import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLightboxImagePreview]'
})
export class LightboxImagePreviewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
  // TO-DO => add lightbox functionality
}
