import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { AppComponent }  from './app.component';
import { ConfigurationService } from './ConfigurationService';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ConfigurationService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

