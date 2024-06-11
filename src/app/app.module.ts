import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './main-content/home/home.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { AboutComponent } from './main-content/about/about.component';
import { IconComponent } from './drawable-objects/icon/icon.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    HeaderComponent,
    MainContentComponent, 
    HomeComponent, 
    ProjectsComponent, 
    ContactComponent, AboutComponent, IconComponent, FooterComponent, SidenavComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
