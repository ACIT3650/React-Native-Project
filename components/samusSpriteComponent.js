import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, Button } from 'react-native';

import AnimatedSprite from 'react-native-animated-sprite';

import samusSprite from './samusSprite.js';
import SamusSpriteLoad from './samusSpriteLoad.js';

export default class SamusSpriteComponent extends Component {

	constructor() {
        super();
        this.state = {
            animationType: 'IDLE',
            tweenOptions: {
		    },
		    doorImg: require('../assets/door_closed.png'),
		    doorLeft: 320,
        };
    }

    changeDoor() {
    	this.setState({
    		doorImg: require('../assets/door_open.png'),
    		doorLeft: 300,
		})
    }

    nextSprite() {
		this.tweenSprite(155, 537, 'WALK', 2300)
		setTimeout(() => {this.tweenSprite(260, 437, 'SPIN_RIGHT', 1000)}, 2300);
		setTimeout(() => {this.tweenSprite(170, 337, 'SPIN_LEFT', 1000)}, 3300);
		setTimeout(() => {this.tweenSprite(260, 237, 'SPIN_RIGHT', 1000)}, 4300);
		setTimeout(() => {this.tweenSprite(170, 137, 'SPIN_LEFT', 1000)}, 5300);
		setTimeout(() => {this.tweenSprite(280, 150, 'SPIN_RIGHT', 800)}, 6300);
		setTimeout(() => {this.tweenSprite(280, 150, 'SHOOT', 0)}, 7100);
		setTimeout(() => {this.tweenSprite(350, 150, 'WALK', 800)}, 7500);
		setTimeout(() => {this.changeDoor()}, 7500);
    }

	tweenSprite (xcord, ycord, animation, duration) {
		const coords = this.refs.samusRef.getCoordinates();
		this.setState({
			tweenOptions: {
				tweenType: 'linear-move',
				startXY: [coords.left, coords.top],
				endXY: [xcord, ycord],
				duration: duration,
				loop: false,
			},
			animationType: animation
		}, () => {
			this.refs.samusRef.startTween();
		});
	}

  	render() {
    	return (
    		<View>
	      		<View>
	      			<AnimatedSprite
	      			ref={'samusRef'}
					sprite={samusSprite}
					animationFrameIndex={samusSprite.animationIndex(this.state.animationType)}
					loopAnimation={true}
					coordinates={{
					    top: 537,
					    left: -50,
					}}
					size={{
					    width: samusSprite.size.width,
					    height: samusSprite.size.height,
					}}
					tweenOptions = {this.state.tweenOptions}
					tweenStart={'fromMethod'}
					fps={12}
					/>

					<View style={{height: 30}}>
					</View>
				    <Button
		        		onPress={() => {this.nextSprite()}}
		        		title="Start!"
		        		color="transparent"
		        	/>

					<Image source={this.state.doorImg}
		      			style={{
						    top: 62,
						    left: 320,
						}}
	      			/>
	      			<Image source={require('../assets/door_open.png')}
		      			style={{
						    top: 380,
						    left: -20,
						}}
	      			/>
	      		</View>
	      		<SamusSpriteLoad/>
      		</View>
    	);
  	}
}

AppRegistry.registerComponent('SamusSpriteComponent', () => SamusSpriteComponent);
