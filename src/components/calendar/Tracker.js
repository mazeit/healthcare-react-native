import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');

import Header from '../Header';
import Footer from './Footer';


const TrakerList = ['Steps', 'Distance', 'Floors', 'Pulse', 'Meditation time', 'Active time', 'Sleeping time', 'Burned calories'];

export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount () {
        Alert.alert(
            'livinflow would like to access your tracking information',
            '',
            [
              {text: 'Cancel', onPress: () => this.props.navigation.goBack(), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/navigator.png')} blurRadius={8}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.navigate('AddActivity1')} backgroundcolor={'#FFFFFF'} headerTitle={'MY TRACKER'} leftButton={false} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

                    <TouchableOpacity style={[styles.navigatorHeader, { marginTop: 0, height: 63, borderBottomColor: '#4AB3E2' }]}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#4AB3E2', margin: 20, textAlign: 'center' }}>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navigatorHeader, { marginTop: 0, height: 63 }]}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center' }}>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navigatorHeader, { marginTop: 0, height: 63 }]}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center' }}>Challange</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>

                    <ScrollView style={styles.trackerData}>


                        <View style={[styles.trackerDataBlock, { height: 240 }]}>

                            <ProgressCircle
                                percent={45}
                                radius={80}
                                borderWidth={8}
                                color="#D0021B"
                            >
                                <Text style={{ fontSize: 18 }}>45%</Text>
                            </ProgressCircle>
                            <Text style={{ marginTop: 10 }}>43% of today’s goal achieved</Text>

                        </View>

                        <View style={styles.trackerDataBlock}>

                            {
                                TrakerList.map((item, i) =>
                                    <View key={i} style={styles.informationContainer}>
                                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{item}</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                        </View>
                                    </View>
                                )
                            }
                            <View style={[styles.informationContainer, { borderBottomWidth: 0 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', }}>
                                    <TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383', marginLeft: -15, marginTop: 15 }}>Weight</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.trackerDataBlock}>

                            <View style={{ margin: 5 }}>
                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545' }}>Well Done!</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>You had quite an active day today. You have earned some goodie. Unlock a bonus recipe:</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <TouchableOpacity style={styles.freeRecipeButton }>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2',  textAlign: 'center', paddingLeft: 20, paddingRight: 20, padding:10 }}>Get a free recipe</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <Footer activeTab={'Tracker'} navigation={this.props.navigation}/>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },

    trackerData: {
        width: width,
        flex: 1,
        backgroundColor: '#FFFFFF50',

    },
    navigatorHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        opacity: 0.8,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    trackerDataBlock: {
        marginTop: 5,
        marginBottom: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        opacity: 0.8
    },
    informationContainer: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    freeRecipeButton: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#4AB3E2',
        borderRadius: 20,
    }
});