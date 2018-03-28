import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import { getUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import {Calendar, Agenda} from 'react-native-calendars';
import Swipeout from 'react-native-swipeout';
import WeeklyView from './WeeklyView.js'
import AddActivity1 from './AddActivity1.js';


const {height, width} = Dimensions.get('window');

class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        weeklyCalendar: true,
        rotate: '180deg',
    };
    this.navigate = this.navigate.bind(this);
  }


  navigate(name, user) {
    this.props.navigator.push({
      name,
      user
    })
  }

  render() {

    const swipeSettings = {
        autoClose: true,
        onOpen: (secId, rowId, direction) =>{

        },
        onClose: (secId, rowId, direction) =>{

        },
        right: [
            {
                onPress: () => {

                },
                text: 'Delete', type: 'delete'
            }
        ],
    };
    return (
        <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>
            {this.state.weeklyCalendar ? <Calendar
                    style={styles.calendar}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        monthTextColor: '#454545',
                        textDayFontFamily: 'DINPro',
                        textMonthFontFamily: 'DINPro',
                        textDayHeaderFontFamily: 'DINPro',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                    current={new Date()}
                    markingType={'multi-dot'}
                    markedDates={{
                        '2018-03-08': {dots: [{key: 'vacation', color: '#AE0069', selectedDotColor: 'white'}, {key: 'massage', color: '#D4B870', selectedDotColor: 'white'}], selected: false},
                        '2018-03-09': {dots: [{key: 'vacation', color: '#8ACE91', selectedColor: 'red'}, {key: 'massage', color: '#D4B870', selectedColor: 'blue'}], disabled: false}
                    }}
                    hideArrows={true}
            /> : <AddActivity1/>
            }

            <TouchableHighlight style={ {alignItems: 'center', justifyContent: 'center',backgroundColor: '#FFFFFF95', position: 'absolute', top: 335, left: width/2 -15 , borderRadius: 50, width: 30, height: 30}}>
                <Image style={{ width: 60, height: 60, transform: [{ rotateX: this.state.rotate }], }} source={require('../../assets/icons/little_arrow_grey.png')} />
            </TouchableHighlight>
            
            <ScrollView style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    
                        <Swipeout {...swipeSettings} style={styles.SwiperContainer}>                        
                            <View style={styles.challangeTab} >
                                <TouchableHighlight onPress={() => this.props.goToActivity()}>
                                    <View style={styles.challangeTab}>
                                        <Image style={{flex: 2, width: 74, height: 60,}} source={require('../../assets/icons/morning.png')} />
                                        <View style={ { flex: 6.5, justifyContent: 'center', }}>
                                            <Text style={ {flex: 1, fontFamily:'DINPro-Light', fontSize: 16, color: '#454545', marginVertical: 10}}>Einnahme Multi Vitamin Mix</Text>
                                            {/* <Text style={ {flex: 1,}}>ahjdkjs</Text> */}
                                        </View>
                                        <View style={{ flex: 1.5 }}></View>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </Swipeout>
                    
                </View>
            </ScrollView>
            
        </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    calendar: {
        paddingTop: 20,
        height: 350,
        backgroundColor: '#FFFFFF95',
        marginBottom: 15,
        marginTop: 0,
      },
      SwiperContainer: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: width - 20,
          height: 65,
          margin: 5,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: '#FFFFFF80'
      },
      challangeTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 20,
        height: 65,
    },
  });

export default connect(state => {
  const users = state.users || {};
  return {
    users
  }
},dispatch => {
  return bindActionCreators ({ getUser : getUser }, dispatch)
}
)(CalendarView);
