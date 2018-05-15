import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import ShakingText from 'react-native-shaking-text';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Header from '../Header';
import { verifyEmail } from '../../actions/index';
import LoaderWait from '../LoaderWait';

class SignInEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activUserEmail: "",
            errorMsgEmail: '',
            errorMgs: '',
            loader: false,
        };
        this.verifyUser = this.verifyUser.bind(this);
    }
    // componentDidMount () {
    //     this.setState({loader:true});
    // }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.validEmail.hasError) {
            this.setState({ errorMsgEmail: '', errorMgs: '', });
            this.props.navigation.navigate('SignInPassword');
        } else {
            this.setState({ errorMsgEmail: 'Email address', errorMgs: 'This email address is not registered. Please try again.' });
        }

        this.setState({ loader: false });
    }

    verifyUser() {
        this.setState({ loader: true });
        this.props.verifyEmail(this.state.activUserEmail);
    }

    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/homeBlur.png')} onLoad={() => this.setState({ loader: false })}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#AE0069', opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={this.props.navigation.goBack} backgroundcolor={'#AE0069'} headerTitle={'SIGN IN'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#FFFFFF'} showNext={true} rightButton={false} headColor={'#FFFFFF'} verifyUser={this.verifyUser} />
                            </View>

                            <KeyboardAvoidingView style={styles.email}>
                                <View style={styles.inputEmailContainer}>
                                    <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>{this.state.errorMsgEmail}</ShakingText>
                                    <TextInput onChangeText={(text) => this.setState({ activUserEmail: text })} underlineColorAndroid='rgba(0,0,0,0)' style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Email address or Username' placeholderTextColor={'#ECA1C9'} autoCapitalize='none' autoCorrect={false} autoFocus={true} enablesReturnKeyAutomatically={true} onSubmitEditing={() => this.verifyUser()} />
                                    <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>{this.state.errorMgs}</ShakingText>
                                </View>
                                <View style={styles.passwordManager}>
                                    <TouchableOpacity style={styles.button}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image style={{ width: 17, height: 17, marginTop: 2 }} source={require('../../../assets/icons/1password_icon.png')} />
                                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginLeft: 5 }}>Password Manager</Text>
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
        flex: 6,
        marginLeft: 20,
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
    const validEmail = state.validUser.validEmail || {};
    return {
        validEmail,
    }
}, dispatch => {
    return bindActionCreators({ verifyEmail: verifyEmail }, dispatch)
}
)(SignInEmail);