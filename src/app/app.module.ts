import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ButtonRowComponent } from './button-row/button-row.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InformationContainerComponent } from './information-container/information-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContainerComponent,
    FooterComponent,
    CardComponent,
    ButtonRowComponent,
    HomePageComponent,
    InformationContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
