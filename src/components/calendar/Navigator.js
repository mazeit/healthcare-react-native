import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

const {height, width} = Dimensions.get('window');


export default class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: '-90deg',
        };
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/navigator.png')} blurRadius={8}>

                <ScrollView style={ styles.helpFaqContainer }>

                    <TouchableOpacity style={ [styles.navigatorHeader, { marginTop: 0,height: 63}] }>          
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center'}}>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ [styles.navigatorHeader, { marginTop: 0,height: 63}] }>          
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center'}}>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ [styles.navigatorHeader, { marginTop: 0,height: 63}] }>          
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center'}}>Challange</Text>
                    </TouchableOpacity>

                    <View style={ [styles.termsOfUseBlock, { height: 240 }] }>
                                
                    <ProgressCircle
                        percent={45}
                        radius={80}
                        borderWidth={8}
                        color="#D0021B"
                    >
                        <Text style={{ fontSize: 18 }}>45%</Text>
                    </ProgressCircle>
                    
                    </View>

                    <View style={ [styles.termsOfUseBlock, { height: 55 }] }>
                                
                        <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20}}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545'}}>Who to contact ?</Text>
                        </View>
                        <View style={{  flex: 1, alignItems: 'flex-end',}}>
                            <Image style={{ width: 15, height: 15, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                        </View>
                    
                    </View>

                    <View style={ [styles.termsOfUseBlock, { height: 55 }] }>
                                
                        <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20}}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545'}}>How to become a partner ?</Text>
                        </View>
                        <View style={{  flex: 1, alignItems: 'flex-end',}}>
                            <Image style={{ width: 15, height: 15, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                        </View>
                    
                    </View>

                    <View style={ [styles.termsOfUseBlock, { height: 55 }] }>
                                
                        <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20}}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545'}}>How to get medical information ?</Text>
                        </View>
                        <View style={{  flex: 1, alignItems: 'flex-end',}}>
                            <Image style={{ width: 15, height: 15, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                        </View>
                    
                    </View>

                    <View style={ [styles.termsOfUseBlock, { height: 55 }] }>
                                
                        <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20}}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545'}}>How can i invite friends ?</Text>
                        </View>
                        <View style={{  flex: 1, alignItems: 'flex-end',}}>
                            <Image style={{ width: 15, height: 15, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                        </View>
                    
                    </View>

                    <View style={ [styles.termsOfUseBlock, { height: 55 }] }>
                                
                        <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20}}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545'}}>How does the app works ?</Text>
                        </View>
                        <View style={{  flex: 1, alignItems: 'flex-end',}}>
                            <Image style={{ width: 15, height: 15, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                        </View>
                    
                    </View>

                    <View style={ [styles.termsOfUseBlock, { flexDirection: 'column', height: 309 }] }>
                                
                        <Text style={{ flex: 1, height: 66, fontFamily: 'DINPro', fontSize: 18, color: '#838383', margin: 20, marginBottom: 0, textAlign: 'center'}}>No answer to your question? Be free to contact our support team for a personal assistence. You can reach us:</Text>
                        
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <Image style={{ width: 147, height: 147,}} source={require('../../../assets/icons/clock.png')} />
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column',}}>
                            <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', textAlign: 'center'}}>Monday – Friday</Text>

                            <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', textAlign: 'center'}}>9am – 5pm</Text>

                            <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', textAlign: 'center'}}>[phone number]</Text>

                            <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', marginBottom: 20, textAlign: 'center'}}>[email-adresss]</Text>
                        </View>

                    </View>
                    
                </ScrollView>
                
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    
    helpFaqContainer: {
        flex: 1,
        margin: 10,
        padding: 5,
        width: width,
        backgroundColor: '#FFFFFF50',
    },
    navigatorHeader: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        opacity: 0.8

    },
  });