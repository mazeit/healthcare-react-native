import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';

const {height, width} = Dimensions.get('window');

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    } 
    
    render() {  
        return(
            <View style={{ flex:1 ,}}>
                <View style={{ flex: 3 ,}}>
                    <Image style={{flex: 1}} source={require('../../assets/images/detoxYoga.png')}/>
                </View>
                <View style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{ flex: 3.5, marginTop: -50, marginBottom: 2, marginLeft:10, marginRight:10, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-light', fontSize: 22, color: '#454545',}}>Meditation for stress</Text>
                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-light', fontSize: 16, color: '#838383',}}>Enjoy a healthier mind by developing your awareness of stress and learning how to reframe negative emotions</Text>
                    </View>
                    <View style={{ flex: 3, backgroundColor: '#FFFFFF', marginTop: 10, marginLeft:10, marginRight:10, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>Techniques: Body Scan / Visualization</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 3.5, backgroundColor: '#FFFFFF', marginTop: 10, marginBottom: 2, alignItems: 'center', justifyContent: 'center'}}></View>
                </View>
            </View>
        );
    }
}
