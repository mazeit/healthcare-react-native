import React from 'react';
import { StyleSheet, Text, View, PanResponder, Image, Animated } from 'react-native';



// const { height, width } = Dimensions.get('window');

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            
        };

    }

    componentWillMount() {
        this._panResponder = PanResponder.create({

            onMoveShouldSetResponderCapture: () => true,

            onMoveShouldSetPanResponderCapture: () => true,

            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },

            // When we drag/pan the object, set the delate to the states pan position
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y },
            ]),

            onPanResponderRelease: (e, { vx, vy }) => {
                this.state.pan.flattenOffset();
            }
        });
    }

    render() {

        let { pan } = this.state;

        // Calculate the x and y transform from the pan value
        let [translateX, translateY] = [pan.x, pan.y];

        // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
        let imageStyle = { transform: [{ translateX }, { translateY }] };

        return (
            <View style={{ flex: 1 }}>
                <Animated.View {...this._panResponder.panHandlers} style={imageStyle}>

                    <Image source={require('../../assets/icons/back_grey.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />

                </Animated.View>
            </View>
        );
    }
}
