import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.scss']
})
export class TicTacToeGameComponent implements OnInit {

  boxes: string[] | any;
  playerOne: any;
  winner: any;

  constructor( ) {}

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    // array of 9 refers to 9 boxes
    this.boxes = Array(9).fill(null);
    this.winner = null;
    this.playerOne = true;
  }

  get player() {
    return this.playerOne ? 'X' : 'O';
  }

  touched(index: number) {
    if (!this.boxes[index]) {
      this.boxes.splice(index, 1, this.player);
      this.playerOne = !this.playerOne;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {

    // 0 1 2
    // 3 4 5
    // 6 7 8
    //  val is for cover all possible patterns
    let val=[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    // in this loop will filter val array is matching in all.
    for (let i = 0; i < val.length; i++) {
      const [a, b, c] = val[i];
      if (this.boxes[a] && this.boxes[a] === this.boxes[b] && this.boxes[a] === this.boxes[c]) {
        return this.boxes[a];
      }
    }
    return null;
  }
}

