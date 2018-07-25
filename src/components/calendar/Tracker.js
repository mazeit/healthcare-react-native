import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
import AppleHealthKit from 'rn-apple-healthkit';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');

import Header from '../Header';
import Footer from './Footer';


const TrakerList = ['Steps', 'Distance', 'Floors', 'Pulse', 'Meditation time', 'Active time', 'Sleeping time', 'Burned calories'];
let options = {
    permissions: {
        read: ["Height", "Weight", "StepCount", "BodyMassIndex", "Biotin", "Caffeine", "Calcium", "Carbohydrates", "Chloride", "Cholesterol", "Copper", "EnergyConsumed", "FatMonounsaturated", "FatPolyunsaturated", "FatSaturated", "FatTotal", "Fiber", "Folate", "Iodine", "Iron", "Magnesium", "Manganese", "Molybdenum", "Niacin", "PantothenicAcid", "Phosphorus", "Potassium", "Protein", "Riboflavin", "Selenium", "Sodium", "Sugar", "Thiamin", "VitaminA", "VitaminB12", "VitaminB6", "VitaminC", "VitaminD", "VitaminE", "VitaminK", "Zinc", "Water"],
        write: ["Height", "Weight", "StepCount", "BodyMassIndex", "Biotin", "Caffeine", "Calcium", "Carbohydrates", "Chloride", "Cholesterol", "Copper", "EnergyConsumed", "FatMonounsaturated", "FatPolyunsaturated", "FatSaturated", "FatTotal", "Fiber", "Folate", "Iodine", "Iron", "Magnesium", "Manganese", "Molybdenum", "Niacin", "PantothenicAcid", "Phosphorus", "Potassium", "Protein", "Riboflavin", "Selenium", "Sodium", "Sugar", "Thiamin", "VitaminA", "VitaminB12", "VitaminB6", "VitaminC", "VitaminD", "VitaminE", "VitaminK", "Zinc", "Water"]
    }
};
export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepCount: {value: 0},
            distance: {value: 0},
            floor: {value: 0},
            pulse: {value: 0},
            sleep: {value: 0},
            energy: {value: 0},
            weight: {value: 0},
        };
        this._handleHealthkitError = this._handleHealthkitError.bind(this);
    }

    _handleHealthkitError (err, func) {
        console.log(err, func);
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
        );

        AppleHealthKit.initHealthKit(options: Object, (err: string, results: Object) => {
            if (err) {
                console.log("error initializing Healthkit: ", err);
                return;
            }
            let d = new Date();
            let options = {
                date: d.toISOString(),
                // startDate: d.toISOString()
            };

            AppleHealthKit.getStepCount(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getStepCount');
                this.setState({stepCount: results});
            });

            AppleHealthKit.getDistanceCycling(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getDistanceCycling');
                this.setState({distance: results});
            });
            AppleHealthKit.getFlightsClimbed(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getFlightsClimbed');
                this.setState({floor: results});
            });
            AppleHealthKit.getHeartRateSamples(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getHeartRateSamples');
                this.setState({pulse: results});
            });
            AppleHealthKit.getSleepSamples(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getSleepSamples');
                this.setState({sleep: results});
            });
            AppleHealthKit.getActiveEnergyBurned(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getActiveEnergyBurned');
                this.setState({energy: results});
            });
            AppleHealthKit.getLatestWeight(options: Object, (err: Object, results: Object) => {
                if (err) this._handleHealthkitError(err, 'getLatestWeight');
                this.setState({weight: results});
            });
        });
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

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Steps</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.stepCount ? this.state.stepCount.value: 0}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Distance</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.distance ? this.state.distance.value : 0} meter</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Floors</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.floor ? this.state.floor.value : 0}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Pulse</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.pulse ? this.state.pulse.value : 0} bpm</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Sleeping Time</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.sleep ? this.state.sleep.value : 0}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Burned Calories</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.energy ? this.state.energy.value : 0}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>0</Text>
                                </View>
                            </View>

                            <View style={[styles.informationContainer, { borderBottomWidth: 0.5 }]}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', }}>
                                    {/*<TouchableOpacity><Icon name='edit_weight' size={50} style={{ marginLeft: -50 }} color='#4AB3E2' /></TouchableOpacity>*/}
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Weight</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.weight ? this.state.weight.value : 0}</Text>
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
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        opacity: 0.8
    },
    informationContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
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