import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-pixi-fiber';
import Grid from './grid';

export default class Board extends Component {

  constructor(props) {
    super(props);
    const initGrid = {
      "0": [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "1": [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "2": [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
      "3": [0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0],
      "4": [0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0],
      "5": [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0],
      "6": [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
      "7": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
      "8": [0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "9": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
    const initGridStr = JSON.stringify(initGrid)
      .replace('{','{\n')
      .replace(/],/g,'],\n')
      .replace('}','\n}');
    this.state = {
      grid: initGrid,
      gridStr: initGridStr,
      valid: true,
      width: 20,
      height: 10
    };
  }

  componentDidMount() {
    const { grid, width, height } = this.state;
    // Setup PixiJS App
    const gameContainer = document.getElementById('game-container');
    ReactDOM.render(this.renderStage(grid, width, height), gameContainer);
  }

  handleGridValuesChange = (event) => {
    let validGrid = false,
      width = false,
      height = false;
    const gridStr = event.target.value;

    try {
      const gridParsed = JSON.parse(gridStr);
      // TODO: Also check to ensure all cols same length...
      width = gridParsed[0].length;
      height = Object.keys(gridParsed).length;
      validGrid = true;
    } catch (e) {
      // no op
    }

    // set what we can
    this.setState({
      gridStr: gridStr,
      valid: validGrid,
      width: width || this.state.width,
      height: height || this.state.height
    });
  }

  handleChangeGrid = () => {
    const { valid, gridStr, width, height } = this.state;
    if (valid) {
      const grid =  JSON.parse(gridStr);
      // re-render into game container
      const gameContainer = document.getElementById('game-container');
      ReactDOM.unmountComponentAtNode(gameContainer);
      ReactDOM.render(this.renderStage(grid, width, height), gameContainer);
    }
  }

  renderStage(grid, width, height) {
    // drawing size
    const stageWidth = 1000, stageHeight = 400;
    return (
      <Stage
        width={stageWidth}
        height={stageHeight}
        options={{ backgroundColor: 0x10bb99 }}>
        <Grid
          grid={grid}
          width={width}
          height={height}
          stageWidth={stageWidth}
          stageHeight={stageHeight}
        />
      </Stage>
    );
  }

  render() {
    const { valid, width, height } = this.state;
    let { gridStr } = this.state;
    return (
      <div className="edit-grid">
        <textarea 
          name="grid-values"
          className="edit-grid-textarea"
          value={gridStr}
          onChange={this.handleGridValuesChange}
          rows="12" />
        <button
          disabled={!valid}
          className="edit-grid-action raise"
          onClick={this.handleChangeGrid}>
            Go!
        </button>
        <div className="width-height">
          <label>Width: { width }</label>
          <label>Height: { height }</label>
        </div>
      </div>
    );
  }
  
}