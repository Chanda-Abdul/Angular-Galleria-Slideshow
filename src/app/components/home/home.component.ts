import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Artwork, galleria } from '../../artwork-data';
import { BehaviorSubject, combineLatest, from, fromEvent, of, Subject } from 'rxjs';
import { Artwork } from 'src/app/artwork.model';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  /* observe slides/gallery */
  gallery: Artwork[] = [...this.slideshowService.gallery];

  constructor(private slideshowService: SlideshowService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
  onSelectSlide(slideId: number) {
    this.slideshowService.updateSlide(slideId);
  }
}
