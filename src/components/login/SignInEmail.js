import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import ShakingText from 'react-native-shaking-text';

export default class SignInEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={styles.email}>
                <View style={styles.inputEmailContainer}>
                    <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }}>{this.props.errorMsgEmail}</ShakingText>
                    <TextInput onChangeText={(text) => this.props.setInput(text)} style={[styles.inputEmail, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Email address or Username' placeholderTextColor={'#ECA1C9'} autoCapitalize='none' autoCorrect={false} />
                    <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>{this.props.errorMgs}</ShakingText>
                </View>
                <View style={styles.passwordManager}>
                    <TouchableHighlight style={styles.button}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image style={{ width: 17, height: 17, marginTop: 2 }} source={require('../../../assets/icons/1password_icon.png')} />
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginLeft: 5 }}>Password Manager</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    email: {
        flex: 1,
        justifyContent: 'center',
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
        height: 40,
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

