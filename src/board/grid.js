import React, { Component } from 'react';
import Rectangle from './rectangle'
import Game from '../game/game';

export default class Grid extends Component {

    constructor(props) {
        super(props);
        // we are going to modify grid
        this.state = {
          grid: props.grid
        }
    }

    componentDidMount() {
      this.startGame();
    }

    startGame() {
      const { grid } = this.state;
      const { width, height } = this.props;
      const game = new Game(grid, width, height);
      setInterval(() => {
        this.setState({
          grid: game.step()
        })
      }, 100);
    }

    renderGrid() {
      const { grid } = this.state;
      const { width, height, stageWidth, stageHeight } = this.props;
      const aliveFill = '0x02b156'; // green
      const deadFill = '0xe6faff'; // white
      const squareWidth = stageWidth / width;
      const squareHeight = stageHeight / height;
      
      return Object.keys(grid).map((row, rowIndex) => {
        return grid[row].map((col, colIndex) => {
          const fill = col ? aliveFill : deadFill;
          const x = colIndex * squareWidth;
          const y = rowIndex * squareHeight;
          return <Rectangle fill={fill} x={x} y={y} width={squareWidth} height={squareHeight} />
        });
      });
    }

    render() {
      return this.renderGrid();
    }

}