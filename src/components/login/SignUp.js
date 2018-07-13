import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import ShakingText from 'react-native-shaking-text';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Header from '../Header';
import { addNewUser } from '../../actions/index';
import LoaderWait from '../LoaderWait';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userPassword: '',
            errorMsgFirstName: '',
            errorTextFirstName: '',
            errorMsgLastName: '',
            errorTextLastName: '',
            errorMsgEmail: '',
            errorTextEmail: '',
            errorMsgPassword: '',
            errorTextPassword: '',
            userAlreadyRegistered: '',
            registrationSuccessful: false,
            loader: false,
        };
        this.submitForm = this.submitForm.bind(this);
        this.verifyFirstName = this.verifyFirstName.bind(this);
        this.verifyLastName = this.verifyLastName.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
    }
    // componentWillMount () {
    //     this.props.clearSigninData();
    // }
    componentWillReceiveProps(nextProps) {
        
        if (nextProps.addUserSuccess.hasError) {
            this.setState({ loader: false, userAlreadyRegistered: nextProps.addUserSuccess.errors[0] });
            return;
        } else {
            this.setState({ loader: false, registrationSuccessful: true })
            return;
        }
    }

    verifyFirstName() {
        if (this.state.userFirstName === '') {
            this.setState({ errorMsgFirstName: 'First Name', errorTextFirstName: 'First name can not be blank' });
        }
        else {
            this.setState({ errorMsgFirstName: '', errorTextFirstName: '' });
        }
    }

    verifyLastName() {
        if (this.state.userLastName === '') {
            this.setState({ errorMsgLastName: 'Last Name', errorTextLastName: 'Last name can not be blank' });
        }
        else {
            this.setState({ errorMsgLastName: '', errorTextLastName: '' });
        }
    }

    verifyEmail() {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.userEmail === '') {
            this.setState({ errorMsgEmail: 'Email', errorTextEmail: 'Email can not be blank' });
        } else if (!re.test(this.state.userEmail)) {
            this.setState({ errorMsgEmail: 'Email', errorTextEmail: 'Please enter a valid email address' })
        } else {
            this.setState({ errorMsgEmail: '', errorTextEmail: '' });
        }
    }

    submitForm() {

        if (this.state.registrationSuccessful === true) {
            this.props.navigation.navigate('SignInEmail');
        } else {
            if (this.state.userPassword === '') {
                this.setState({ errorMsgPassword: 'Password', errorTextPassword: 'Password can not be blank' });
                return;
            }

            else {
                this.setState({ loader: true });
                this.props.addNewUser(this.state.userEmail, this.state.userPassword, this.state.userFirstName, this.state.userLastName);
                return;
            }
        }
    }

    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')} onLoad={() => this.setState({ loader: false })}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#AE0069', opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={this.props.navigation.goBack} backgroundcolor={'#AE0069'} headerTitle={'REGISTER'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#FFFFFF'} showNext={false} rightButton={false} headColor={'#FFFFFF'} />
                            </View>

                            <KeyboardAvoidingView style={styles.email}>
                                {
                                    this.state.registrationSuccessful ?
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 24, color: '#FFFFFF', textAlign: 'center' }}>
                                                Registration Successful
                                            </Text>
                                        </View> :
                                        <View style={styles.inputEmailContainer}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#ffffff' }}>
                                                    {this.state.userAlreadyRegistered}
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>
                                                    {this.state.errorMsgFirstName}
                                                </ShakingText>

                                                <TextInput onChangeText={(text) => this.setState({ userFirstName: text })} underlineColorAndroid='rgba(0,0,0,0)' style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='First name' placeholderTextColor={'#ECA1C9'} autoCapitalize='none' autoCorrect={false} autoFocus={true} enablesReturnKeyAutomatically={true} onBlur={() => this.verifyFirstName()} />

                                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>
                                                    {this.state.errorTextFirstName}
                                                </ShakingText>
                                            </View>

                                            <View style={{ flex: 1 }}>
                                                <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>
                                                    {this.state.errorMsgLastName}
                                                </ShakingText>

                                                <TextInput onChangeText={(text) => this.setState({ userLastName: text })} underlineColorAndroid='rgba(0,0,0,0)' style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Last name' placeholderTextColor={'#ECA1C9'} autoCapitalize='none' autoCorrect={false} autoFocus={false} enablesReturnKeyAutomatically={true} onBlur={() => this.verifyLastName()} />

                                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>
                                                    {this.state.errorTextLastName}
                                                </ShakingText>
                                            </View>

                                            <View style={{ flex: 1 }}>
                                                <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>
                                                    {this.state.errorMsgEmail}
                                                </ShakingText>

                                                <TextInput onChangeText={(text) => this.setState({ userEmail: text })} underlineColorAndroid='rgba(0,0,0,0)' style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Email address' placeholderTextColor={'#ECA1C9'} autoCapitalize='none' autoCorrect={false} autoFocus={false} enablesReturnKeyAutomatically={true} onBlur={() => this.verifyEmail()} />

                                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>
                                                    {this.state.errorTextEmail}
                                                </ShakingText>
                                            </View>

                                            <View style={{ flex: 1 }}>
                                                <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>
                                                    {this.state.errorMsgPassword}
                                                </ShakingText>

                                                <TextInput onChangeText={(text) => this.setState({ userPassword: text })} underlineColorAndroid='rgba(0,0,0,0)' style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Password' secureTextEntry={true} placeholderTextColor={'#ECA1C9'} autoCapitalize='none' autoCorrect={false} autoFocus={false} enablesReturnKeyAutomatically={true} onSubmitEditing={() => this.submitForm()} />

                                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>
                                                    {this.state.errorTextPassword}
                                                </ShakingText>
                                            </View>

                                        </View>
                                }
                                <View style={styles.passwordManager}>
                                    <TouchableOpacity style={styles.button} onPress={() => this.submitForm()}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image style={{ width: 17, height: 17, marginTop: 2 }} source={require('../../../assets/icons/1password_icon.png')} />
                                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginLeft: 5 }}>
                                                {this.state.registrationSuccessful ? 'Log In' : 'Submit'}
                                            </Text>
                                        </View>
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
    email: {
        flex: 9,
        justifyContent: 'center',
        backgroundColor: "#AE0069",
        opacity: 0.8
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    inputEmailContainer: {
        flex: 9,
        marginLeft: 20,
        marginTop: 20,
        justifyContent: 'center',
    },
    inputEmail: {
        width: '90%',
        // height: 40,
        color: '#ECA1C9',
        fontSize: 20,
    },
    passwordManager: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#FFFFFF20',
        padding: 5,
        borderRadius: 20,
    },
});

export default connect(state => {
    const addUserSuccess = state.addUser.addUserSuccess || {};
    return {
        addUserSuccess,
    }
}, dispatch => {
    return bindActionCreators({ addNewUser: addNewUser }, dispatch)
}
)(SignUp);