import { Component } from '@angular/core';
import { User } from '../shared/models/user'

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent{
	newUser: User = new User();
}
