import React from 'react';
import { StyleSheet, View, Dimensions, Text, ImageBackground } from 'react-native';


import Weclome from './Welcome.js';
import SignIn from './SignIn.js';

const {height, width} = Dimensions.get('window');


export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: true,
        };
        this.goToSignIn = this.goToSignIn.bind(this);
    }


    goToSignIn() {
        
        this.setState({ welcome: !this.state.welcome });
    }


    render() {
        return (
                <View style={styles.container}>
                    {
                        this.state.welcome ? <Weclome goToSignIn={ this.goToSignIn } /> : <SignIn goToSignIn={ this.goToSignIn } rootNavigation={ this.props.navigation }/>
                    }
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});