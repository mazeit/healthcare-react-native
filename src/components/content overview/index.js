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

            searchKey: ''
        };

        this.showSearch = this.showSearch.bind(this);
        this.hideSearch = this.hideSearch.bind(this);

        this.tabSelected = this.tabSelected.bind(this);
        this.animated = new Animated.Value(0);

    }


    componentWillMount() {
        this._panResponder = PanResponder.create({

        //     onMoveShouldSetResponderCapture: () => true,

        //     onMoveShouldSetPanResponderCapture: () => true,
        //     onPanResponderGrant: (e, gestureState) => {
        //     },

        //     onPanResponderMove: () => {
        //         //code during Move
        //     },

        //     onPanResponderRelease: (e, { dx, dy }) => {

        //         if (dy > dx && dy > 0) {

        //             this.showSearch()
        //         }
        //         if (-(dy) > dx && dy < 0) {

        //             this.hideSearch()
        //         }
        //     }
        });
    }

    componentDidMount() {

        this.props.getContentPillars()
        .then((contentPillars)=>{

            this.setState({ nutritionImage: contentPillars.pillars[0].img, activityImage: contentPillars.pillars[1].img, mindfulnessImage: contentPillars.pillars[2].img, coachImage: contentPillars.pillars[3].img, loader: false });
        });


    }

    componentWillReceiveProps(nextProps) {

    }


    showSearch() {

        // this.setState({ openSearch: true })
        // Animated.timing(this.animated, {
        //     toValue: 1,
        //     duration: 100,
        // }).start();
    }

    hideSearch() {
        // this.setState({ openSearch: true })
        // Animated.timing(this.animated, {
        //     toValue: 0,
        //     duration: 100,
        // }).start();
    }

    tabSelected( input) {
        this.props.navigation.navigate(input, {});
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
                            <View style={styles.container}  {...this._panResponder.panHandlers}>



                                {/* HEADER */}
                                <View style={styles.buttonGroup}>

                                    <TouchableOpacity style={styles.tabButton} onPress={() => this. tabSelected('CalendarView')}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'column' }}>
                                            <Icon name='calender' size={50} color='#454545' />
                                            <Text style={{ fontFamily: 'DINPro-Medium', marginTop: -15, fontSize: 14, textAlign: 'center', color: '#000'}}>Calendar</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.tabButton} onPress={() => this. tabSelected('Tracker')}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'column' }}>
                                            <Icon name='tracker' size={50} color='#454545' />
                                            <Text style={{ fontFamily: 'DINPro-Medium', marginTop: -15, fontSize: 14, textAlign: 'center', color: '#000'}}>Tracker</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.tabButton} onPress={() => this.tabSelected('MyChallenge')}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'column' }}>
                                            <Icon name='challenge' size={50} color='#454545' />
                                            <Text style={{ fontFamily: 'DINPro-Medium', marginTop: -15, fontSize: 14, textAlign: 'center', color: '#000'}}>My Challange</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* HEADER ENDS*/}

                                <View style={[styles.search]}>
                                    <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 16, backgroundColor: '#FFFFFF', width: width - 40, height: 44, paddingLeft: 20 }} placeholder='Search' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} value={this.state.searchKey} onChangeText={(text)=>this.setState({searchKey: text}) } />
                                    <Icon name="magnifyer" onPress={()=>{ this.state.searchKey && this.props.navigation.navigate('CategoryList', {viewType: 'search', searchKey: this.state.searchKey}) }} size={50} style={{ marginLeft: -10 }} color="#454545" />
                                </View>
                                <View style={[styles.section, { marginBottom: 5 }]}>

                                    <TouchableOpacity onPress={() => {console.log('hey'); this.props.navigation.navigate('CategoryList', { pillarName: 'nutrition', viewType: 'pillar'}) }} style={[styles.subContent, { marginRight: 10, marginLeft: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.nutritionImage }} >

                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Icon name="nutrition" size={50} style={{ marginLeft: -10 }} color="#8ACE91" />
                                            <Text style={[styles.activitySubtittle, { color: '#8ACE91' }]} >Nutrition</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'activity', viewType: 'pillar'})} style={[styles.subContent, { marginLeft: 10, marginRight: 10 }]}>
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

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'mindfulness', viewType: 'pillar'})} style={[styles.subContent, { marginRight: 10, marginLeft: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.mindfulnessImage }} >
                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Icon name="mindfulness" size={50} style={{ marginLeft: -10 }} color="#D4B870" />
                                            <Text style={[styles.activitySubtittle, { color: '#D4B870' }]} >Mindfulness</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList', { pillarName: 'coach', viewType: 'pillar'})} style={[styles.subContent, { marginLeft: 10, marginRight: 10 }]}>
                                        <View style={styles.image}>
                                            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: this.state.coachImage }} >
                                            </ImageBackground>
                                        </View>
                                        <View style={styles.activityContainer}>
                                            <Icon name="coach" size={40} style={{ marginLeft: -10 }} color="#454545" />
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
        flex: 8,
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

    buttonGroup: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
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