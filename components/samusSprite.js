const samusSprite = {
	name:"samus",
	size: {width: 50, height: 50},
	animationTypes: ['IDLE', 'WALK', ],
	frames: [
	    require('../assets/samus_idle.png'), // 0

	    require('../assets/samus_walk_right1.png'), 
	    require('../assets/samus_walk_right2.png'),
	    require('../assets/samus_walk_right3.png'),
	    require('../assets/samus_walk_right4.png'),
	    require('../assets/samus_walk_right5.png'),
	    require('../assets/samus_walk_right6.png'),
	    require('../assets/samus_walk_right7.png'),
	    require('../assets/samus_walk_right8.png'),
	    require('../assets/samus_walk_right9.png'),
	    require('../assets/samus_walk_right10.png'), // 10

	    require('../assets/samus_spin_r1.png'),
	    require('../assets/samus_spin_r2.png'),
	    require('../assets/samus_spin_r3.png'),
	    require('../assets/samus_spin_r4.png'),
	    require('../assets/samus_spin_r5.png'),
	    require('../assets/samus_spin_r6.png'),
	    require('../assets/samus_spin_r7.png'),
	    require('../assets/samus_spin_r8.png'), // 18

	    require('../assets/samus_spin_l1.png'),
	    require('../assets/samus_spin_l2.png'),
	    require('../assets/samus_spin_l3.png'),
	    require('../assets/samus_spin_l4.png'),
	    require('../assets/samus_spin_l5.png'),
	    require('../assets/samus_spin_l6.png'),
	    require('../assets/samus_spin_l7.png'),
	    require('../assets/samus_spin_l8.png'), // 26

	    require('../assets/samus_idle2.png'),
	    require('../assets/samus_idle3.png'), // 28
	],
	animationIndex: function getAnimationIndex (animationType) {
	    switch (animationType) {
	    case 'IDLE':
	        return [0];
	    case 'WALK':
	        return [1,2,3,4,5,6,7,8,9,10];
	    case 'SPIN_RIGHT':
	    	return [11,12,13,14,15,16,17,18];
	    case 'SPIN_LEFT':
	    	return [19,20,21,22,23,24,25,26];
	    case 'SHOOT':
	    	return [0,27,28];
	    }
	},
};

export default samusSprite;