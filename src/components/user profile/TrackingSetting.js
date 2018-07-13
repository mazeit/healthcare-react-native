import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Switch } from 'react-native';

const { height, width } = Dimensions.get('window');
import Header from '../Header';

export default class TrackingSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'MY TRACKING SETTING'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <View style={styles.tracking}>

                        <View style={styles.trackingBlock}>

                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 10 }}>My</Text>
                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginBottom: 10 }}>connections</Text>

                            <View style={styles.trackingContainer}>
                                <View style={{ flex: 7, alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/images/appleHealth.png')} style={{ width: 29, height: 29, }} />
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', marginLeft: 10 }}>Apple Health</Text>
                                </View>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    <Switch onValueChange={() => this.setState({ toggle: !this.state.toggle })} onTintColor={'#4AB3E2'} value={this.state.toggle}></Switch>
                                </View>
                            </View>

                            <View style={styles.trackingContainer}>
                                <View style={{ flex: 7, alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/images/myFitnessPal.png')} style={{ width: 29, height: 29, resizeMode: 'center' }} />
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', marginLeft: 10 }}>My Fitness Pal</Text>
                                </View>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    <Switch onValueChange={() => this.setState({ toggle: !this.state.toggle })} onTintColor={'#4AB3E2'} value={this.state.toggle}></Switch>
                                </View>
                            </View>

                        </View>

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },


    tracking: {
        flex: 1,
        margin: 10,
    },
    trackingBlock: {
        flex: 1,
        width: width - 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        alignItems: 'center',
    },

    trackingContainer: {
        marginLeft: 10,
        marginRight: 10,
        height: 55,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
    },
});