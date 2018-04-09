import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';


import ProfilePage from './ProfilePage'
import GeneralMenu from '../GeneralMenu'
import ProfileInformation from './ProfileInformation'
import ProfileNotification from './ProfileNotification'
import TrackingSetting from './TrackingSetting'
import TermsOfUse from './TermsOfUse'
import HelpFaq from './HelpFaq'
import InviteMyFriends from './InviteMyFriends'
import InviteMyFriendsList from './InviteMyFriendsList'
import FaqAnswer from './FaqAnswer'

const dimention = Dimensions.get('window');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.animatedStart = new Animated.Value(0);
        this.animatedReverse = new Animated.Value(1);
        this.state = {
            page: 'ProfilePage',
            heading: 'MY PROFILE',
            showMenu: false,
            goBack: false,
        };
        this.showMenu = this.showMenu.bind(this)
        this.goToNext = this.goToNext.bind(this)
    }
    

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu})
    }
    
    goToNext( currentComponent, headerTittle, goBack = true ) {

        this.setState({ page: currentComponent, heading: headerTittle, goBack: goBack })

    }
    componentWillReceiveProps( nextProps ) {
        console.log('NEXTPROPS...', nextProps)
    }

    render() {

        
        
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        {
                            this.state.goBack && <TouchableOpacity onPress={ () => this.goToNext('ProfilePage', 'MY PROFILE', false)}><Image source={require('../../../assets/icons/back_grey.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} /></TouchableOpacity>
                        }
                    </View>
                    <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#454545' }}>{this.state.heading}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.showMenu()}>
                        <Image source={require('../../../assets/icons/menu.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 9 }}>
                {
                        (() => {
                            switch (this.state.page) {
                                case 'ProfilePage':
                                    return <ProfilePage navigation={this.props.navigation} goToNext={this.goToNext} />;
                                case 'ProfileInformation':
                                    return <ProfileInformation />;
                                case 'ProfileNotification':
                                    return <ProfileNotification />;
                                case 'TrackingSetting':
                                    return <TrackingSetting />;
                                case 'TermsOfUse':
                                    return <TermsOfUse />;
                                case 'HelpFaq':
                                    return <HelpFaq />;
                                case 'InviteMyFriends':
                                    return <InviteMyFriends />;
                                default:
                                    return null;
                            }
                        })()
                    }
                </View>

                {
                    this.state.showMenu &&  <View style={ styles.menuOverlay }>
                                                <GeneralMenu navigation={this.props.navigation} showMenu={this.showMenu}/>
                                            </View>
                }

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //   backgroundColor: '#F5F5F5'
    },
    header: {
        flex: 1,
        backgroundColor: '#F5F5F580',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: dimention.width,
        height: dimention.height,
    },
});