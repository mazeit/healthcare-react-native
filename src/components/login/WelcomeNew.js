import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';
import ShakingText from 'react-native-shaking-text';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Home from './Home.js';
import Loader from '../Loader';

import { autoSignin } from '../../actions/index';

import Header from '../Header';
const BannerWidth = Dimensions.get('window').width;
const {height} = Dimensions.get('window')
const images = [
    "http://xxx.com/1.png",
    "http://xxx.com/2.png",
    "http://xxx.com/3.png"
];

let backGround = '';
import * as auth from "../../utils/auth";

class HomeInitial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            introText: 'Skip Intro'
        };
        this.onLoad()
    }

    componentDidMount () {
        // auth.isSignedIn().then(json=>{
        //     // Auth signin
        // })
    }

    onLoad () {
        setTimeout( () => this.setState({loader: false}), 500);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.loader ?
                        <View style={{height: height, width: BannerWidth}}><Loader/></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={()=>this.props.navigation.navigate('CalendarStack')} backgroundcolor={'#454545'} headerTitle={'Welcome'} leftButton={false} leftButtonName={'close'} leftButtonColor={'#FFFFFF'} showNext={false} rightButton={false} headColor={'#FFFFFF'} verifyUser={this.verifyUser} />
                            </View>

                            <View style={{flex: 9, backgroundColor: '#454545', padding: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={[styles.textStyle, {marginBottom: 10, textAlign: 'center'}]}>Headline</Text>
                                <Text style={[styles.textStyle, {marginBottom: 10, textAlign: 'center'}]}>Dieser Text enthält in kompakter Form die Nutzenargumentation.</Text>
                                <Text style={[styles.textStyle, {marginBottom: 100, textAlign: 'center'}]}>Locavore palo santo YOLO blue bottle. Kickstarter glossier retro godard, chillwave unicorn celiac blog. Four dollar toast ethical four loko hammock jianbing offal</Text>

                                {/*<TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginBottom: 10 }} onPress={()=> this.props.navigation.navigate('SignUp')}>
                                    <View style={{ backgroundColor: '#454545', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#FFFFFF', borderWidth: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Create Account</Text>
                                    </View>
                                </TouchableOpacity>*/}

                                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginBottom: 50 }} onPress={()=> this.props.navigation.navigate('SignInEmail')}>
                                    <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#FFFFFF', borderWidth: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#ae0069' }}>Sign In</Text>
                                    </View>
                                </TouchableOpacity>


                                {/*<TouchableOpacity style={{alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.props.navigation.navigate('SignInEmail')}>
                                    <View style={{ backgroundColor: '#454545', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#454545', borderWidth: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Skip</Text>
                                    </View>
                                </TouchableOpacity>*/}
                            </View>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'DINPro-Light',

    }
});


export default connect(state => {
    return {
    }
}, dispatch => {
    return bindActionCreators({ autoSignin: autoSignin }, dispatch)
}
)(HomeInitial);