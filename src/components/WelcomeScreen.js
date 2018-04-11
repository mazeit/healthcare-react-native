import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';
// import { getUser } from '../actions/index'
// import { bindActionCreators } from 'redux'

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS...",this.props)
    this.state = {
        userName: this.props.navigation.state.params.user.firstname +' '+ this.props.navigation.state.params.user.lastname,
        backgroundColor: '#AE006980',
        backgroundColorArray: ['#AE006980', '#D4B87080', '#8ACE9180'],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({backgroundColor: this.state.backgroundColorArray[Math.floor(Math.random() * 3)]}),2000);
  }

  
  render() {
    return (
        <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>
            <View style={[styles.container, { backgroundColor: this.state.backgroundColor, }]}>
                <View style={styles.welcomeHeader}>
                    <TouchableHighlight style={{marginLeft: 10, marginBottom: 20}} onPress={() => this.props.navigation.navigate('ContentOverview')} >
                        <Image style={{ width: 15, height: 15, marginLeft: '-50%'}} source={require('../../assets/icons/close.png')} />
                    </TouchableHighlight>
                    <Text style={styles.headerText}>Welcome</Text>
                    <Text style={styles.headerText}>{this.state.userName}</Text>
                    <Text style={styles.headerText}>to your</Text>
                    <Text style={styles.headerText}>Challange Name</Text>
                    <Text style={styles.headerText}>Challenge!</Text>
                    <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#FFFFFF', textAlign: 'center', marginTop: 30}}>This is what is waiting for you:</Text>
                </View>

                    <View style={styles.menuDescription}>
                        <View style={styles.subMenu1}>
                            <View style={styles.daysEnergy}>
                                <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center'}}>30</Text>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>DAYS OF ENERGY</Text>
                            </View>
                            <View style={styles.videos}>
                                <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center'}}>67</Text>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>VIDEOS</Text>
                            </View>
                            <View style={styles.recipes}>
                                <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center'}}>35</Text>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>RECIPES</Text>
                            </View>
                        </View>
                        <View style={styles.subMenu2}>
                            <View style={styles.coachingVideos}>
                                <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center'}}>8</Text>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>COACHING VIDEOS</Text>
                            </View>
                            <View style={styles.personalCoachingSession}>
                                <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 64, color: '#FFFFFF', textAlign: 'center'}}>2</Text>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>PERSONAL COACHING SESSION</Text>
                            </View>
                        </View>
                    </View>
                
                <View style={styles.buttonNext}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('CalendarContainer')} style={styles.challangeStartButton}>
                        <Text style={{ color: '#AE0069', textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 17, width: '80%'}}>Start your challange now</Text>
                    </TouchableHighlight>
                </View>
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
        alignItems: 'center',
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
        fontFamily: 'DINPro',
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



