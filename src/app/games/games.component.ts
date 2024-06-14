import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styles: ``,
})
export class GamesComponent {
  @Input() name = 'Anonymous';
  @Output() addFavGame = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavGame.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'God of War',
    },
    {
      id: 3,
      name: 'The Last of Us',
    },
  ];
}
