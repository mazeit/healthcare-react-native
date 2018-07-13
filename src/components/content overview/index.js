import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, PanResponder, Animated, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import Header from '../Header';
import { getContentPillars } from '../../actions/index';
import LoaderWait from '../LoaderWait';

const { width } = Dimensions.get('window');
const windowHeight = Dimensions.get('window').height;

class ContentOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openSearch: true,
            activityImage: '',
            nutritionImage: '',
            mindfulnessImage: '',
            coachImage: '',
            loader: true,
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

    componentDidMount() {

        this.props.getContentPillars();


    }

    componentWillReceiveProps(nextProps) {
        this.setState({ nutritionImage: nextProps.contentPillars.pillars[0].img, activityImage: nextProps.contentPillars.pillars[1].img, mindfulnessImage: nextProps.contentPillars.pillars[2].img, coachImage: nextProps.contentPillars.pillars[3].img, loader: false });

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
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'SELECT YOUR TOPIC'} leftButton={false} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} notificationButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                            </View>
                            <View style={styles.container} {...this._panResponder.panHandlers}>
                                <Animated.View style={[styles.search, { height }, { opacity }]}>
                                    <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 16, backgroundColor: '#FFFFFF', width: width - 40, height: 44 }} placeholder='Search' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                                    <Icon name="magnifyer" size={50} style={{ marginLeft: -10 }} color="#454545" />
                                </Animated.View>
                                <View style={[styles.section, { marginBottom: 5 }]}>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'nutrition'})} style={[styles.subContent, { marginRight: 10, marginLeft: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.nutritionImage }} >

                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Icon name="nutrition" size={50} style={{ marginLeft: -10 }} color="#8ACE91" />
                                            <Text style={[styles.activitySubtittle, { color: '#8ACE91' }]} >Nutrition</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'activity'})} style={[styles.subContent, { marginLeft: 10, marginRight: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.activityImage }} >
                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Icon name="activity" size={50} style={{ marginLeft: -10 }} color="#AE0069" />
                                            <Text style={[styles.activitySubtittle, { color: '#AE0069' }]} >Activity</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                <View style={[styles.section, { marginTop: 5 }]}>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'mindfulness'})} style={[styles.subContent, { marginRight: 10, marginLeft: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.mindfulnessImage }} >
                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Icon name="mindfulness" size={50} style={{ marginLeft: -10 }} color="#D4B870" />
                                            <Text style={[styles.activitySubtittle, { color: '#D4B870' }]} >Mindfulness</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'coach'})} style={[styles.subContent, { marginLeft: 10, marginRight: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.coachImage }} >
                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Text style={[styles.activitySubtittle, { color: '#454545' }]} >Coach</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                }
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
        fontFamily: 'DINPro-Light',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default connect(state => {
    const contentPillars = state.getData.contentPillars || {};
    return {
        contentPillars,
    }
}, dispatch => {
    return bindActionCreators({ getContentPillars: getContentPillars }, dispatch)
}
)(ContentOverview);