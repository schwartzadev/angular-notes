import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ConfigurationService } from './ConfigurationService';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

@NgModule({
	imports: [CommonModule],
	declarations: [AppComponent]
})

export class AppComponent {
  title = 'notes app';
  notes;
 
   constructor(private _ConfigurationService: ConfigurationService) {
        console.log("getting config...");
         this._ConfigurationService.getConfiguration()
            .subscribe(
            (res) => {
                this.notes = res;
                console.log(this.notes);
            },
            (error) => console.log("error : " + error),
            // () => console.log('Error in GetApplication in Login : ' + Error)
        );
        // this.notes = this.notes['notes'];
    
    }

 
}

