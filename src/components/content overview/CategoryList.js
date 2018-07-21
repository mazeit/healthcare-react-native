import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Image, PanResponder, Animated } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

import ActivityList from '../ActivityList';
import Header from '../Header';
import { getPillarData, getMyFavorites, getSearchContent } from '../../actions/index';
import LoaderWait from '../LoaderWait';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSearch: true,

            viewType: this.props.navigation.state.params.viewType ? this.props.navigation.state.params.viewType : '',
            pillarName: this.props.navigation.state.params.pillarName ? this.props.navigation.state.params.pillarName : '',
            searchKey: this.props.navigation.state.params.searchKey ? this.props.navigation.state.params.searchKey : '',
            pillarData: [],
            loader: true,

        };
        this.showSearch = this.showSearch.bind(this);
        this.hideSearch = this.hideSearch.bind(this);
        this.replaceScreen = this.replaceScreen.bind(this);
        this.getSearchResult = this.getSearchResult.bind(this);
        
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

    getSearchResult() {
        if (this.state.searchKey) {
            this.setState({loader: true});
            this.props.getSearchContent(this.state.searchKey).then((pillarData) => {
                this.setState({ pillarData: pillarData['search'], loader: false })
            });   
        }
    }

    replaceScreen(params) {
        // this.props.navigation.dispatch({
        //     key: 'CategoryList',
        //     type: 'ReplaceCurrentScreen',
        //     params: params,
        // });

        // this.props.navigation.navigate('CategoryList', params);
    };

    componentDidMount() {
        if (this.state.viewType == 'pillar') {

            this.props.getPillarData(this.state.pillarName).then((pillarData) => {

                this.setState({ pillarData: pillarData[this.state.pillarName], loader: false })
            });
        } else if (this.state.viewType == 'fav') {
            this.props.getMyFavorites().then((pillarData) => {
                this.setState({ pillarData: pillarData['favorites'], loader: false })
            });   
        } else if (this.state.viewType == 'search') {
            this.props.getSearchContent(this.state.searchKey).then((pillarData) => {
                this.setState({ pillarData: pillarData['search'], loader: false })
            });   
        }
    }

    componentWillReceiveProps(nextProps) {
        

    }

    showSearch() {

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

        let {viewType, pillarName} = this.state;
        let title = 'CATEGORY'
        if (viewType == 'fav')
            title = 'MY FAVORITES';
        else if (viewType == 'search')
            title = 'SEARCH YOUR TOPIC';
        else if (viewType == 'pillar')
            title = pillarName.toUpperCase();
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={title} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                            </View>
                            <View style={styles.container}>
                                {/* <View style={[styles.search, { height }, { opacity }]} >
                                    <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 16, backgroundColor: '#FFFFFF', width: width - 40, height: 44 }} placeholder='Search' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/icons/search.png')} />
                                </View> */}
                                {viewType == 'search' && <View style={{flexDirection: 'row'}}>
                                    <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 16, backgroundColor: '#FFFFFF', width: width - 40}} placeholder='Search' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} value={this.state.searchKey} onChangeText={(text)=>this.setState({searchKey: text}) } />
                                    <Icon name="magnifyer" onPress={()=>{ this.getSearchResult() }} size={50} style={{ marginLeft: -10, backgroundColor: '#FFFFFF',}} color="#454545" />
                                </View>}

                                <ActivityList navigation={this.props.navigation} goto={'ContentDetail'}
                                    data={this.state.pillarData}
                                />

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
    },
    search: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },

});

export default connect(state => {
    const user = state.validUser.user || {};
    const pillarData = state.getData.pillarData || {};
    return {
        pillarData,
        user,
    }
}, dispatch => {
    return bindActionCreators({ getPillarData: getPillarData, getMyFavorites, getSearchContent }, dispatch)
}
)(CategoryList);