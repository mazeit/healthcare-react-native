import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import { getActivity, addActivity, getCalendarData, removeActivity } from '../../actions/index'
import { bindActionCreators } from 'redux'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import LoaderWait from '../LoaderWait';

import moment from 'moment';

import Header from '../Header';
import Footer from './Footer';


import Swipeout from 'react-native-swipeout';
import { Agenda, Calendar } from 'react-native-calendars';


const { height, width } = Dimensions.get('window');
const month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            headDate: new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear(),
            firstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(), weeklyCalendar: true,
            rotate: '180deg',
            user_id: this.props.user_id,
            calendarData: [],
            activityData: {},
            eventData: {},
            markedData: {},
            loader: true,
            activity: '#AE0069',
            mindfulness: '#D4B870',
            nutrition: '#8ACE91',
            timeDiff: '',

            showDateAddedNotification: false,
            //add-activity, default
            mode: (this.props.navigation.state.params && this.props.navigation.state.params.mode) ? this.props.navigation.state.params.mode : 'default',
            selectedDate: '',
            selectedIdContent: null
        };
        this.getActivityData = this.getActivityData.bind(this);
        this.renderDay = this.renderDay.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.generateData = this.generateData.bind(this);
        
    }

    generateData(calendarData) {    
        const eventData = {};
        const markedData = {};
        var dotColor = {
            'activity': { key: 'activity', color: '#AE0069', },
            'nutrition': { key: 'nutrition', color: '#8ACE91', },
            'mindfulness': { key: 'mindfulness', color: '#D4B870' },
            'coach': { key: 'coach', color: '#454545' },
        }
        if (calendarData && calendarData.events) {
            calendarData.events.forEach((item) => {
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
            this.setState({ eventData: eventData, markedData: markedData, calendarData: calendarData, loader: false, selectedDate: this.state.calendarData.event_start_date && this.state.calendarData.event_start_date.split(' ')[0] });
        } else {
            this.setState({ loader: false });
        }
    }

    componentDidMount() {
        this.props.getCalendarData().then(calendarData=>{
            this.generateData(calendarData);
        })
        
    }

    componentWillReceiveProps(nextProps) {
        
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
        const activityType = timeDiff.split(':')[0] - 48 > 0 ? 'locked' : 'open';
        // this.setState({ timeDiff: timeDiff });

        this.setState({ loader: true });
        this.props.getActivity(id).then(activityData => {

            if (activityData.hasError === false) {
                this.setState({ activityData: activityData, loader: false });
                this.props.navigation.navigate('Activity', { data: activityData.content, activityType: 'open' });
            }
        });
    }

    dateSelected(date) {
        this.setState({selectedDate: date.dateString});
        return date;
    }

    addEvent() {
        this.props.addActivity(this.props.navigation.state.params.id_content, this.props.navigation.state.params.event, this.state.selectedDate)
        .then(res=>{
            this.setState({showDateAddedNotification: true});
        })
        
    }

    removeActivity(item, key) {
        this.props.removeActivity(item.id_content, (item.start.split(' ')[0]).toString())
        .then(res=>{
            this.generateData(this.state.calendarData.filter((i)=>i.id_content!=item.id_content));

        })
    }

    renderDay(day, item) {
        return (
            <View>
                {
                    day ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF80', borderRadius: 5, padding: 5, margin: 5, alignItems: 'center', justifyContent: 'center', left: 10, width: 70 }}>
                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 35, color: '#838383' }}>{day.day}</Text>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 15, color: '#838383', alignSelf: 'center' }}>{month[day.month]}</Text>
                        </View> :
                        <View />}
            </View>
        );
    }

    renderItem(item, key) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>

                <Swipeout 
                    autoClose={true}
                    onOpen={(secId, rowId, direction) => {
                    }}
                    onClose={(secId, rowId, direction) => {
                    }}
                    right={[
                        {
                            onPress: () => {
                                this.removeActivity.bind(this)(item);
                            },
                            text: 'Delete', type: 'delete'
                        }
                    ]}
                    rowID={item.id_content} 
                    sectionID={'SECTIONID'} 
                    style={[styles.SwiperContainer, { borderRadius: 5 }]}>
                    <View style={styles.challangeTab} >
                        <TouchableOpacity onPress={() => this.getActivityData(item.id, item.start)}>
                            <View style={styles.challangeTab}>
                                {/*<Icon style={{ flex: 2, left: -10 }} name={item.className.split(' ')[0].split('_')[0]} size={80} color="#838383" />*/}
                                <Icon style={{ flex: 2, left: -15 }} name="morning" size={65} color="#838383" />
                                <View style={{ flex: 6.5, justifyContent: 'center', marginRight: 5, marginLeft: 10 }}>
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

        let startDate = moment();
        let endDate = moment();
        for ( let key in eventData ){
            if (moment(key).isBefore(startDate))
                startDate = moment(key);
            else if (moment(key).isAfter(endDate))
                endDate = moment(key);
        } 
        
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')}>
                {
                    this.state.showDateAddedNotification &&
                    <View style={{ position: 'absolute', width: width, height: height, top: 0, left: 0, flex:1, backgroundColor: '#00000080', zIndex: 100}}>
                        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
                        </View>

                        <View style={{ flex: 4, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <View style={[styles.subContainers, {marginTop: 30, marginBottom: 30 }]}>
                                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 18, color: '#838383'}}>The Activity has been added.</Text>
                                </View>
                                <TouchableOpacity onPress={() => { this.setState({ showDateAddedNotification: false}); this.props.navigation.goBack(); }} style={[styles.subContainers, { paddingBottom: 20, flexDirection: 'row' }]}>
                                    <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 60, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Okay</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
                {
                    this.state.loader ?
                        <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                {this.state.mode == 'default' &&
                                    <Header goBack={() => this.props.navigation.navigate('AddActivity1')}backgroundcolor={'#FFFFFF'} headerTitle={this.state.headDate} leftButton={true} leftButtonName={'plus'} leftButtonColor={'#454545'} showNext={false} rightButton={true} rightButtonName={'menu'} headColor={'#454545'} navigation={this.props.navigation} rightButtonFunc={this.addEvent} />
                                }
                                {this.state.mode == 'add-activity' &&
                                    <Header goBack={()=>this.props.navigation.goBack()}  backgroundcolor={'#FFFFFF'} headerTitle={'ADD ACTIVITY TO YOUR CHALLENGE'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} rightButtonName={'plus'} headColor={'#454545'} navigation={this.props.navigation} rightButtonFunc={this.addEvent} />
                                }
                            </View>

                            <View style={{ flex: 8 }}>

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
                                    onDayPress={(day) => {console.log('day pressed'); this.dateSelected(day); }}
                                    // callback that gets called when day changes while scrolling agenda list
                                    onDayChange={(day) => { console.log('day changed');  }}
                                    // initially selected day
                                    current={new Date()}
                                    selected={moment().format('YYYY-MM-DD')}
                                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                    minDate={startDate.format('YYYY-MM-DD')}
                                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                    maxDate={endDate.format('YYYY-MM-DD')}
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
                                    // renderKnob={() => { return (<View ><Icon name='little_arrow' size={80} color="#838383" /></View>); }}
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
        height: 70,
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
        height: 70,
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
    const activityData = state.getData.activityData || {};
    const calendarData = state.getData.calendarData || {};
    const addEventResponse = state.addUser.addEventResponse || {};
    return {
        activityData,
        calendarData,
        addEventResponse,
    }
}, dispatch => {
    return bindActionCreators({ getActivity: getActivity, addActivity: addActivity, getCalendarData: getCalendarData, removeActivity }, dispatch)
}
)(CalendarView);
