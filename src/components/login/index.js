import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, View, Dimensions, Text, ImageBackground } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Home from './Home.js';
import Loader from '../Loader';

import { autoSignin } from '../../actions/index';

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
    renderPage(image, index) {
        return (
            <Home key={index}/>
        );
    }

    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/home.png')} onLoad={() => this.onLoad()}>
                {this.state.loader && <View style={{height: height, width: BannerWidth}}><Loader/></View>}
                <View style={styles.container}>
                    <Carousel
                        autoplay={false}
                        loop={false}
                        index={0}
                        width={BannerWidth}
                        onPageChanged={(index) => { if(index === 2) this.setState({introText: 'Continue'}); else {this.setState({introText: 'Skip Intro'})} }}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                    <View style={styles.skipIntro}>
                        <Text onPress={() => this.props.navigation.navigate('SignInEmail') } style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.introText}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    skipIntro: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%', 
    },
});


export default connect(state => {
    return {
    }
}, dispatch => {
    return bindActionCreators({ autoSignin: autoSignin }, dispatch)
}
)(HomeInitial);