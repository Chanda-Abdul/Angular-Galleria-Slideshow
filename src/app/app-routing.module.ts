import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SlideDetailsComponent } from './components/slide-details/slide-details.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'slideshow', component: SlideshowComponent,
    children: [
      { path: ':id', component: SlideDetailsComponent },
      { path: ':id/preview', component: LightboxComponent }
    ]
  },
  /* wildcard route */
  { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
