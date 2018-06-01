import React, { Component } from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import bunny from './bunny.png';

export default class Bunny extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 200,
            y: 200
        };

        const getRandomIntInclusive = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
        }

        // animate
        setInterval(() => {
          this.setState({
            x: (this.state.x + getRandomIntInclusive(-5,5)) % 500,
            y: (this.state.y + getRandomIntInclusive(-5,5)) % 500
          });
        }, 10);
    }

    render() {
      return (
        <Sprite anchor={centerAnchor} texture={PIXI.Texture.fromImage(bunny)} x={this.state.x} y={this.state.y} />
      );
    }

}