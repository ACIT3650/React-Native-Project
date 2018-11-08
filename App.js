import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

import AnimatedSprite from 'react-native-animated-sprite';

import SamusSpriteComponent from "./components/samusSpriteComponent"

export default class App extends React.Component {

	constructor() {
        super();
        this.state = {
            animationType: 'WALK'
        }
    }

  	render() {
    	return (
    		<View>
	    		<ImageBackground
				  source={require('./assets/background.png')}
				  resizeMode='stretch'
				  style={{
				  	width: '100%', 
				  	height: '100%',
				  }}
				> 
				    <SamusSpriteComponent/>
				</ImageBackground>
  			</View>
    	);
  	}
}
