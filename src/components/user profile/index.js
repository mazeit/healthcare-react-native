import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import Header from '../Header';
import { signOut } from '../../actions/index'


const { height, width } = Dimensions.get('window');


const profileSubHeading = [
    {
        headerTittle: 'MY PROFILE',
        name: 'My profile information',
        currentComponent: 'ProfileInformation',

    },
    {
        headerTittle: 'NOTIFICATION',
        name: 'My notification',
        currentComponent: 'ProfileNotification',
    },
    {
        headerTittle: 'MY TRACKING SETTING',
        name: 'My tracking settings',
        currentComponent: 'TrackingSetting',
    },
    {
        headerTittle: 'INVITE MY FRIENDS',
        name: 'Invite my friends',
        currentComponent: 'InviteMyFriends',
    },
    {
        headerTittle: 'TERMS OF USE',
        name: 'Terms of use',
        currentComponent: 'TermsOfUse',
    },
    // {
    //     headerTittle: 'PRIVACY POLICY',
    //     name: 'Privacy policy',
    //     currentComponent: < TermsOfUse/>,
    // },
    {
        headerTittle: 'HELP & FAQ',
        name: 'Helf & FAQ',
        currentComponent: 'HelpFaq',
    },
    // {
    //     headerTittle: 'ABOUT US',
    //     name: 'About us',
    //     currentComponent: < />,
    // },
];



class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.userSignOut = this.userSignOut.bind(this);
    }

    componentDidMount() {
        // this.props.getProfileData(this.props.user.id)
    }

    userSignOut() {
        this.props.signOut();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'MY PROFILE'} leftButton={false} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <View style={styles.profilePicture}>
                        <ImageBackground style={styles.profilePictureBlur} source={{ uri: this.props.user.img_dir }} blurRadius={15}>
                            <View style={{ width: 133, height: 133, borderWidth: 0.5, borderColor: '#FFFFFF', borderRadius: 133, overflow: 'hidden', marginBottom: 20 }}>
                                <Image source={{ uri: this.props.user.img_dir }} style={{ width: 133, height: 133, }} />
                            </View>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#FFFFFF' }}>{this.props.user.firstname}</Text>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#FFFFFF' }}>{this.props.user.lastname}</Text>
                                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -20 }}>
                                    <Icon name="people" size={70} color="#454545" style={{left: 25}}/>
                                    <Icon name="people" size={70} color="#454545" />
                                    <Icon name="people" size={70} color="#454545" style={{right: 25}}/>
                                </View> */}
                        </ImageBackground>
                    </View>

                    <ScrollView style={styles.myProfile} showsVerticalScrollIndicator={false}>
                        {
                            profileSubHeading.map((item, i) => {

                                return <TouchableOpacity key={i} style={styles.profileContent} onPress={() => this.props.navigation.navigate(item.currentComponent)}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>{item.name}</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                            <Icon name="little_arrow" size={50} style={{ marginTop: 15, transform: [{ rotateZ: '-90deg' }] }} color="#454545" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            })
                        }
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10, backgroundColor: '#FFFFFF', }}>
                            <TouchableOpacity onPress={() => this.userSignOut()} style={{ flex: 1, marginTop: 20, marginBottom: 10 }}>
                                <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Sign out</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 14, color: '#959595', marginBottom: 20, marginTop: 10 }}>App Version 1.0</Text>
                        </View>
                    </ScrollView>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    profilePicture: {
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePictureBlur: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myProfile: {
        flex: 1,
        width: width - 20,
        marginBottom: 10,
    },
    profileContent: {
        flex: 1,
        height: 55,
        marginTop: 10,
        // marginRight: 5,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default connect(state => {
    const user = state.validUser.user || {};
    const profileData = state.getData.profileData || {};
    return {
        user,
        profileData,
    }
}, dispatch => {
    return bindActionCreators({ signOut: signOut }, dispatch)
})(ProfilePage);