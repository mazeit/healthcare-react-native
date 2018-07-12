import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

const profileSubHeading = ['My profile information', 'My notification', 'My tracking settings', 'Invite my friends', 'Terms of use', 'Privacy policy', 'Helf & FAQ', 'About us'];

export default class CoachProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.article} showsVerticalScrollIndicator={false}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.coachImage}>
                            <ImageBackground style={styles.image} source={require('../../../assets/images/yogaTeacher.png')}>

                            </ImageBackground>
                        </View>

                        <View style={styles.content}>

                            <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545', textAlign: 'center' }}>Kathryn Budig</Text>
                                </View>
                                <View style={[styles.details, { margin: 10, marginTop: 0 }]}>
                                    <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383', textAlign: 'center' }}>She is yoga teacher behind AIM TRUE,a regular writer for Yoga Journal, and a presenter at Yoga Journal LIVE!</Text>
                                </View>
                            </View>

                            <View style={styles.contentSubBlock}>
                                <View style={[styles.details, { height: 51, width: width - 40, borderBottomWidth: 0.5, borderColor: '#E9E9E9', }]}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>37 years old, married, 2 kids</Text>
                                </View>
                                <View style={[styles.details, { height: 51, width: width - 40, borderBottomWidth: 0.5, borderColor: '#E9E9E9', }]}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>Intention to make everyone better</Text>
                                </View>
                                <View style={[styles.details, { height: 51, width: width - 40, }]}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>0Nutirion specialist, Tai Chi teacher</Text>
                                </View>
                            </View>

                            <View style={styles.contentSubBlock}>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383', }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383', }}>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={[styles.contentSubBlock, { width: width - 20 }]}>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383', textAlign: 'center' }}>If you prefer to continue with Kathryn as your Coach, please click here.</Text>
                                </View>
                                <View style={[styles.details, { margin: 10, }]}>
                                    <TouchableOpacity >
                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Make Kathryn my coach</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.contentSubBlock}></View>
                        </View>
                    </View>

                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});