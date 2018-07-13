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
        this.props.autoSignin(JSON.parse('{"customer":{"id":"99","id_shop":"1","id_shop_group":"1","secure_key":"91239ec59c1c87b67da3733709a6155c","note":null,"id_gender":"0","id_default_group":"3","id_lang":"2","lastname":"app","firstname":"test","birthday":"0000-00-00","email":"testapprocco@roccomedia.de","newsletter":"0","ip_registration_newsletter":null,"newsletter_date_add":"0000-00-00 00:00:00","optin":"0","website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":"0.000000","show_public_prices":"0","id_risk":"0","max_payment_days":"0","last_passwd_gen":"2018-07-11 09:56:13","active":"1","is_guest":"0","deleted":"0","date_add":"2018-07-11 15:56:13","date_upd":"2018-07-11 15:56:13","years":null,"days":null,"months":null,"geoloc_id_country":null,"geoloc_id_state":null,"geoloc_postcode":null,"logged":0,"id_guest":null,"groupBox":null,"activated":"0","image":null,"goal":null,"weight":null,"id_shop_list":null,"force_id":false,"language":"Deutsch (German)","img_dir":"https://spano24.com/fitnessportal/img/customers/"},"hasError":false,"errors":[]}'));

        this.props.navigation.navigate('OverviewStatus');
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
                                <Header goBack={this.props.navigation.goBack} backgroundcolor={'#454545'} headerTitle={'Welcome'} leftButton={false} leftButtonName={'close'} leftButtonColor={'#FFFFFF'} showNext={false} rightButton={false} headColor={'#FFFFFF'} verifyUser={this.verifyUser} />
                            </View>

                            <View style={{flex: 9, backgroundColor: '#454545', padding: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={[styles.textStyle, {marginBottom: 10, textAlign: 'center'}]}>Headline</Text>
                                <Text style={[styles.textStyle, {marginBottom: 10, textAlign: 'center'}]}>Dieser Text enthält in kompakter Form die Nutzenargumentation.</Text>
                                <Text style={[styles.textStyle, {marginBottom: 100, textAlign: 'center'}]}>Locavore palo santo YOLO blue bottle. Kickstarter glossier retro godard, chillwave unicorn celiac blog. Four dollar toast ethical four loko hammock jianbing offal</Text>

                                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginBottom: 10 }} onPress={()=> this.props.navigation.navigate('SignUp')}>
                                    <View style={{ backgroundColor: '#454545', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#FFFFFF', borderWidth: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Create Account</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginBottom: 50 }} onPress={()=> this.props.navigation.navigate('SignInEmail')}>
                                    <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#FFFFFF', borderWidth: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#ae0069' }}>Sign In</Text>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.props.navigation.navigate('SignInEmail')}>
                                    <View style={{ backgroundColor: '#454545', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#454545', borderWidth: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Skip</Text>
                                    </View>
                                </TouchableOpacity>
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