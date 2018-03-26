import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekDays = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
let febDays = ( (new Date().getFullYear() % 100!=0) && (new Date().getFullYear() % 4==0) || (new Date().getFullYear() % 400==0) ? '29' : '28') ;
var dayPerMonth = ["31", ""+febDays+"","31","30","31","30","31","31","30","31","30","31"];

export default class WeeklyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View></View>
          <View></View>
          <View></View>
        </View>

        <View style={styles.weeklyCalender}>
          <View style={styles.weekdays}>
            {weekDays.map((item, i) => <Text key={i}>{item}</Text>)}          
          </View>
          <View></View>
        </View>

      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#F5F5F580',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdays: {
    flex: 1,
    backgroundColor: '#F5F5F580',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});