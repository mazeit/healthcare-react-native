import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');



export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            active: '#4AB3E2',
            inactive: '#454545',
            activeTab: this.props.activeTab || 'CalendarView',

        }
        this.tabSelected = this.tabSelected.bind(this);
    }


    tabSelected( input) {

        this.props.navigation.navigate(input);
    }
    render() {

        return (

            <View style={styles.footerContainer}>


                <View style={styles.footer}>

                    <TouchableOpacity style={styles.tabButton} onPress={() => this.tabSelected('CalendarView')}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='calender' size={50} color={this.state.activeTab === 'CalendarView' ? this.state.active : this.state.inactive} />
                            <Text style={{ fontFamily: 'DINPro-Medium', marginTop: -5, fontSize: 14, textAlign: 'center', color: color = this.state.activeTab === 'CalendarView' ? this.state.active : this.state.inactive }}>Calendar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton} onPress={() => this.tabSelected('Tracker')}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='tracker' size={50} color={this.state.activeTab === 'Tracker' ? this.state.active : this.state.inactive} />
                            <Text style={{ fontFamily: 'DINPro-Medium', marginTop: -5, fontSize: 14, textAlign: 'center', color: color = this.state.activeTab === 'Tracker' ? this.state.active : this.state.inactive }}>Tracker</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton} >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='challenge' size={50} color={this.state.activeTab === 'challenge' ? this.state.active : this.state.inactive} />
                            <Text style={{ fontFamily: 'DINPro-Medium', marginTop: -5, fontSize: 14, textAlign: 'center', color: this.state.inactive }}>My Challange</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    footer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    componentContainer: {
        flex: 1,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    }
});
