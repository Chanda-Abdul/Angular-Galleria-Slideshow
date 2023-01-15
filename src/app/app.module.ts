import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { SlideDetailsComponent } from './components/slide-details/slide-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LightboxImagePreviewDirective } from './directives/lightbox-image-preview-directive.directive';
import { SlideshowService } from './services/slideshow.service';



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
    LightboxImagePreviewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule

  ],
  providers: [SlideshowService],
  bootstrap: [AppComponent],
  entryComponents: [LightboxComponent]
})
export class AppModule { }
