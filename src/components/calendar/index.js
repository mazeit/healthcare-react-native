import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { getCalendarData } from '../../actions/index'
import { bindActionCreators } from 'redux'


import Header from '../Header';
import Footer from './Footer';


import Swipeout from 'react-native-swipeout';
import Calendar from './Calendar';


const { height, width } = Dimensions.get('window');
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            headDate: new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear(),
            firstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(),
            weeklyCalendar: true,
            rotate: '180deg',
            user_id: this.props.user_id,
            calendarData: [],
            selectedDate: new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear(),
        };
        this.dateSelected = this.dateSelected.bind(this);
    }

    componentDidMount() {
        this.props.getCalendarData(this.state.user_id);
    }


    componentWillReceiveProps (nextProps) {
        console.log('......NEXTPROPS.....',nextProps)
        this.setState({calendarData: nextProps.calendarData.events.filter((item) => new Date(item.start).getMonth() === this.state.today.getMonth())})
        
    }

    dateSelected( date ) {
        this.setState({selectedDate: new Date(date).getDate() + ' ' + month[new Date(date).getMonth()] + ' ' + new Date(date).getFullYear()})
    }

    render() {
        
        const currentDateData = this.state.calendarData.filter((item) => {
                let itemDate = new Date(item.start).getDate() + ' ' + month[new Date(item.start).getMonth()] + ' ' + new Date(item.start).getFullYear();
                return itemDate === this.state.selectedDate;
        });

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

                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.navigate('AddActivity1')} backgroundcolor={'#FFFFFF'} headerTitle={this.state.headDate} leftButton={true} leftButtonName={'plus'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 8 }}>
                    <Calendar today={this.state.today} firstDay={this.state.firstDay} calendarData={this.state.calendarData} dateSelected={this.dateSelected}/>

                    <ScrollView style={styles.container}>
                        {
                            currentDateData.map((item, i) =>
                                <View key={i} style={{ flex: 1, justifyContent: 'center' }}>

                                    <Swipeout {...swipeSettings} style={styles.SwiperContainer}>
                                        <View style={styles.challangeTab} >
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity')}>
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
                            )
                        }

                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <Footer navigation={this.props.navigation} />
                </View>

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
    const user_id = state.validUser.user.id || '';
    const calendarData = state.getData.calendarData || {};
    return {
        user_id,
        calendarData
        
    }
}, dispatch => {
    return bindActionCreators({ getCalendarData: getCalendarData }, dispatch)
}
)(CalendarView);
