import React from 'react'

import './Chessboard.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
    let board = [];

    for (let y = verticalAxis.length - 1; y >= 0; y--) {
      for (let x = 0; x < horizontalAxis.length; x++) {
          const number = y + x + 2;
  
          if(number % 2 === 0) {
              board.push(
                  <div className="tile black-tile">[{horizontalAxis[x]}{verticalAxis[y]}]</div>
                );
          } else {
              board.push(
                  <div className="tile white-tile">[{horizontalAxis[x]}{verticalAxis[y]}]</div>
                );
          }
      }
    }

    
    return (
      <div id="chessboard">{board}</div>
    )
}

