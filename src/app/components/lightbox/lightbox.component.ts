import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { SlideshowService } from 'src/app/services/slideshow.service';
import { Artwork } from 'src/app/artwork.model';
// import { LightboxImagePreviewDirective } from 'src/app/directives/thumbnail-detail-directive.directive';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() thumbnail: Artwork;

  // @ViewChild(LightboxImagePreviewDirective, {static: true})

  // adHost!: LightboxImagePreviewDirective;

  @Output() close = new EventEmitter<void>();
  @Input() showImagePreview = true;
  @Input() linkToImage: any;
  @Input() linkToImageName: any;

  // constructor(private slideshowService: SlideshowService) { }
  ngOnInit(): void {
    // console.log('Lightbox Open')
    // this.loadComponent();
    console.log(this.linkToImage)
    // this.slideshowService.currentSlideInfo$
  }
  onClose() {
    // this.slideshowService.showLightBoxPreview$ = false;
    this.showImagePreview = false;
//TO-DO => continue slide show
    // console.log(this.showImagePreview);
    this.close.emit();
  }
}


