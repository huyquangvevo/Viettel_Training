import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import { BannerComponent } from './banner/banner.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ExploreComponent } from './explore/explore.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WhyComponent } from './why/why.component';
import { GrowComponent } from './grow/grow.component';
import { CustomerComponent } from './customer/customer.component';
import { NoticeComponent } from './notice/notice.component';
import { GetCreditComponent } from './get-credit/get-credit.component';
import { AboutComponent } from './about/about.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    BannerComponent,
    GettingStartedComponent,
    ExploreComponent,
    ServicesComponent,
    SolutionsComponent,
    WhyComponent,
    GrowComponent,
    CustomerComponent,
    NoticeComponent,
    GetCreditComponent,
    AboutComponent,
    CopyrightComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
