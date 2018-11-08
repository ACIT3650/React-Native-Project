import React, { Component } from 'react';
import { View, Image } from 'react-native';

import samusSprite from './samusSprite.js'

export default class SamusSpriteLoad extends Component {

	constructor() {
        super();
        this.state = {
        };
    }

  	render() {
    	return (
      		<View style={{left: -100}}>
      			<Image source={samusSprite.frames[0]}/>
    			<Image source={samusSprite.frames[1]}/>
    			<Image source={samusSprite.frames[2]}/>
    			<Image source={samusSprite.frames[3]}/>
    			<Image source={samusSprite.frames[4]}/>
    			<Image source={samusSprite.frames[5]}/>
    			<Image source={samusSprite.frames[6]}/>
    			<Image source={samusSprite.frames[7]}/>
    			<Image source={samusSprite.frames[8]}/>
    			<Image source={samusSprite.frames[9]}/>
    			<Image source={samusSprite.frames[10]}/>
    			<Image source={samusSprite.frames[11]}/>
    			<Image source={samusSprite.frames[12]}/>
    			<Image source={samusSprite.frames[13]}/>
    			<Image source={samusSprite.frames[14]}/>
    			<Image source={samusSprite.frames[15]}/>
    			<Image source={samusSprite.frames[16]}/>
    			<Image source={samusSprite.frames[17]}/>
    			<Image source={samusSprite.frames[18]}/>
    			<Image source={samusSprite.frames[19]}/>
    			<Image source={samusSprite.frames[20]}/>
    			<Image source={samusSprite.frames[21]}/>
    			<Image source={samusSprite.frames[22]}/>
    			<Image source={samusSprite.frames[23]}/>
    			<Image source={samusSprite.frames[24]}/>
    			<Image source={samusSprite.frames[26]}/>
    			<Image source={samusSprite.frames[27]}/>
    			<Image source={samusSprite.frames[28]}/>
    		</View>
    	);
  	}
}