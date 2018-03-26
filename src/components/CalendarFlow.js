import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { getUser } from '../actions/index'
import CalendarView from './CalendarView.js'
import Activity from './Activity.js'
import { bindActionCreators } from 'redux'

class CalendarFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        calendarView: true,
        activity: false,
        };
        this.navigate = this.navigate.bind(this);
        this.goToActivity = this.goToActivity.bind(this);
    }

    goToActivity() {
        this.setState({calendarView: false, activity: true})
    }

    navigate(name, user) {
        this.props.navigator.push({
        name,
        user
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.activity && <View style={ styles.header}>
                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center'}}></View>
                    <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center'}}></View>
                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center'}}></View>
                </View>}
                <View style={{ flex:8 , backgroundColor: '#F5F5F5'}}>
                    {this.state.calendarView ? <CalendarView goToActivity={this.goToActivity} /> : <Activity />}
                </View>
                <View style={styles.footer}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}><Text>Calander</Text></View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}><Text>Tracke</Text></View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}><Text>My Challange</Text></View>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    footer: {
        flex: 1,
        backgroundColor: "#F5F5F580",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#F5F5F580',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
)(CalendarFlow);
