import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';
// import { Artwork } from 'src/app/artwork-data';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() thumbnail: any;
  @Output() close = new EventEmitter<void>();
  @Input() showImagePreview = true;
  @Input() linkToImage: any;
  @Input() linkToImageName: any;

  constructor(private slideshowService: SlideshowService){}
  ngOnInit(): void {
console.log(this.linkToImage)
  }
  onClose() {
    this.slideshowService.showLightBoxPreview$ = false;
    this.showImagePreview =false;

    console.log(this.showImagePreview);
    // this.close.emit();
  }
}


