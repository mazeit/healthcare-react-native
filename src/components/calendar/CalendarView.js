import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { getUser } from '../../actions/index'
import { bindActionCreators } from 'redux'


import Swipeout from 'react-native-swipeout';
import AddActivity1 from './AddActivity1.js';
import Calendar from './Calendar';


const { height, width } = Dimensions.get('window');

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            firstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(),
            weeklyCalendar: true,
            rotate: '180deg',
        };
    }


    render() {

        const swipeSettings = {
            autoClose: true,
            onOpen: (secId, rowId, direction) => {

            },
            onClose: (secId, rowId, direction) => {

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
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')}>
                {
                    this.state.weeklyCalendar ? <Calendar today={this.state.today} firstDay={this.state.firstDay} /> : <AddActivity1 />
                }

                <ScrollView style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <Swipeout {...swipeSettings} style={styles.SwiperContainer}>
                            <View style={styles.challangeTab} >
                                <TouchableOpacity onPress={() => this.props.goToNext()}>
                                    <View style={styles.challangeTab}>
                                        <Image style={{ flex: 2, width: 74, height: 60, }} source={require('../../../assets/icons/morning.png')} />
                                        <View style={{ flex: 6.5, justifyContent: 'center', }}>
                                            <Text style={{ flex: 1, fontFamily: 'DINPro-Light', fontSize: 16, color: '#454545', marginVertical: 10 }}>Einnahme Multi Vitamin Mix</Text>
                                            {/* <Text style={ {flex: 1,}}>ahjdkjs</Text> */}
                                        </View>
                                        <View style={{ flex: 1.5 }}></View>
                                    </View>
                                </TouchableOpacity>
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
        backgroundColor: '#FFFFFF80',
    },
    challangeTab: {
        flex: 1,
        opacity: 0.8,
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
}, dispatch => {
    return bindActionCreators({ getUser: getUser }, dispatch)
}
)(CalendarView);