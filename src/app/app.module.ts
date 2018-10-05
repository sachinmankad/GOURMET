import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HotelBoardComponent } from './components/hotels/hotel.component';
import { AddHotelComponent } from './components/hotels/addhotels/addhotel.component';
import { MenulistComponent } from './components/hotels/menulist/menulist.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HotelBoardComponent,
    AddHotelComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
