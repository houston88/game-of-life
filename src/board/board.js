import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-pixi-fiber';
import Grid from './grid';

export default class Board extends Component {

  componentDidMount() {
    // Setup PixiJS App
    const gameContainer = document.getElementById('game-container');
    ReactDOM.render(this.renderStage(), gameContainer);
  }

  renderStage() {
    // define game to draw
    const startingCells = [
        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
        [0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      width = 20,
      height = 10,
      stageWidth = 1000,
      stageHeight = 500;
    return (
      <Stage width={stageWidth} height={stageHeight} options={{ backgroundColor: 0x10bb99 }}>
        <Grid
          grid={startingCells}
          width={width}
          height={height}
          stageWidth={stageWidth}
          stageHeight={stageHeight}
        />
      </Stage>
    );
  }

  render() {
    return (
        <div></div>
      );
  }
  
}