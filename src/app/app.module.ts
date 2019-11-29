import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ComparePage} from './features/compare/pages/compare-page.component';
import {RatingPage} from './features/rating/pages/rating-page.component';
import {ParticipantCardComponent} from './core/components/participant-card/participant-card.component';
import {ParticipantAddComponent} from './core/components/participant-add/participant-add.component';

@NgModule({
  declarations: [
      AppComponent,
      ComparePage,
      RatingPage,
      ParticipantCardComponent,
      ParticipantAddComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
