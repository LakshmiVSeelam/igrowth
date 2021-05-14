import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesectionComponent } from './featuresection/featuresection.component';
import { VideosectionComponent } from './videosection/videosection.component';
import { ServicesectionComponent } from './servicesection/servicesection.component';
import { SolutionsectionComponent } from './solutionsection/solutionsection.component';
import { ProgresssectionComponent } from './progresssection/progresssection.component';
import { CasestudysectionComponent } from './casestudysection/casestudysection.component';
import { PricingsectionComponent } from './pricingsection/pricingsection.component';
import { TestimonialsectionComponent } from './testimonialsection/testimonialsection.component';
import { BlogsectionComponent } from './blogsection/blogsection.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    FeaturesectionComponent,
    VideosectionComponent,
    ServicesectionComponent,
    SolutionsectionComponent,
    ProgresssectionComponent,
    CasestudysectionComponent,
    PricingsectionComponent,
    TestimonialsectionComponent,
    BlogsectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
