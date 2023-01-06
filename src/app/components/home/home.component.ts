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

/* observe errors */
private errorMessageSubject = new BehaviorSubject<string>('');
errorMessage$ = this.errorMessageSubject.asObservable();

/* observe slides/gallery */
gal: Artwork[] = [];


/* observe current slide */
private slideSelectedSubject = new Subject<number>();
slideSelectedAction$ = this.slideSelectedSubject.asObservable();



  constructor(private slideshowService: SlideshowService, private router: Router) { }

  ngOnInit(): void {
this.gal = this.slideshowService.gallery;
// console.log(this.gal$)
console.log(this.slideshowService.gallery)

  }
onSelectSlide(slideId:any){
  this.slideshowService.slideIndex$ = slideId;
  // this.slideshowService.slideIndex = slideId;
  // this.slideshowService.startSlideshow(+slideId);
  this.router.navigateByUrl('/slideshow/', slideId)
  console.log(this.slideshowService.slideIndex$, slideId);
  // this.slideSelectedSubject.next(+slideId);
}
}
