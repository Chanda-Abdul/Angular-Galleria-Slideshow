import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  /* observe slides/gallery */
  gallery: Artwork[] = [...this.slideshowService.gallery];


  /* observe current slide */
  private slideSelectedSubject = new Subject<number>();
  slideSelectedAction$ = this.slideSelectedSubject.asObservable();

  constructor(private slideshowService: SlideshowService, private router: Router) { }

  ngOnInit(): void {
    // TO-DO => remove
    console.log(this.gallery)

  }
  onSelectSlide(slideId: number) {
    this.slideshowService.slideIndex$ = slideId;
    this.slideshowService.updateSlide();
  }
}
