import { Component, Input, computed, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  /*
    using Signals
          avatar = input.required<string>();
          name = input.required<string>();
          imgPath = computed(() => {
            return 'assets/users/' + this.avatar();
          });
  */

  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imgPath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {}
}
