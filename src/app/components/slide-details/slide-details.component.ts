import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { interval, take  } from 'rxjs';
import { Artwork } from 'src/app/artwork.model';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-slide-details',
  templateUrl: './slide-details.component.html',
  styleUrls: ['./slide-details.component.scss']
})

export class SlideDetailsComponent implements OnInit, OnDestroy {
  gallery: Artwork[] = this.slideshowService.gallery;
  currentSlideInfo$: Artwork | any = this.slideshowService.currentSlideInfo;
  currentSlideIndex$: number = 0;

  constructor(private slideshowService: SlideshowService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.slideshowService.startSlideshow(this.currentSlideIndex$)


    interval(2500).pipe(
      take(this.slideshowService.gallery.length))
      .subscribe({
        next: (count) => {
          this.currentSlideIndex$ = count;
          this.currentSlideInfo$ = this.gallery[this.currentSlideIndex$]
             },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {
          console.log('Observable has completed and emitted all values');
        }

      });



  }

  ngOnDestroy(): void {
  }

}
