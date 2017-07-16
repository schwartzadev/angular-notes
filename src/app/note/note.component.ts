import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../ConfigurationService';


@Component({
	selector: 'notes',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
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
	ngOnInit() {
	}
}