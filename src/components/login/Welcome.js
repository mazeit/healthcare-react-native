import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, View, Dimensions, Text, ImageBackground } from 'react-native';


import Home from './Home.js';

const BannerWidth = Dimensions.get('window').width;

const images = [
    "http://xxx.com/1.png",
    "http://xxx.com/2.png",
    "http://xxx.com/3.png"
];

export default class HomeInitial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introText: 'Skip Intro'
        };
    }


    renderPage(image, index) {
        return (
                <Home key={index}/>
        );
    }

    render() {
        return (
            <ImageBackground style={styles.homeImage} source={require('../../../assets/images/home.png')}>
                <View style={styles.container}>
                    <Carousel
                        autoplay={false}
                        loop={false}
                        index={0}
                        width={BannerWidth}
                        onPageChanged={(index) => { if(index === 2) this.setState({introText: 'Continue'}); else {this.setState({introText: 'Skip Intro'})} }}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                    <View style={styles.skipIntro}>
                        <Text onPress={() => this.props.goToSignIn() } style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>{this.state.introText}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    skipIntro: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%', 
    },
});