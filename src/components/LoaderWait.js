import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Dimensions } from 'react-native';

const {height,width} = Dimensions.get('window');

export default class LoaderWait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.animated = new Animated.Value(0);
  
  }

  componentDidMount(){
    this.animate();
  }

  animate () {
    this.animated.setValue(0);
    Animated.timing(this.animated,{
      toValue: 1,
      duration: 2000,
    }).start( () => this.animate())
  }
  render() {

    const  rotateZ = this.animated.interpolate({
      inputRange: [0,1],
      outputRange:['0deg','360deg'],
    });

    const transform = [{ rotateZ }];

    return (
      <View style={styles.container}>
        <View style={styles.loader}>
          <Animated.Image source={require('../../assets/images/loader.png')} style={[{width: 100, height: 100, resizeMode: 'center'}, {transform}]}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00000050',
      position: 'absolute',
      top: 0,
      left: 0,
      height: height,
      width: width,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loader: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
