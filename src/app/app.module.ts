import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { SlideDetailsComponent } from './components/slide-details/slide-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {  ThumbnailDetailDirective } from './directives/thumbnail-detail-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SlideshowComponent,
    LightboxComponent,
    SlideDetailsComponent,
    PageNotFoundComponent,
   ThumbnailDetailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [LightboxComponent]
})
export class AppModule { }
