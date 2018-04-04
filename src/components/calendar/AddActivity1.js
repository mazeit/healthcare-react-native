import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated
} from 'react-native';

export default class AddActivity1 extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.state = {
      items: {}
    };
  }
  componentDidMount() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 100,
    }).start();
  }

  render() {
    const translateY = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 350],
    });
    const transform = [{ translateY }];
    return (
      <Animated.View style={[styles.container, { transform }]}>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
        <View style={styles.category}></View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 350,
    backgroundColor: '#000000'
  },
  category: {
    flex: 1,
    margin: 5,
  },
});