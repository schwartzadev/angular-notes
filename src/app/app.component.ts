import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

@NgModule({
	imports: [CommonModule],
	declarations: [AppComponent]
})

export class AppComponent implements NgModule {

  constructor() { }

  ngOnInit() {
  	
  }
}

