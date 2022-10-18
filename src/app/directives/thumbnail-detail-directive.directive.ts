import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]'
})
export class ThumbnailDetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
