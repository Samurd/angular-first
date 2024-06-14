import { Component, Input } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name = "Anonymous";
  isLogged = false
  favGame = "none"

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }
}
