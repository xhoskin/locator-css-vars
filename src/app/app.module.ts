import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { SandwichComponent } from './sandwich/sandwich.component';


@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    MainLogoComponent,
    SandwichComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
