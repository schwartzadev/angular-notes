import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { AppComponent }  from './app.component';
import { ConfigurationService } from './ConfigurationService';
import { NoteComponent } from './note/note.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NoteComponent
  ],
  providers: [ConfigurationService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

