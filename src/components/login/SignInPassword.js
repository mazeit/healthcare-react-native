import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ShakingText from 'react-native-shaking-text';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Header from '../Header';
import { verifyPassword } from '../../actions/index';
import LoaderWait from '../LoaderWait';

class SignInPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activUserPassword: "",
            wrongPassword: '',
            wrongPasswordMsg: '',
            loader: true,
        };
        this.verifyUser = this.verifyUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.validPassword.hasError === false) {
            this.setState({ wrongPassword: '', wrongPasswordMsg: '' });
            this.props.navigation.navigate('WelcomeScreen');
        } else if( nextProps.validPassword.hasError === true) {
            this.setState({ wrongPassword: 'Password', wrongPasswordMsg: 'This password is not correct, Please try again.' });
        }

        this.setState({ loader: false });
    }

    verifyUser() {
        this.setState({ loader: true });
        this.props.verifyPassword(this.props.userEmail, this.state.activUserPassword);
    }


    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')} onLoad={() => this.setState({ loader: false })}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#D4B870', opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                            <Header goBack={this.props.navigation.goBack} backgroundcolor={'#D4B870'} headerTitle={'SIGN IN'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#FFFFFF'} showNext={true} rightButton={false} headColor={'#FFFFFF'} verifyUser={this.verifyUser} />
                            </View>
                            <KeyboardAvoidingView style={styles.password}>

                                <View style={styles.inputPasswordContainer}>

                                    <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }} >{this.state.wrongPassword}</ShakingText>
                                    <TextInput onChangeText={(text) => this.setState({ activUserPassword: text })} style={[styles.inputPassword, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Password' secureTextEntry={true} placeholderTextColor={'#EFE1CB'} autoFocus={true} enablesReturnKeyAutomatically={true} onSubmitEditing={() => this.verifyUser()} underlineColorAndroid='rgba(0,0,0,0)' />
                                    <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>{this.state.wrongPasswordMsg}</ShakingText>

                                </View>
                                <View style={styles.forgotPassword}>
                                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('PasswordForgotten')}>
                                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff', }}>Forgot your password?</Text>
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, marginBottom: 5, width: '85%', textAlign: 'center', fontFamily: 'DINPro', fontSize: 22, color: '#ffffff' }} >Password too long? Hard to type?</Text>
                                    <Text style={{ marginTop: 5, marginBottom: 5, width: '85%', textAlign: 'center', fontFamily: 'DINPro', fontSize: 16, color: '#ffffff' }}>Stay in the flow and get a link sent to your email that’ll sign you in instantly</Text>
                                    <TouchableOpacity style={styles.linkButton}>
                                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 17, textAlign: 'center', color: '#ffffff', }}>Send flow link</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </View>
                }
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    password: {
        flex: 9,
        justifyContent: 'center',
        backgroundColor: "#D4B870",
        opacity: 0.8
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    inputPasswordContainer: {
        flex: 1,
        marginLeft: '7%',
        justifyContent: 'center',
    },
    inputPassword: {
        width: '90%',
        // height: 40,
        color: '#EFE1CB',
        fontSize: 20,
    },
    forgotPassword: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF20',
        padding: 5,
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 5,
        top: '-5%',
    },
    linkButton: {
        alignItems: 'center',
        backgroundColor: '#00000000',
        padding: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default connect(state => {
    const validPassword = state.validUser.validPassword || {};
    const userEmail = state.validUser.userEmail || '';
    return {
        validPassword,
        userEmail
    }
}, dispatch => {
    return bindActionCreators({ verifyPassword: verifyPassword }, dispatch)
}
)(SignInPassword);