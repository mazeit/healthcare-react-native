import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

const profileSubHeading = ['My profile information', 'My notification', 'My tracking settings', 'Invite my friends', 'Terms of use', 'Privacy policy', 'Helf & FAQ', 'About us'];

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.profilePicture}>
                    <ImageBackground style={styles.profilePictureBlur} source={require('../../assets/images/profilePicture.png')} blurRadius={15}>
                        <View style={{ width: 133, height: 133, borderWidth: 0.5, borderColor: '#FFFFFF', borderRadius: 133, overflow: 'hidden', marginBottom: 20 }}>
                            <Image source={require('../../assets/images/profilePicture.png')} style={{ width: 133, height: 133, }} />
                        </View>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#FFFFFF' }}>Vivivan</Text>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#FFFFFF' }}>Undacable</Text>
                    </ImageBackground>
                </View>

                <ScrollView style={styles.myProfile} showsVerticalScrollIndicator={false}>
                    {
                        profileSubHeading.map((item, i) =>

                            <TouchableOpacity key={i} style={styles.profileContent}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>{item}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                        <Image style={{ width: 56, height: 56, transform: [{ rotateZ: '-90deg' }] }} source={require('../../assets/icons/little_arrow_grey.png')} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10, backgroundColor: '#FFFFFF', }}>
                        <TouchableOpacity style={{ flex: 1, marginTop: 20, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Sign out</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 14, color: '#959595', marginBottom: 20, marginTop: 10 }}>App Version 1.0</Text>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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