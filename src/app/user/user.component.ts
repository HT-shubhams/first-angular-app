import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
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

  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
