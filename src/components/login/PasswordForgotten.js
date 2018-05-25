import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import ShakingText from 'react-native-shaking-text';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { getNewPassword } from '../../actions/index';

import Header from '../Header';
import LoaderWait from '../LoaderWait';

class PasswordForgotten extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            errorMsgEmail: '',
            errorTextEmail: '',
            linkSent: false,
            loader: false,
        }
        this.verifyEmail = this.verifyEmail.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.forgotPasswordResponce.hasError === false) {
            this.setState({ loader: false, linkSent: true });
            return;
        } 
    }

    verifyEmail() {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.userEmail === '') {
            this.setState({ errorMsgEmail: 'Email', errorTextEmail: 'Email can not be blank' });
        } else if (!re.test(this.state.userEmail)) {
            this.setState({ errorMsgEmail: 'Email', errorTextEmail: 'Please enter a valid email address' })
        } else {
            this.setState({ errorMsgEmail: '', errorTextEmail: '', loader: true });
            this.props.getNewPassword(this.state.userEmail);
        }
    }

    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')} onLoad={() => this.setState({ loader: false })}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#8ACE91', opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={this.props.navigation.goBack} backgroundcolor={'#8ACE91'} headerTitle={'REQUEST A NEW PASSWORD'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#FFFFFF'} showNext={false} rightButton={false} headColor={'#FFFFFF'} verifyUser={this.verifyUser} />
                            </View>
                            {
                                this.state.linkSent ?
                                    <View style={styles.email}>
                                        <Text style={{fontFamily: 'DINPro-Light', fontSize: 24, color: '#FFFFFF', textAlign: 'center'}}>Sent! Check your email.</Text>
                                        <Text style={{fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF', textAlign: 'center', marginTop: 20}}>An email has been sent to {this.state.userEmail}.Please check your inbox</Text>
                                        <TouchableOpacity style={{marginTop: 50}} onPress={() => this.props.navigation.navigate('SignInEmail')}>
                                            <View style={{ backgroundColor: '#8ACE91', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#FFFFFF', borderWidth: 0.5 }}>
                                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Sign In</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> :
                                    <View style={styles.email}>
                                        <View style={styles.inputEmailContainer}>
                                            <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>
                                                {this.state.errorMsgEmail}
                                            </ShakingText>
                                            <TextInput onChangeText={(text) => this.setState({ userEmail: text })} underlineColorAndroid='rgba(0,0,0,0)' style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Enter your email address' autoCapitalize='none' autoCorrect={false} autoFocus={true} placeholderTextColor={'#C5E9D6'} underlineColorAndroid='rgba(0,0,0,0)' />
                                            <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>
                                                {this.state.errorTextEmail}
                                            </ShakingText>
                                        </View>
                                        <View style={styles.passwordManager}>
                                            <TouchableOpacity style={styles.button} onPress={() => this.verifyEmail()}>
                                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 17, textAlign: 'center', color: '#ffffff' }}>Send Link</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        </View>
                }
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
        alignItems: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    inputEmailContainer: {
        flex: 9,
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

export default connect(state => {
    const forgotPasswordResponce = state.validUser.forgotPasswordResponce || {};
    return {
        forgotPasswordResponce,
    }
}, dispatch => {
    return bindActionCreators({ getNewPassword: getNewPassword }, dispatch)
}
)(PasswordForgotten);