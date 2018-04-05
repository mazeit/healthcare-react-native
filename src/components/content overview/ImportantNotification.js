import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';



const { height, width } = Dimensions.get('window');


export default class ImportantNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#AE0069',
            backgroundColorArray: ['#AE0069', '#D4B870', '#8ACE91'],
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ backgroundColor: this.state.backgroundColorArray[Math.floor(Math.random() * 3)] }), 2000);
    }



    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.backgroundColor, }]}>
                <TouchableOpacity onPress={() => this.props.goToNext()} style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{ width: 15, height: 15, position: 'absolute', top: 20, left: '-50%', margin: 10 }} source={require('../../../assets/icons/close.png')} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Your next activity</Text>
                    <Text style={styles.headerText}>before noon!</Text>
                </View>
                <View style={styles.activityDisply}>
                    <Image style={styles.image} source={require('../../../assets/images/detoxYoga.png')} />
                </View>
                <View style={{ backgroundColor: '#FFFFFF', width: width - 130, flex: 1, marginTop: '-10%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro', fontSize: 22, color: '#454545' }}>Detox Yoga</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={{ backgroundColor: this.state.backgroundColor, flex: 1, width: '100%', marginTop: '5%', alignItems: 'center', justifyContent: 'center', borderColor: '#ffffff', borderRadius: 50, borderWidth: 0.5 }}>
                        <Text style={{ marginLeft: '20%', marginRight: '20%', fontFamily: 'DINPro', fontSize: 17, color: '#ffffff' }}>More Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', flex: 1, width: '100%', marginTop: '5%', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Text style={{ marginLeft: '20%', marginRight: '20%', fontFamily: 'DINPro', fontSize: 17, color: this.state.backgroundColor }}>Start session</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.getCalender}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CalendarContainer')}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginTop: '12%' }}>Go to My Day</Text>
                            <Image style={{ width: 50, height: 50, marginTop: '-5%' }} source={require('../../../assets/icons/little_arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1.5,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'DINPro',
        fontSize: 22,
        color: '#ffffff'
    },
    activityDisply: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: 5,
        width: width - 100,
    },
    image: {
        width: 300,
        height: 230,
        // marginLeft: 70,
    },
    buttons: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    getCalender: {
        flex: 1,
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});



