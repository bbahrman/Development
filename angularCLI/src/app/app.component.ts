import { Component } from '@angular/core';
import { User } from './shared/models/user'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	message:string = 'Hello World!';
	users: User[] = [
	 { id: 34, name: 'Ben', username: 'bbahrman'},
	 { id: 35, name: 'Rebecca', username: 'rbahrman'},
	 { id: 36, name: 'Arrow', username: 'arrowlefluff'}
	];
	activeUser: User;

	selectUser(userObj){
		this.activeUser = userObj;
		console.log(this.activeUser);
	}
}
