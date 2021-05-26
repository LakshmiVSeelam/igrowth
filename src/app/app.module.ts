import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServicesectionComponent } from './servicesection/servicesection.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesectionComponent } from './featuresection/featuresection.component';
import { VideosectionComponent } from './videosection/videosection.component';
import { SolutionsectionComponent } from './solutionsection/solutionsection.component';
import { ProgresssectionComponent } from './progresssection/progresssection.component';
import { CasestudysectionComponent } from './casestudysection/casestudysection.component';
import { TestimonialsectionComponent } from './testimonialsection/testimonialsection.component';
import { BlogsectionComponent } from './blogsection/blogsection.component';
import { PagebannerComponent } from './pagebanner/pagebanner.component';
import { TeamsectionComponent } from './teamsection/teamsection.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutcontentComponent } from './aboutcontent/aboutcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ServicesectionComponent,
    ContactComponent,
    FooterComponent,
    FeaturesectionComponent,
    VideosectionComponent,
    SolutionsectionComponent,
    ProgresssectionComponent,
    CasestudysectionComponent,
    TestimonialsectionComponent,
    BlogsectionComponent,
    PagebannerComponent,
    TeamsectionComponent,
    BlogComponent,
    PortfolioComponent,
    AboutcontentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
