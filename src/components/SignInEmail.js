import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';
import { getUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import ShakingText from 'react-native-shaking-text';

class SignInEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeUser: "",
        errorMsgEmail: '',
        errorMgs: '',
    };
    this.navigate = this.navigate.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }


  validateUser (currentUser) {
    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test(currentUser) ) {
    //     this.setState({invalidEmail: true});
    //     return;
    // }
    this.props.users.forEach(element => {

        if(currentUser === element.userId) {
            this.setState({ errorMsgEmail: '', errorMgs: ''});
            this.navigate('signInPasswordPage',element)
            return;
        }
    });
    this.setState({ errorMsgEmail: 'Email address', errorMgs: 'This email address is not registered. Please try again.'});
    return;

  }

  navigate(name, user) {
    this.props.navigator.push({
      name,
      user
    })
  }

  render() {
    return (
        <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>
            <View style={styles.email}>
                <View style={styles.header}>
                    <TouchableHighlight onPress={() => this.navigate('homePage')} >
                        <Image style={{ width: 40, height: 40,}} source={require('../../assets/icons/close.png')} />
                    </TouchableHighlight>
                    <Text style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>SIGN IN</Text>
                    <Text onPress={() => this.validateUser(this.state.activeUser)} style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>Next</Text>
                </View>
                <View style={styles.inputEmailContainer}>
                    <ShakingText style={{fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff'}}>{this.state.errorMsgEmail}</ShakingText>
                    <TextInput onChangeText={(text) => this.setState({activeUser: text})} style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24}]} placeholder='Email address or Username' placeholderTextColor={'#ECA1C9'} autoCapitalize = 'none' autoCorrect={false}/>
                    <ShakingText style={{fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff'}}>{this.state.errorMgs}</ShakingText>
                </View>
                <View style={styles.passwordManager}>
                    <TouchableHighlight style={styles.button}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Image style={{ width: 17, height: 17, marginTop: 2}} source={require('../../assets/icons/1password_icon.png')} />
                            <Text style={{fontFamily:'DINPro-Medium', fontSize: 16, color: '#ffffff', marginLeft: 5}}>Password Manager</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
    email: {
      flex: 1,
      backgroundColor: '#AE006980',
      justifyContent: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    inputEmailContainer: {
        flex: 6,
        marginLeft: '7%',
        justifyContent: 'center',
    },
    inputEmail: {
        width: '90%',
        height: 40,
        color: '#ECA1C9',
        fontSize: 20,
    },
    header: {
        flex: 1,
        marginLeft: 2,
        marginRight: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    passwordManager: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        // alignItems: 'center',
        backgroundColor: '#FFFFFF20',
        padding: 5,
        borderRadius:20,
      },
  });

export default connect(state => {
  const users = state.users || {};
  return {
    users
  }
},dispatch => {
  return bindActionCreators ({ getUser : getUser }, dispatch)
}
)(SignInEmail);
