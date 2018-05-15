import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';

const { height, width } = Dimensions.get('window');

import { getUser } from '../../actions/index';
import CalendarView from './CalendarView.js';
import Activity from './Activity.js';
import GeneralMenu from '../GeneralMenu';
import AddActivity1 from './AddActivity1';
import ChoseActivity from './ChoseActivity';



class CalendarFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    render() {
        
        return (
            <View style={styles.container}>
                <CalendarTab screenProps={{rootNavigation:this.props.navigation}}/>
            </View>
        );
    }
}


const CalendarTab = StackNavigator(
    {
      CalendarView: { screen: CalendarView },
      AddActivity1: { screen: AddActivity1 },
      ChoseActivity: { screen: ChoseActivity },
      Activity: { screen: Activity },
  
    },
    {
      headerMode: 'none',
    }
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    
});

export default connect(state => {
    const users = state.users || {};
    return {
        users
    }
}, dispatch => {
    return bindActionCreators({ getUser: getUser }, dispatch)
}
)(CalendarFlow);
