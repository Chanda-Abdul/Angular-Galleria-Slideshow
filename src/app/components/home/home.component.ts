import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  galleryLoaded = false;

  gallery$ = [...this.slideshowService.gallery];

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.galleryLoaded = true
    }, 500)
  }


  onSelectSlide(slideId: number) {
    this.slideshowService.updateSlide(slideId);
  }
}
