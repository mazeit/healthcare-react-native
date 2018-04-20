import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';

export default class PasswordForgotten extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  
  render() {
    return (
        
            <View style={styles.email}>
                <View style={styles.inputEmailContainer}>
                    <TextInput style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24}]} placeholder='Enter your email address' placeholderTextColor={'#C5E9D6'}/>
                </View>
                <View style={styles.passwordManager}>
                    <TouchableHighlight style={styles.button}>
                        <Text style={{fontFamily:'DINPro-Medium', fontSize: 17, textAlign: 'center', color: '#ffffff'}}>Send Link</Text>
                    </TouchableHighlight>
                </View>
            </View>
    );
}
}

const styles = StyleSheet.create({
    email: {
      flex: 1,
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
        height: 40,
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
        borderRadius:20,
        borderWidth: 1,
      },
  });