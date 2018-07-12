import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);


import Header from '../Header';
import ActivityList from '../ActivityList';

const { height, width } = Dimensions.get('window');

const profileSubHeading = ['My profile information', 'My notification', 'My tracking settings', 'Invite my friends', 'Terms of use', 'Privacy policy', 'Helf & FAQ', 'About us'];

export default class Meditation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.navigate('AddActivity1')} backgroundcolor={'#FFFFFF'} headerTitle={'MEDITATION SESSION'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>

                <View style={{ flex: 9 }}>
                    <ScrollView style={styles.article} showsVerticalScrollIndicator={false}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.coachImage}>
                                <ImageBackground style={styles.image} source={require('../../../assets/images/detoxYoga.png')}>
                                    <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 5, right: 5, width: 50, height: 50, borderRadius: 50, backgroundColor: '#FFFFFF90' }}>
                                        <Icon name='fav' size={50} color={'#454545'} />
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={styles.content}>

                                <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 22, color: '#454545', padding: 5, }}>Meditation for stress</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10, marginTop: 0 }]}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Regular', fontSize: 16, color: '#838383', padding: 5, paddingLeft: 10, paddingRight: 10 }}>Enjoy a healthier mind by developing your awareness of stress and learning how to reframe negative emotions</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10, marginTop: 0 }]}>
                                        <Icon name='mindfulness' size={80} color={'#D4B870'} />
                                    </View>
                                </View>

                                <View style={[styles.contentSubBlock, { height: 100 }]}>
                                    <View style={[styles.subContainers, {}]}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>Techniques: Body Scan / Visualization</Text>
                                    </View>

                                    <View style={[styles.subContainers, { flexDirection: 'row', borderTopWidth: 0.5, borderTopColor: '#E9E9E9', width: '85%' }]}>
                                        <View style={styles.subContainers}>

                                        </View>
                                        <View style={[styles.subContainers, { flexDirection: 'row' }]}>
                                            <Icon name='time' size={70} color={'#454545'} />
                                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', marginLeft: -15 }}>30:00</Text>
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
                                        <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 22, color: '#454545', }}>This could also interest you:</Text>
                                        </View>
                                        <View style={{ flex: 9, alignItems: 'flex-start', margin: 20, marginBottom: 0, width: '100%' }}>
                                            <ActivityList navigation={this.props.navigation} goto={'Recipe'}
                                                data={[
                                                    { key: 'Devin' },
                                                    { key: 'Jackson' },
                                                ]}
                                            />
                                        </View>
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
    }
});