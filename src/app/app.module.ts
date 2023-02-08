import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoomsComponent,
    RoomsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
