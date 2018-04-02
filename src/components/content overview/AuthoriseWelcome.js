import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';
// import { getUser } from '../actions/index'
// import { bindActionCreators } from 'redux'

export default class AuthoriseWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        backgroundColor: '#AE006980',
        backgroundColorArray: ['#AE006980', '#D4B87080', '#8ACE9180'],
    };
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({backgroundColor: this.state.backgroundColorArray[Math.floor(Math.random() * 3)]}),2000);
  }


  navigate(name) {
    this.props.navigator.push({
      name,
    })
  }
  
  render() {
    return (
        <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>
        <View style={[styles.container, { backgroundColor: this.state.backgroundColor, }]}>
            <View style={styles.welcomeHeader}>
                <TouchableHighlight onPress={() => this.navigate('homePage')} >
                    <Image style={{ width: 40, height: 40, marginLeft: '-50%'}} source={require('../../assets/icons/close.png')} />
                </TouchableHighlight>
                <Text style={styles.headerText}>Welcome</Text>
                <Text style={styles.headerText}>User</Text>
                <Text style={styles.headerText}>Challange Name</Text>
                <Text style={styles.headerText}>Challenge!</Text>
            </View>

                <View style={styles.menuDescription}>
                    <View style={styles.subMenu1}>
                        <View style={styles.daysEnergy}></View>
                        <View style={styles.videos}></View>
                        <View style={styles.recipes}></View>
                    </View>
                    <View style={styles.subMenu2}>
                        <View style={styles.coachingVideos}></View>
                        <View style={styles.personalCoachingSession}></View>
                    </View>
                </View>
            
            <View style={styles.buttonNext}>
                <TouchableHighlight style={styles.challangeStartButton}>
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
        justifyContent: 'center'
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



