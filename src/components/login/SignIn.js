import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { verifyEmail } from '../../actions/index'
import { verifyPassword } from '../../actions/index'
import SignInEmail from './SignInEmail';
import SignInPassword from './SignInPassword';
import PasswordForgotten from './PasswordForgotten';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'signin',
            backgroundcolor: '#AE0069',
            headerTitle: 'SIGN IN',
            activeUser: "",
            errorMsgEmail: '',
            errorMgs: '',
            authorizedPassword: '',
            password: '',
            invalidPassword: false,
            showNext: true,
            wrongPassword: '',
            wrongPasswordMsg: '',


        }
        this.goToNextPage = this.goToNextPage.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.setInput = this.setInput.bind(this);
    }
    componentWillReceiveProps(nextProps) {

        switch (this.state.page) {
            case 'signin':
                if(!nextProps.validEmail.hasError) {
                    this.setState({ errorMsgEmail: '', errorMgs: '', page: 'password', backgroundcolor: '#D4B870' });
                } else {
                    this.setState({ errorMsgEmail: 'Email address', errorMgs: 'This email address is not registered. Please try again.' });
                }
                break;
            case 'password':
                if(!nextProps.validPassword.hasError) {
                    this.setState({ wrongPassword: '', wrongPasswordMsg: ''});
                    this.props.navigation.navigate('ContentOverviewContainer');
                } else {
                    this.setState({  wrongPassword: 'Password', wrongPasswordMsg: 'This password is not correct, Please try again.' });
                }
                break;
            default:
                break;
        }
        
    }

    setInput(input) {
        switch (this.state.page) {
            case 'signin':
                this.setState({ activeUser: input })
                break;
            case 'password':
                this.setState({ password: input })
                break;
            default:
                break;
        }
    }

    goToNextPage() {

        switch (this.state.page) {

                case 'signin':
                    this.props.verifyEmail(this.state.activeUser)
                    return ;
    
                case 'password':
                    this.props.verifyPassword(this.state.activeUser,this.state.password)
                    return;
                    if (this.state.authorizedPassword === this.state.password && this.state.authorizedPassword !== '') {
                        
                    } else {
                        
                    }
    
            }
        
           

    }

    forgotPassword() {
        this.setState({ invalidPassword: false, page: 'passwordForgoten', headerTitle: 'REQUEST A NEW PASSWORD', backgroundcolor: '#8ACE9180', authorizedPassword: '', showNext: false });
        return;
    }


    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')}>
                <KeyboardAvoidingView style={[styles.signInContainer, { backgroundColor: this.state.backgroundcolor }]}>
                    <View style={styles.header}>
                        <TouchableHighlight onPress={() => this.props.goToSignIn()} >
                             <Image style={{ width: 15, height: 15, }} source={require('../../../assets/icons/close.png')} />
                        </TouchableHighlight>
                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff' }}>{this.state.headerTitle}</Text>
                        {
                            this.state.showNext && <Text onPress={() => this.goToNextPage()} style={{ fontFamily: 'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff' }}>Next</Text>
                        }
                    </View>
                    <View style={styles.componentContainer}>
                    
                        {
                            (() => {
                                switch (this.state.page) {
                                    case 'signin':
                                        return <SignInEmail goToNextPage={this.goToNextPage} setInput={this.setInput} errorMsgEmail={this.state.errorMsgEmail} errorMgs={this.state.errorMgs}/>;
                                    case 'password':
                                        return <SignInPassword goToNextPage={this.goToNextPage} navigation={ this.props.navigation } forgotPassword={ this.forgotPassword } setInput={this.setInput} wrongPassword={ this.state.wrongPassword } wrongPasswordMsg={ this.state.wrongPasswordMsg }/>;
                                    case 'passwordForgoten':
                                        return <PasswordForgotten />;
                                    default:
                                        return null;
                                }
                            })()
                        }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        justifyContent: 'center',
        opacity: 0.8,
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    header: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    componentContainer: {
        flex: 9,
    },
});


export default connect(state => {
    const validEmail = state.validUser.validEmail || {};
    const validPassword = state.validUser.validPassword || {};
    return {
        validEmail,
        validPassword
    }
}, dispatch => {
    return bindActionCreators({ verifyEmail: verifyEmail , verifyPassword : verifyPassword }, dispatch)
}
)(SignIn);