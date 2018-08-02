import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, View, Dimensions, Text, ImageBackground, Platform } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Home from './Home.js';
import Loader from '../Loader';

import { autoSignin, getActivity, getRecipe, getCurrentUser, getNotificationInfo, setNotificationData } from '../../actions/index';

import Header from '../Header';
const BannerWidth = Dimensions.get('window').width;
const {height} = Dimensions.get('window')
const images = [
    "http://xxx.com/1.png",
    "http://xxx.com/2.png",
    "http://xxx.com/3.png"
];
var DeviceInformation = require('react-native-device-info');

let backGround = '';
import * as auth from "../../utils/auth";

class HomeInitial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            introText: 'Skip Intro'
        };
        this.onSkipIntro = this.onSkipIntro.bind(this);
    }

    componentDidMount () {
        // this.props.autoSignin(JSON.parse('{"customer":{"id":"99","id_shop":"1","id_shop_group":"1","secure_key":"91239ec59c1c87b67da3733709a6155c","note":null,"id_gender":"0","id_default_group":"3","id_lang":"2","lastname":"app","firstname":"test","birthday":"0000-00-00","email":"testapprocco@roccomedia.de","newsletter":"0","ip_registration_newsletter":null,"newsletter_date_add":"0000-00-00 00:00:00","optin":"0","website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":"0.000000","show_public_prices":"0","id_risk":"0","max_payment_days":"0","last_passwd_gen":"2018-07-11 09:56:13","active":"1","is_guest":"0","deleted":"0","date_add":"2018-07-11 15:56:13","date_upd":"2018-07-11 15:56:13","years":null,"days":null,"months":null,"geoloc_id_country":null,"geoloc_id_state":null,"geoloc_postcode":null,"logged":0,"id_guest":null,"groupBox":null,"activated":"0","image":null,"goal":null,"weight":null,"id_shop_list":null,"force_id":false,"language":"Deutsch (German)","img_dir":"https://spano24.com/fitnessportal/img/customers/"},"hasError":false,"errors":[]}'));
        // this.props.autoSignin(JSON.parse('{"customer":{"id":"91","id_shop":"1","id_shop_group":"1","secure_key":"8bef682395889d3816bbd4ef065c0a6d","note":"Spinner","id_gender":"0","id_default_group":"3","id_lang":"2","lastname":"test","firstname":"Tobias","birthday":"0000-00-00","email":"tobias@roccomedia.de","newsletter":"0","ip_registration_newsletter":null,"newsletter_date_add":"0000-00-00 00:00:00","optin":"0","website":null,"company":null,"siret":null,"ape":null,"outstanding_allow_amount":"0.000000","show_public_prices":"0","id_risk":"0","max_payment_days":"0","last_passwd_gen":"2018-07-05 05:26:43","active":"1","is_guest":"0","deleted":"0","date_add":"2018-07-05 11:26:43","date_upd":"2018-07-18 16:38:23","years":null,"days":null,"months":null,"geoloc_id_country":null,"geoloc_id_state":null,"geoloc_postcode":null,"logged":0,"id_guest":null,"groupBox":null,"activated":"0","image":null,"goal":null,"weight":null,"id_shop_list":null,"force_id":false,"language":"Deutsch (German)","img_dir":""},"hasError":false,"errors":[]}'));

        var c1 = {"id_content":31,"file_id":"PjrsQ3kh","pillar":"activity","rezept":"0","rezept_video":0,"favorite":false,"page_url":"https:\/\/spano24.com\/fitnessportal\/de\/module\/roccfitnessportal\/contentdetail?content=31&type=activity","name":"Mobiler R\u00fccken - Workout 9","description":""};
        var c2 = {"id_content":98,"file_id":"SMaedwwZ","pillar":"nutrition","rezept":"1","rezept_video":"328","favorite":false,"rezept_url":"https:\/\/spano24.com\/fitnessportal\/rezeptideen\/328-pecannuss-rosmarin-muffins-auf-avocado-hummus?type=activity","page_url":"https:\/\/spano24.com\/fitnessportal\/de\/module\/roccfitnessportal\/contentdetail?content=98&type=activity","name":"Pekannuss-Rosmarin-Muffins auf Avocadohummus","description":""};
        
        // let content = c1;
        // this.setState({loader: true});
        // if (content.rezept == 0) {

        //     this.props.getActivity(content.id_content)
        //     .then((resultObj)=>{
        //         console.log(resultObj);
        //         if (!resultObj.hasError) {
        //             this.setState({loader: false, resultObj: resultObj.content});

        //             this.props.navigation.navigate('Activity',  {activityType: this.state.activityType, data: resultObj.content})
        //         }
        //     });
        // } else {

        //     this.props.getRecipe(content.rezept_video)
        //     .then((resultObj)=>{
        //         console.log(resultObj);
        //         if (!resultObj.hasError){
        //             this.setState({loader: false, resultObj: resultObj.recipe});
        //             this.props.navigation.navigate('Recipe',  {activityType: this.state.activityType, data: resultObj.recipe})

        //         }
        //     });
        // }

        
        // this.props.navigation.navigate('WelcomeScreen', { id_content: 12, mode : 'add-activity' })
        // this.props.navigation.navigate('ContentOverview', {})

        // this.props.navigation.navigate('InviteMyFriends', {})
        // this.props.navigation.navigate('InviteMyFriendsList', {invitedFriend: '3@c.com'})
        // this.props.navigation.navigate('OverviewStatus', {})
        // this.props.navigation.navigate('QuestionStep', {data: JSON.parse('{"key":"nutrition","icon":"nutrition","color":"#8ACE91","text":"Nutrition","back":"#e1f2e2","img":7,"id_question_category":"1","name":"Nutrition","short_description":"sss","description":"ssss","answes_given":1,"total_question":2}')})

        // this.props.navigation.navigate('Tracker', {})
        // this.props.navigation.navigate('BlogStack', {})
        // this.props.navigation.navigate('Article', {article: JSON.parse(`{"name":"What is Lorem Ipsum?","reading_time":"12 Mins","active":"1","feature":"1","id_lfmagazine_category":"2","id_lfmagazine_author":"2","position":"0","short_description":"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500","description": "Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.","link_rewrite":"what-is-lorem-ipsum","date_add":"2018-04-18 13:46:14","date_upd":"2018-04-25 08:34:18","id_image":1,"id":1,"id_shop_list":null,"force_id":false,"id_post":"1"}`)})
        
        // this.props.navigation.navigate('CoachProfile', {id_author: 2})

        // this.props.navigation.navigate('ImportantNotification', {});
        
        auth.isSignedIn().then(json=>{
            try {

                let obj = JSON.parse(json);
                if (obj && !obj.hasError) {
                    this.props.autoSignin(obj);  
                    Promise.all([this.props.getCurrentUser(), this.props.getNotificationInfo()])
                    .then(res=>{
                        this.props.navigation.navigate('ImportantNotification', {});   
                        this.setState({loader: false});

                        const uniqueId = DeviceInformation.getUniqueID();
                        this.props.setNotificationData(uniqueId, Platform.OS);
                    });
                } else {
                    this.setState({loader: false});
                }

            } catch (e) {
                throw e;
            }
            
        })
    }

    onLoad () {
        
    }

    renderPage(image, index) {
        return (
            <Home key={index}/>
        );
    }

    // checkLoggedInAndNavigate(screen) {
    // }

    onSkipIntro() {
        auth.isSignedIn().then(json=>{
            try {

                let obj = JSON.parse(json);
                if (obj && !obj.hasError) {
                    this.props.autoSignin(obj);  
                    Promise.all([this.props.getCurrentUser(), this.props.getNotificationInfo()])
                    .then(res=>{
                        this.props.navigation.navigate('WelcomeScreen', {});   
                        this.setState({loader: false});

                        const uniqueId = DeviceInfo.getUniqueID();
                        this.props.setNotificationData(uniqueId, Platform.OS);
                    });
                } else {
                    this.props.navigation.navigate('SignInEmail', {});   
                }

            } catch (e) {
                throw e;
                this.props.navigation.navigate('SignInEmail', {});   
            }
            
        }).catch(err=>{
            this.props.navigation.navigate('SignInEmail', {});   
        })
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
                        <Text onPress={() => this.onSkipIntro()} style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.introText}</Text>
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
    return bindActionCreators({ autoSignin: autoSignin, getActivity, getRecipe, getCurrentUser, getNotificationInfo, setNotificationData }, dispatch)
}
)(HomeInitial);