import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';

const { height, width } = Dimensions.get('window');


import { getUser } from '../../actions/index'
import CalendarView from './CalendarView.js'
import Activity from './Activity.js'
import GeneralMenu from '../GeneralMenu';


class CalendarFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            calendarView: true,
            showMenu: false,
            activity: true,
        };
        this.showMenu = this.showMenu.bind(this);
        this.goToActivity = this.goToActivity.bind(this);
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    goToActivity() {
        this.setState({ calendarView: false, activity: true })
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.activity &&
                    <View style={styles.header}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            {
                                this.state.goBack && <Image source={require('../../../assets/icons/back_grey.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
                            }
                        </View>
                        <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#454545' }}>{this.state.heading}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => this.showMenu()}>
                                <Image source={require('../../../assets/icons/menu.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                <View style={{ flex: 8, backgroundColor: '#F5F5F5' }}>
                    {this.state.calendarView ? <CalendarView goToActivity={this.goToActivity} /> : <Activity />}
                </View>
                <View style={styles.footer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}><Text>Calander</Text></View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}><Text>Tracke</Text></View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}><Text>My Challange</Text></View>
                </View>
                {
                    this.state.showMenu &&
                    <View style={styles.menuOverlay}>
                        <GeneralMenu showMenu={this.showMenu} />
                    </View>
                }
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
    menuOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
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
