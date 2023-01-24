import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OzivImportComponent } from './oziv-import/oziv-import.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, OzivImportComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
