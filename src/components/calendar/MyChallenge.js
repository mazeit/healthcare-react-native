import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
import AppleHealthKit from 'rn-apple-healthkit';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');

import Header from '../Header';
import Footer from './Footer';

import LoaderWait from '../LoaderWait';
// import ScrollRuler from '../SCrollRuler';

import { getMyChallenge } from '../../actions/index'
class MyChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            data: null
        };
    }

    componentDidMount() {
        this.props.getMyChallenge().then(data=>{
            if (data.hasError) {
                this.props.navigation.goBack();
            }
            this.setState({loader: false, data: data});
        })
        
    }

    componentWillMount () {
    }

    render() {
        let info = this.state.data && this.state.data.recommendations;
        let mychallenge = this.state.data && this.state.data.mychallenge;
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/mindfulness_image.png')} blurRadius={8}>

                {
                    this.state.loader ?
                    <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View> :
                    <View style={{ flex: 1 }}> 
                        <View style={{ flex: 1 }}>
                            <Header goBack={() => this.props.navigation.navigate('AddActivity1')} backgroundcolor={'#FFFFFF'} headerTitle={'MY CHALLENGE'} leftButton={false} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                        </View>
                        <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>

                            <ScrollView style={styles.trackerData}>
                                <View style={styles.menuDescription}>
                                    <View style={styles.subMenu1}>
                                        <View style={styles.daysEnergy}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{info.days}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>DAYS OF ENERGY</Text>
                                        </View>
                                        <View style={styles.videos}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{info.videos}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>VIDEOS</Text>
                                        </View>
                                        <View style={styles.recipes}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{info.recipes}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>RECIPES</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subMenu2}>
                                        <View style={styles.coachingVideos}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{info.coaching_videos}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>COACHING VIDEOS</Text>
                                        </View>
                                        <View style={styles.personalCoachingSession}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center' }}>{info.personal_session}</Text>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center' }}>PERSONAL COACHING SESSION</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.trackerDataBlock]}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 24, color: '#4A4A4A', textAlign: 'center', margin: 10 }}> 
                                    Challenge Progress</Text>
                                    


                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20}}>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <ProgressCircle
                                                percent={mychallenge.activity.total_events == 0 ? 0 : mychallenge.activity.completed / mychallenge.activity.total_events * 100}
                                                radius={40}
                                                borderWidth={4}
                                                color="#AE0069"
                                            >
                                                <Text style={{ fontSize: 18, color: '#AE0069' }}>{mychallenge.activity.total_events == 0 ? 0 : mychallenge.activity.completed / mychallenge.activity.total_events * 100}%</Text>
                                            </ProgressCircle>
                                            <Text style={{ marginTop: 9, textAlign: 'center' }}>ACTIVITY</Text>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <ProgressCircle
                                                percent={mychallenge.mindfulness.total_events == 0 ? 0 : mychallenge.mindfulness.completed / mychallenge.mindfulness.total_events * 100}
                                                radius={40}
                                                borderWidth={4}
                                                color="#D4B870"
                                            >
                                                <Text style={{ fontSize: 18, color: '#D4B870' }}>{mychallenge.mindfulness.total_events == 0 ? 0 : mychallenge.mindfulness.completed / mychallenge.mindfulness.total_events * 100}%</Text>
                                            </ProgressCircle>
                                            <Text style={{ marginTop: 9, textAlign: 'center' }}>MINDFULLNESS</Text>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <ProgressCircle
                                                percent={mychallenge.nutrition.total_events == 0 ? 0 : mychallenge.nutrition.completed / mychallenge.nutrition.total_events * 100}
                                                radius={40}
                                                borderWidth={4}
                                                color="#8ACE91"
                                            >
                                                <Text style={{ fontSize: 18, color: '#8ACE91' }}>{mychallenge.nutrition.total_events == 0 ? 0 : mychallenge.nutrition.completed / mychallenge.activity.total_events * 100}%</Text>
                                            </ProgressCircle>
                                            <Text style={{ marginTop: 9, textAlign: 'center' }}>NUTRITION</Text>
                                        </View>
                                    </View>

                                </View>

                            </ScrollView>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Footer activeTab={'MyChallenge'} navigation={this.props.navigation}/>
                        </View>
                    </View>
                }
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },

    trackerData: {
        width: width,
        flex: 1,
        backgroundColor: '#FFFFFF50',

    },
    navigatorHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        opacity: 0.8,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    trackerDataBlock: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        opacity: 0.8
    },
    informationContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    freeRecipeButton: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#4AB3E2',
        borderRadius: 20,
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
    return {
    }
}, dispatch => {
    return bindActionCreators({ getMyChallenge }, dispatch)
}
)(MyChallenge);
