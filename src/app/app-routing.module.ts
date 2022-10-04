import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SlideDetailsComponent } from './components/slide-details/slide-details.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'slideshow', component: SlideshowComponent,
    children: [
      { path: ':id', component: SlideDetailsComponent },
      { path: ':id/thumbnail', component: ThumbnailComponent }
    ]
  },
  /* wildcard route */
  { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
