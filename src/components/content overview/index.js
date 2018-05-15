import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, PanResponder, Animated, TextInput, TouchableOpacity } from 'react-native';

import Header from '../Header';

const { width } = Dimensions.get('window');
const windowHeight = Dimensions.get('window').height;

export default class ContentOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openSearch: true,
        };

        this.showSearch = this.showSearch.bind(this);
        this.hideSearch = this.hideSearch.bind(this);

        this.animated = new Animated.Value(0);
    }


    componentWillMount() {
        this._panResponder = PanResponder.create({

            onMoveShouldSetResponderCapture: () => true,

            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
            },

            onPanResponderMove: () => {
                //code during Move
            },

            onPanResponderRelease: (e, { dx, dy }) => {

                if (dy > dx && dy > 0) {

                    this.showSearch()
                }
                if (-(dy) > dx && dy < 0) {

                    this.hideSearch()
                }
            }
        });
    }


    showSearch() {
        //   console.log('in show')
        this.setState({ openSearch: true })
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 100,
        }).start();
    }

    hideSearch() {
        this.setState({ openSearch: true })
        Animated.timing(this.animated, {
            toValue: 0,
            duration: 100,
        }).start();
    }


    render() {

        const height = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: this.state.openSearch ? [0, 44] : [44, 0]
        });
        const opacity = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: this.state.openSearch ? [0, 1] : [1, 0]
        });


        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'SELECT YOUR TOPIC'} leftButton={false} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container} {...this._panResponder.panHandlers}>
                    <Animated.View style={[styles.search, { height }, { opacity }]}>
                        <TextInput style={{ fontFamily: 'DINPro', fontSize: 16, backgroundColor: '#FFFFFF', width: width - 40, height: 44 }} placeholder='Search' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                        <Image style={{ width: 20, height: 20 }} source={require('../../../assets/icons/search.png')} />
                    </Animated.View>
                    <View style={[styles.section, { marginBottom: 5 }]}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList')} style={[styles.subContent, { marginRight: 10, marginLeft: 10 }]}>
                            <View style={styles.image}>
                                <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/nutrition.png')} >

                                </ImageBackground>
                            </View>
                            <View style={styles.activityContainer}>
                                <Image style={{ width: 34, height: 40 }} source={require('../../../assets/icons/nutrition.png')} />
                                <Text style={[styles.activitySubtittle, { color: '#8ACE91' }]} >Nutrition</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList')} style={[styles.subContent, { marginLeft: 10, marginRight: 10 }]}>
                            <View style={styles.image}>
                                <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/activity.png')} >
                                </ImageBackground>
                            </View>
                            <View style={styles.activityContainer}>
                                <Image style={{ width: 34, height: 40 }} source={require('../../../assets/icons/activity.png')} />
                                <Text style={[styles.activitySubtittle, { color: '#AE0069' }]} >Activity</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={[styles.section, { marginTop: 5 }]}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList')} style={[styles.subContent, { marginRight: 10, marginLeft: 10 }]}>
                            <View style={styles.image}>
                                <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/mindfulness.png')} >
                                </ImageBackground>
                            </View>
                            <View style={styles.activityContainer}>
                                <Image style={{ width: 34, height: 40 }} source={require('../../../assets/icons/mindfulness.png')} />
                                <Text style={[styles.activitySubtittle, { color: '#D4B870' }]} >Mindfulness</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList')} style={[styles.subContent, { marginLeft: 10, marginRight: 10 }]}>
                            <View style={styles.image}>
                                <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/coaching.png')} >
                                </ImageBackground>
                            </View>
                            <View style={styles.activityContainer}>
                                <Text style={[styles.activitySubtittle, { color: '#454545' }]} >Coaching</Text>
                            </View>
                        </TouchableOpacity>

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
    search: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    section: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: width - 20,
    },
    subContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: (width - 20) / 2 - 10,
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    activityContainer: {
        flex: 2,
        width: (width - 20) / 2 - 10,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activitySubtittle: {
        fontFamily: 'DINPro',
        fontSize: 18,
        textAlign: 'center',
    },
});