import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import { getActivity } from '../../actions/index'
import { bindActionCreators } from 'redux'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import LoaderWait from '../LoaderWait';



import Header from '../Header';
import Footer from './Footer';


import Swipeout from 'react-native-swipeout';
import { Agenda, CalendarList } from 'react-native-calendars';


const { height, width } = Dimensions.get('window');
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            headDate: new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear(),
            firstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(), weeklyCalendar: true,
            rotate: '180deg',
            user_id: this.props.user_id,
            calendarData: this.props.navigation.state.params.data,
            activityData: {},
            eventData: {},
            markedData: {},
            loader: false,
            activity: '#AE0069',
            mindfulness: '#D4B870',
            nutrition: '#8ACE91',
            timeDiff: '',
        };
        this.getActivityData = this.getActivityData.bind(this);
        this.renderDay = this.renderDay.bind(this);
    }

    componentDidMount() {
        const eventData = {};
        const markedData = {};
        var dotColor = {
            'activity': { key: 'activity', color: '#AE0069', },
            'nutrition': { key: 'nutrition', color: '#8ACE91', },
            'mindfulness': { key: 'mindfulness', color: '#D4B870' },
            'coach': { key: 'coach', color: '#454545' },
        }
        this.state.calendarData.events.forEach((item) => {
            let key = (item.start.split(' ')[0]).toString()


            if (eventData[key]) {

                eventData[key].push(item);
                markedData[key].dots.push(dotColor[item.className.split(' ')[1]])

            } else {
                eventData[key] = [item];
                markedData[key] = { dots: [] }
                markedData[key].dots = [dotColor[item.className.split(' ')[1]]];
            }

        });
        for (let data in markedData) {
            markedData[data].dots = markedData[data].dots.filter(function (item, pos) {
                return markedData[data].dots.indexOf(item) == pos;
            })
        }


        this.setState({ eventData: eventData, markedData: markedData });
    }

    componentWillReceiveProps(nextProps) {
        // console.log('......CALENDER NEXT PROPS.....', nextProps)

        if (nextProps.activityData.hasError === false) {
            this.setState({ activityData: nextProps.activityData, loader: false });
            this.props.navigation.navigate('Activity', { data: nextProps.activityData.content, activityType: 'open' });
        }

        else if (nextProps.activityData.hasError === true) {
            this.setState({ loader: false })
            console.log('......ERROR.....', nextProps.activityData.errors)
        }



    }



    getActivityData(id, time) {
        var today = new Date();
        let activityStart = new Date();
        let diffMs = (activityStart - today); // milliseconds between now & activity
        var milliseconds = parseInt((diffMs % 1000) / 100),
            seconds = parseInt((diffMs / 1000) % 60),
            minutes = parseInt((diffMs / (1000 * 60)) % 60),
            hours = parseInt((diffMs / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        const timeDiff = hours + ":" + minutes;
        const activityType = timeDiff.split(':')[0] - 48 > 0 ? 'locked' : 'open' ;
        console.log('....ID....INDEX', id, timeDiff);
        // this.setState({ timeDiff: timeDiff });

        this.setState({ loader: true });
        this.props.getActivity(id, 'show');
    }

    renderDay(day, item) {
        return (
            <View>
                {
                    day ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF80', borderRadius: 5, padding: 10, alignItems: 'center', justifyContent: 'center', left: 10, width: 70 }}>
                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 35, color: '#838383' }}>{day.day}</Text>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 15, color: '#838383', alignSelf: 'center' }}>{month[day.month]}</Text>
                        </View> :
                        <View />}
            </View>
        );
    }
    renderItem(item) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>

                <Swipeout {...swipeSettings} style={[styles.SwiperContainer, { borderRadius: 5 }]}>
                    <View style={styles.challangeTab} >
                        <TouchableOpacity onPress={() => this.getActivityData(item.id, item.start)}>
                            <View style={styles.challangeTab}>
                                <Icon style={{ flex: 2, left: -10 }} name={item.className.split(' ')[0].split('_')[0]} size={80} color="#838383" />
                                <View style={{ flex: 6.5, justifyContent: 'center', marginRight: 5, marginLeft: 15 }}>
                                    <Text style={{ flex: 1, fontFamily: 'DINPro-Light', fontSize: 16, color: '#454545', marginVertical: 10 }}>{item.title}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: -20, marginTop: -20 }}>
                                        <Icon name='time' size={50} color="#838383" />
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545' }}>{item.time_length}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 1, borderColor: this.state[item.className.split(' ')[1]], alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
                                        <Icon name={item.className.split(' ')[1]} size={20} color={this.state[item.className.split(' ')[1]]} />
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                </Swipeout>

            </View>
        );
    }


    render() {

        const eventData = this.state.eventData;
        const markedData = this.state.markedData;




        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={() => this.props.navigation.navigate('AddActivity1')} backgroundcolor={'#FFFFFF'} headerTitle={this.state.headDate} leftButton={true} leftButtonName={'plus'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                            </View>
                            <View style={{ flex: 9 }}>



                                <Agenda
                                    // the list of items that have to be displayed in agenda. If you want to render item as empty date
                                    // the value of date key kas to be an empty array []. If there exists no value for date key it is
                                    // considered that the date in question is not yet loaded
                                    items={eventData}
                                    // callback that gets called when items for a certain month should be loaded (month became visible)
                                    loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                                    // callback that fires when the calendar is opened or closed
                                    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                                    // callback that gets called on day press
                                    onDayPress={(day) => { console.log('day pressed') }}
                                    // callback that gets called when day changes while scrolling agenda list
                                    onDayChange={(day) => { console.log('day changed') }}
                                    // initially selected day
                                    current={new Date()}
                                    selected={this.state.calendarData.event_start_date.split(' ')[0]}
                                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                    minDate={this.state.calendarData.event_start_date.split(' ')[0]}
                                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                    maxDate={this.state.calendarData.event_end_date.split(' ')[0]}
                                    // Max amount of months allowed to scroll to the past. Default = 50
                                    pastScrollRange={50}
                                    // Max amount of months allowed to scroll to the future. Default = 50
                                    futureScrollRange={50}
                                    // specify how each item should be rendered in agenda
                                    renderItem={this.renderItem.bind(this)}
                                    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                                    renderDay={(day, item) => this.renderDay(day, item)}
                                    // specify how empty date content with no items should be rendered
                                    renderEmptyDate={() => { return (<View />); }}
                                    // specify how agenda knob should look like
                                    renderKnob={() => { return (<View />); }}
                                    // specify what should be rendered instead of ActivityIndicator
                                    renderEmptyData={() => { return (<View />); }}
                                    // specify your item comparison function for increased performance
                                    rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
                                    // Hide knob button. Default = false
                                    hideKnob={false}
                                    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                                    markedDates={markedData}
                                    markingType={'multi-dot'}
                                    // agenda theme
                                    theme={{
                                        backgroundColor: 'transparent',
                                        selectedDayBackgroundColor: '#454545',
                                        dayTextColor: '#454545',
                                        textDayFontFamily: 'DINPro-Medium',
                                        textMonthFontFamily: 'DINPro-Medium',
                                        textDayHeaderFontFamily: 'DINPro-Medium',
                                    }}
                                    // agenda container style
                                    style={{}}
                                />

                            </View>
                            <View style={{ flex: 1 }}>
                                <Footer navigation={this.props.navigation} />
                            </View>
                        </View>
                }
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
        width: width - 100,
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
        width: width - 100,
        height: 65,
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});

export default connect(state => {
    const user_id = state.validUser.user.id || '';
    const activityData = state.getData.activityData || {};
    return {
        user_id,
        activityData,

    }
}, dispatch => {
    return bindActionCreators({ getActivity: getActivity }, dispatch)
}
)(CalendarView);
