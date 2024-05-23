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


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    HeaderComponent,
    MainContentComponent, 
    HomeComponent, 
    ProjectsComponent, 
    ContactComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
