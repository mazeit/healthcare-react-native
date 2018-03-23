import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';

export default class SignInPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        password: '',
        invalidPassword: false,
    };
    this.navigate = this.navigate.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  validatePassword (password) {
    if (this.props.user.password === password) {
        this.setState({invalidPassword : false});
        this.navigate('authoriseWelcomePage', this.props.user);
        return;
    } else {
        this.setState({invalidPassword : true});
        return;
    }
  }

  navigate(name, user={}) {
    this.props.navigator.push({
      name,
      user,
    })
  }
  
  render() {
    return (
        <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>
            <View style={styles.password}>
                <View style={styles.header}>
                    <TouchableHighlight onPress={() => this.navigate('signInEmailPage')} >
                        <Image style={{ width: 40, height: 40,}} source={require('../../assets/icons/close.png')} />
                    </TouchableHighlight>
                    <Text style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>SIGN IN</Text>
                    <Text onPress={() => this.validatePassword(this.state.password)} style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>Next</Text>
                </View>
                <View style={styles.inputPasswordContainer}>
                    {this.state.invalidPassword && <Text style={{fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff'}} >Password</Text>}
                    <TextInput onChangeText={(text) => this.setState({password:text})} style={[styles.inputPassword, { fontFamily: 'DINPro-Light', fontSize: 24}]} placeholder='Password' secureTextEntry={true} placeholderTextColor={'#EFE1CB'}/>
                    {this.state.invalidPassword && <Text style={{fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff'}}>This password is not correct. Please try again.</Text>}
                </View>
                <View style={styles.forgotPassword}>
                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('passwordForgottenPage')}>
                        <Text style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff',}}>Forgot your password?</Text>
                    </TouchableHighlight>
                    <Text style={{marginTop: 5, marginBottom: 5, width: '85%', textAlign: 'center', fontFamily:'DINPro', fontSize: 22, color: '#ffffff'}} >Password too long? Hard to type?</Text>
                    <Text style={{marginTop: 5, marginBottom: 5, width: '85%', textAlign: 'center', fontFamily:'DINPro', fontSize: 16, color: '#ffffff'}}>Stay in the flow and get a link sent to your email that’ll sign you in instantly</Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={{fontFamily:'DINPro-Medium', fontSize: 17, textAlign: 'center', color: '#ffffff',}}>Send flow link</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
    password: {
      flex: 1,
      backgroundColor: '#D4B87080',
      justifyContent: 'center',
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
        height: 40,
        color: '#EFE1CB',
        fontSize: 20,
    },
    header: {
        flex: 1,
        marginLeft: 2,
        marginRight: 5,
        top: '-6%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    forgotPassword: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF20',
        padding: 5,
        borderRadius:20,
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
        borderRadius:20,
        marginTop: 5,
        marginBottom: 5,
      },
  });