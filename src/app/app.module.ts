import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';




//PAGES
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


//AREAS
import { HeaderComponent } from './areas/header/header.component';
import { FotterComponent } from './areas/fotter/fotter.component';


//COMPONENTS
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ToBeAddedPageComponent } from './pages/to-be-added-page/to-be-added-page.component';
import { FormSectionComponent } from './pages/contact-page/form-section/form-section.component';
import { MapSectionComponent } from './pages/contact-page/map-section/map-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    FormSectionComponent,
    MapSectionComponent,
    ToBeAddedPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FotterComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 40
      }
    },
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
