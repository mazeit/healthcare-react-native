import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import { getCalendarData, getWelcome } from '../actions/index';
import LoaderWait from './LoaderWait';

const { height, width } = Dimensions.get('window');

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.user.firstname + ' ' + this.props.user.lastname,
            backgroundColor: '#AE006980',
            user_id: this.props.user.id,
            backgroundColorArray: ['#AE006980', '#D4B87080', '#8ACE9180'],
            calendarData: {},
            loader: false,
            welcome: {"challenge_name":"","days":0,"videos":0,"coaching_videos":0,"recipes":0,"personal_session":0}
        };
        this.goToCalendarStack = this.goToCalendarStack.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ backgroundColor: this.state.backgroundColorArray[Math.floor(Math.random() * 3)] }), 2000);
        this.props.getWelcome().then(res=>{
            if(!res.hasError) {
                this.setState({
                    welcome: res.welcome
                })
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        

    }

    goToCalendarStack(id) {
        this.props.navigation.navigate('CalendarStack')
    }

    render() {
        let welcome = this.state.welcome;
        return (
            <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>
                <View style={[styles.container, { backgroundColor: this.state.backgroundColor, }]}>
                    {
                        this.state.loader ?
                            <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View> :
                            <View style={{ flex: 1 }}>
                                <View style={styles.welcomeHeader}>
                                    <TouchableOpacity style={{ marginLeft: 10, marginBottom: 20, alignItems: 'flex-start', width: width - 5 }} onPress={() => this.props.navigation.navigate('ContentStack')} >
                                        <Icon name="close" size={50} style={{ marginLeft: -15 }} color="#FFFFFF" />
                                    </TouchableOpacity>
                                    <Text style={styles.headerText}>Welcome</Text>
                                    <Text style={styles.headerText}>{this.state.userName}</Text>
                                    <Text style={styles.headerText}>to your</Text>
                                    <Text style={styles.headerText}>{welcome.challenge_name}</Text>
                                    <Text style={styles.headerText}>Challenge!</Text>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center', marginTop: 30 }}>This is what is waiting for you:</Text>
                                </View>

                                <View style={styles.menuDescription}>
                                    <View style={styles.subMenu1}>
                                        <View style={styles.daysEnergy}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{welcome.days}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>DAYS OF ENERGY</Text>
                                        </View>
                                        <View style={styles.videos}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{welcome.videos}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>VIDEOS</Text>
                                        </View>
                                        <View style={styles.recipes}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{welcome.recipes}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>RECIPES</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subMenu2}>
                                        <View style={styles.coachingVideos}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{welcome.coaching_videos}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>COACHING VIDEOS</Text>
                                        </View>
                                        <View style={styles.personalCoachingSession}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{welcome.personal_session}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>PERSONAL COACHING SESSION</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.buttonNext}>
                                    <TouchableOpacity onPress={() => this.goToCalendarStack(this.state.user_id)} style={styles.challangeStartButton}>
                                        <Text style={{ color: '#AE0069', textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 17, width: '80%' }}>Start your challange now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </ImageBackground>
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-between',
        // opacity: 0.8,
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    welcomeHeader: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'DINPro-Light',
        fontSize: 22,
        color: '#ffffff'
    },
    menuDescription: {
        margin: 10,
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonNext: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subMenu1: {
        flex: 1,
        flexDirection: 'row',
    },
    subMenu2: {
        flex: 1,
        flexDirection: 'row',
    },
    daysEnergy: {
        flex: 1,
        marginRight: 1,
        marginBottom: 1,
        backgroundColor: '#AE0069',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videos: {
        flex: 1,
        marginRight: 1,
        marginLeft: 1,
        marginBottom: 1,
        backgroundColor: '#D4B870',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipes: {
        flex: 1,
        marginLeft: 1,
        marginBottom: 1,
        backgroundColor: '#8ACE91',
        alignItems: 'center',
        justifyContent: 'center'
    },
    coachingVideos: {
        flex: 1,
        marginRight: 1,
        marginTop: 1,
        backgroundColor: '#4AB3E2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    personalCoachingSession: {
        flex: 1,
        marginLeft: 1,
        marginTop: 1,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent: 'center'
    },
    challangeStartButton: {
        height: 52,
        width: 235,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 50,
    },
});


export default connect(state => {
    const user = state.validUser.user || {};
    const calendarData = state.getData.calendarData || {};

    return {
        user,
        calendarData
    }
}
    , dispatch => {
        return bindActionCreators({ getCalendarData: getCalendarData, getWelcome }, dispatch)
    }
)(WelcomeScreen);

