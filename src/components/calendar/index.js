import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';

const { height, width } = Dimensions.get('window');


import { getUser } from '../../actions/index'
import CalendarView from './CalendarView.js'
import Activity from './Activity.js'
import GeneralMenu from '../GeneralMenu';
import AddActivityCategory from './AddActivityCategory';
import ChoseActivity from './ChoseActivity'


class CalendarFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            heading: '',
            calendarView: true,
            showMenu: false,
            close: false,
            page: 'calendarMonthly',
            addActivity: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.goToActivity = this.goToActivity.bind(this);
        this.goToNext = this.goToNext.bind(this);
    }
    goToNext() {
        if( this.state.page === 'calendarMonthly' && !this.state.addActivity) {
            this.setState({ page: 'activity', close: true})
        }
        if( this.state.page === 'calendarMonthly' && this.state.addActivity) {
            this.setState({ page: 'choseActivity', addActivity: false})
        }

    }
    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    goToActivity() {
        this.setState({ calendarView: false, close: true })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        {
                            !this.state.close ? <TouchableOpacity onPress={() => this.setState({ addActivity: true, close: true })}>
                                                    <Image source={require('../../../assets/icons/add.png')} style={{ width: 15, height: 15, resizeMode: 'center' }} />
                                                </TouchableOpacity> : 
                                                <TouchableOpacity onPress={() => this.setState({ addActivity: false, close: false, page: 'calendarMonthly' })}>
                                                    <Image source={require('../../../assets/icons/close_grey.png')} style={{ width: 15, height: 15, resizeMode: 'center' }} />
                                                </TouchableOpacity>
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

                <View style={{ flex: 8, backgroundColor: '#F5F5F5' }}>
                    
                    {
                        (() => {
                            switch (this.state.page) {
                                case 'calendarMonthly':
                                    return <CalendarView goToNext={this.goToNext} />;
                                case 'activity':
                                    return <Activity goToNext={this.goToNext} />;
                                case 'choseActivity':
                                    return <ChoseActivity />;
                                default:
                                    return null;
                            }
                        })()
                    }
                    {
                        this.state.addActivity && <View style={{position: 'absolute', top: 0, left: 0, width: width, height: height,}}><AddActivityCategory goToNext={this.goToNext} /></View>
                    }
                    {/* {this.state.calendarView ? <CalendarView goToActivity={this.goToActivity} /> : <Activity />} */}
                </View>
                <View style={styles.footer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../../assets/icons/calendar-selected.png')} style={{ width: 27, height: 27, resizeMode: 'center' }} />
                        <Text style={{ fontFamily: 'DINPro', fontSize: 14, color: '#4AB3E2' }}>Calander</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../../assets/icons/tracker.png')} style={{ width: 27, height: 27, resizeMode: 'center' }} />
                        <Text style={{ fontFamily: 'DINPro', fontSize: 14, color: '#454545' }}>Tracke</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../../assets/icons/challenge.png')} style={{ width: 27, height: 27, resizeMode: 'center' }} />
                        <Text style={{ fontFamily: 'DINPro', fontSize: 14, color: '#454545' }}>My Challange</Text>
                    </View>
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
    addActivity: {
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
