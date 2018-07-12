import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);


import Header from '../Header';
import ActivityList from '../ActivityList';

const { height, width } = Dimensions.get('window');

const menuList = [
    {
        head: 'Warm',
        subHead: 'Quick Warm Up'
    },
    {
        head: 'Cardio',
        subHead: 'Power '
    },
    {
        head: 'Cardio',
        subHead: 'Table Crunch'
    },
    {
        head: 'Strength',
        subHead: 'Triangle Warrior'
    },
    {
        head: 'Strength',
        subHead: 'Bow Body'
    },
    {
        head: 'Cool',
        subHead: 'Savasana'
    },
];


export default class Yoga extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.navigate('AddActivity1')} backgroundcolor={'#FFFFFF'} headerTitle={'DETOX YOGA FOR RELAXATION'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>

                <View style={{ flex: 9 }}>
                    <ScrollView style={styles.article} showsVerticalScrollIndicator={false}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.coachImage}>
                                <ImageBackground style={styles.image} source={require('../../../assets/images/mindfulness.png')}>
                                    <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 5, right: 5, width: 50, height: 50, borderRadius: 50, backgroundColor: '#FFFFFF90' }}>
                                        <Icon name='fav' size={50} color={'#454545'} />
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={styles.content}>

                                <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 22, color: '#454545', padding: 5, }}>Detox Yoga for relaxation</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10, marginTop: 0 }]}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Regular', fontSize: 16, color: '#838383', padding: 5, paddingLeft: 10, paddingRight: 10 }}>Build a strong home practice with these sequences, tutorials, challenge poses, tips, and advice for yogis of every level. </Text>
                                    </View>
                                    <View style={[styles.details, { marginTop: 0 }]}>
                                        <Icon name='activity' size={80} color={'#AE0069'} />
                                    </View>
                                </View>

                                <View style={[styles.contentSubBlock, { height: 50 }]}>

                                    <View style={[styles.subContainers, { flexDirection: 'row', width: '85%' }]}>
                                        <View style={styles.subContainers}>

                                        </View>
                                        <View style={[styles.subContainers, { flexDirection: 'row' }]}>
                                            <Icon name='time' size={70} color={'#454545'} />
                                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', marginLeft: -15 }}>20:00</Text>
                                        </View >
                                        <View style={[styles.subContainers, { flexDirection: 'row' }]}>
                                            <Icon name='level' size={70} color={'#454545'} />
                                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', marginLeft: -15 }}>Easy</Text>
                                        </View >
                                        <View style={styles.subContainers}>

                                        </View>
                                    </View>
                                </View>

                                <View style={styles.contentSubBlock}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 22, color: '#454545', marginBottom: 10 }}>Asanas</Text>
                                        {
                                            menuList.map((item, i) =>
                                                <View key={i} style={styles.informationContainer}>
                                                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545' }}>{item.head}</Text>
                                                        <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 16, color: '#838383' }}>{item.subHead}</Text>
                                                    </View>
                                                    <View style={{ alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', width: 100 }}>
                                                        <Icon name='time' size={50} color={'#454545'} />
                                                        <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 16, color: '#838383', marginBottom: 15 }}>2 min</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    </View>
                                </View>


                                <View style={[styles.contentSubBlock, { width: width - 20 }]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 16, color: '#838383', textAlign: 'center' }}>Add this to your challenge</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10, }]}>
                                        <TouchableOpacity >
                                            <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Add</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.contentSubBlock}></View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5F5F5',
    },
    coachImage: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    article: {
        flex: 1,
    },
    content: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentSubBlock: {
        width: width - 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    details: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainers: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
        height: 55,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});