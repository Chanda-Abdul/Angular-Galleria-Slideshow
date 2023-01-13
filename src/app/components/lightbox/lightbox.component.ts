import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { SlideshowService } from 'src/app/services/slideshow.service';
import { Artwork } from 'src/app/artwork.model';
// import { ThumbnailDetailDirective } from 'src/app/directives/thumbnail-detail-directive.directive';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() thumbnail: Artwork;

  // @ViewChild(ThumbnailDetailDirective, {static: true})

  // adHost!: ThumbnailDetailDirective;

  // @Output() close = new EventEmitter<void>();
  @Input() showImagePreview = true;
  @Input() linkToImage: any;
  @Input() linkToImageName: any;

  // constructor(private slideshowService: SlideshowService) { }
  ngOnInit(): void {
    // this.loadComponent();
    // console.log(this.linkToImage)
    // this.slideshowService.currentSlideInfo$
  }
  onClose() {
    // this.slideshowService.showLightBoxPreview$ = false;
    // this.showImagePreview = false;

    // console.log(this.showImagePreview);
    // this.close.emit();
  }
}


