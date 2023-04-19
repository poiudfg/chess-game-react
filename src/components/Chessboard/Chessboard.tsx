import './Chessboard.css';
import Tile from '../Tile/Tile';
import React from 'react';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];


interface Piece {
  image: String;
  x: number;
  y: number;
}

const pieces: Piece[] = [];
for(let i=0 ;i < 8 ;i++){
  pieces.push({image: "assets/images/pawn_b.png" , x:i ,y:6});
}

for(let i=0 ;i < 8 ;i++){
  pieces.push({image: "assets/images/pawn_w.png" , x:i ,y:1});
}

let activePiece: HTMLElement | null = null;

function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const element =  e.target as HTMLElement;
  if(element.classList.contains("chess-piece")){
    const x = e.clientX - 40;
    const y = e.clientY - 40;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}

function movePiece(e: React.MouseEvent){

  if (activePiece){
    const x = e.clientX - 40;
    const y = e.clientY - 40;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;

  }
}

function dropPiece(e: React.MouseEvent){
  if (activePiece){
    activePiece = null;
  }
}

export default function Chessboard() {
    let board = []; 

    for (let j = verticalAxis.length - 1 ; j >= 0 ; j--) {
      for (let i = 0 ; i < horizontalAxis.length ; i++) {
        const number = j + i + 2;
        let image = undefined;

        pieces.forEach((p) => {
          if(p.x === i && p.y === j){
            image =  p.image;
          }
        });

        board.push(<Tile key={`${j},${i}`} image= {image} number={ number } />);
        }
      } 

    
    return (
      
      <div className='monitor'>
      <div className='section_chess'> Chess Game</div>
      <div id="chessboard" 
      onMouseDown={e => grabPiece(e)} 
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      
      >{board}</div>
      </div>
      
    );
}

