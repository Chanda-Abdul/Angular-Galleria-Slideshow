import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showStarted$ = false;
  showStatusSubscription;

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit(): void {
  }

  startSlideShow() {
    
    this.slideshowService.startSlideshow(this.slideshowService.currentSlideIndex);
    console.log(this.slideshowService.currentSlideIndex)
    this.showStarted$ = this.slideshowService.showStatus;
  }
  endSlideShow() {
    this.slideshowService.endSlideshow()
    this.showStarted$ = this.slideshowService.showStatus;
  }

}
