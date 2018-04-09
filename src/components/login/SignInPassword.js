import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';
import ShakingText from 'react-native-shaking-text';

export default class SignInPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    validatePassword(password) {

    }


    render() {
        return (
            <View style={styles.password}>

                <View style={styles.inputPasswordContainer}>

                    <ShakingText style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff' }} >{this.props.wrongPassword}</ShakingText>
                    <TextInput onChangeText={(text) => this.props.setInput(text)} style={[styles.inputPassword, { fontFamily: 'DINPro-Light', fontSize: 24 }]} placeholder='Password' secureTextEntry={true} placeholderTextColor={'#EFE1CB'} autoFocus={true} enablesReturnKeyAutomatically={true} onSubmitEditing={ () => this.props.goToNextPage()}/>
                    <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: '#ffffff' }}>{this.props.wrongPasswordMsg}</ShakingText>

                </View>
                <View style={styles.forgotPassword}>
                    <TouchableHighlight style={styles.button} onPress={() => this.props.forgotPassword()}>
                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff', }}>Forgot your password?</Text>
                    </TouchableHighlight>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: '85%', textAlign: 'center', fontFamily: 'DINPro', fontSize: 22, color: '#ffffff' }} >Password too long? Hard to type?</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: '85%', textAlign: 'center', fontFamily: 'DINPro', fontSize: 16, color: '#ffffff' }}>Stay in the flow and get a link sent to your email that’ll sign you in instantly</Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 17, textAlign: 'center', color: '#ffffff', }}>Send flow link</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    password: {
        flex: 1,
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