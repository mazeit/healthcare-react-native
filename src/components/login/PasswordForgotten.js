import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';

import Header from '../Header';
import LoaderWait from '../LoaderWait';

export default class PasswordForgotten extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
        }
    }



    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')} onLoad={() => this.setState({ loader: false })}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#8ACE91'} headerTitle={'SIGN IN'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#FFFFFF'} showNext={false} rightButton={false} headColor={'#FFFFFF'} verifyUser={this.verifyUser} />
                </View>
                <View style={styles.email}>
                    <View style={styles.inputEmailContainer}>
                        <TextInput style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Enter your email address' placeholderTextColor={'#C5E9D6'} underlineColorAndroid='rgba(0,0,0,0)' />
                    </View>
                    <View style={styles.passwordManager}>
                        <TouchableHighlight style={styles.button}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 17, textAlign: 'center', color: '#ffffff' }}>Send Link</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    email: {
        flex: 9,
        backgroundColor: '#8ACE91',
        opacity: 0.8,
        justifyContent: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    inputEmailContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        width: '90%',
        // height: 40,
        color: '#C5E9D6',
        fontSize: 20,
    },
    header: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    passwordManager: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00000000',
        padding: 5,
        borderColor: "#ffffff",
        borderRadius: 20,
        borderWidth: 1,
    },
});