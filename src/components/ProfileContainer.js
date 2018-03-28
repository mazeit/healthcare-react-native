import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions } from 'react-native';
import ProfileInformation from './ProfileInformation'
import ProfileNotification from './ProfileNotification'
import TrackingSetting from './TrackingSetting'
import TermsOfUse from './TermsOfUse'
import HelpFaq from './HelpFaq'
import InviteMyFriends from './InviteMyFriends'
import InviteMyFriendsList from './InviteMyFriendsList'
import FaqAnswer from './FaqAnswer'

const { height, width } = Dimensions.get('window');

export default class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: 'HELP & FAQ'
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Image source={require('../../assets/icons/back_grey.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
                    </View>
                    <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#454545' }}>{this.state.heading}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Image source={require('../../assets/icons/menu.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
                    </View>
                </View>

                <View style={{ flex: 9 }}>
                    <FaqAnswer />
                </View>

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
});