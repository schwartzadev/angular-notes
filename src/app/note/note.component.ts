import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../ConfigurationService';
import { Note, List, Listitem } from '../note';


@Component({
	selector: 'notes',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
	title = 'notes app';
	notes;
	currentNote: Note;

	constructor(private _ConfigurationService: ConfigurationService) { }

	ngOnInit() {
		console.log("getting config...");
		this._ConfigurationService.getConfiguration()
		.subscribe(
			(res) => {
				this.notes = res;
			},
			(error) => console.log("error : " + error),
			// () => console.log('Error in GetApplication in Login : ' + Error)
			);
	}

	getNoteByID(id: number) {
		return this.notes
		.map(notes => this.notes.filter(note => note.id === id))[0][0];
	}

	getListItem(content: String, list: List) {
		var items = list.content;
		// console.log(items);
		return list.content
		// .map(items => items.filter(item => item.content === content));
	}

	onSelect(note: Note): void {
		// console.log('clicked ' + note.done);
		this.currentNote = note;
	}

	onCheck(note: Note, item) {
		item.done = !item.done;
		console.log('note ' + note.id + '\t' + item.content + '\t' + item.done);
		console.log(this.notes);
		this._ConfigurationService.save(this.notes);
	}

	onDelete(note: Note) {
		note.done = !note.done; // should make done prop to true
		let index: number = this.notes.indexOf(note);
		if (index !== -1) {
			this.notes.splice(index, 1);
		}
		console.log(this.notes);
	}

}