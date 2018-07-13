import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

const profileSubHeading = ['My profile information', 'My notification', 'My tracking settings', 'Invite my friends', 'Terms of use', 'Privacy policy', 'Helf & FAQ', 'About us'];

export default class Article extends React.Component {
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
                        <View style={styles.articleImage}>
                            <ImageBackground style={styles.image} source={require('../../assets/images/article.png')}>

                            </ImageBackground>
                        </View>

                        <View style={styles.content}>

                            <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>5 Myths about travelling</Text>
                                </View>
                                <View style={[styles.details, { margin: 10, marginTop: 0 }]}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>Yoga teachers</Text>
                                </View>
                            </View>

                            <View style={styles.contentSubBlock}>
                                <View style={[styles.details, { height: 51, }]}>
                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>04. April 2017  ·  Reading time: 7 min</Text>
                                </View>
                            </View>

                            <View style={styles.contentSubBlock}>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#838383', }}>Kathryn Budig has created a career that’s the envy of yogis around the globe, but here she debunks some common misconceptions about what it means to be a big-name, internationally traveling yoga teacher.</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>I’m a yoga teacher who travels for a living. I’ve see the good, the bad, and the ugly. I’ve been on the road since 2008, and I have been simultaneously blessed and cursed to have my local airport feel like an extension of my home. I taught local classes for years with the humble dream of hitting a few national studios a year and perhaps even a class at a big conference or festival.</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>That tater tot of a dream took hold of me, and before I knew it, I was fully committed to being on the travel circuit. I now teach internationally, at festivals and conferences and lead workshops, intensives, and teacher trainings for amazing students around the world. Here are a few myths I’ve learned along the way for anyone eager to pack their suitcase full of stretchy pants and see the world.</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545', }}>Myth 1: You’ll be super famous and make oodles of money.</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>One simple phrase should do the trick:</Text>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>There’s no place like home.</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>The world is a dazzling place—full of adventure, fascinating people with unbelievable stories, and a unified love for yoga. But let me tell you, nothing tops the clank of the stamp on your passport with the utterance, “Welcome home” or the twist of your hand as you unlock your front door and drop the weight of your trip from your shoulders onto the ground.</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={[styles.contentSubBlock, { width: width - 20 }]}>
                                <View style={styles.details}>
                                    <View style={styles.teacherImage}>
                                        <ImageBackground style={{ width: width - 20, height: 124, alignItems: 'center', justifyContent: 'center' }} source={require('../../assets/images/yogaTeacher.png')} blurRadius={15} >
                                            <View style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 100, overflow: 'hidden', }}>
                                                <Image source={require('../../assets/images/yogaTeacher.png')} style={{ width: 100, height: 100, }} />
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', }}>Kathryn Budig</Text>
                                </View>
                                <View style={[styles.details, { margin: 10 }]}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>She is yoga teacher behind AIM TRUE,a regular writer for Yoga Journal, and a presenter at Yoga Journal LIVE!</Text>
                                </View>
                                <View style={[styles.details, { margin: 10, }]}>
                                    <TouchableOpacity >
                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Visit her profile</Text>
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
    articleImage: {
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
    teacherImage: {
        height: 124,
        alignItems: 'center',
        justifyContent: 'center',
    },
});