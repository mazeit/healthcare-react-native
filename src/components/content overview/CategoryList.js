import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Image, Animated, PanResponder } from 'react-native';

const { height, width } = Dimensions.get('window');

import ActivityList from '../ActivityList';
import Header from '../Header';


export default class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            outputRange: [0, 44]
        });
        const opacity = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });


        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={'CATEGORY'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container} {...this._panResponder.panHandlers}>
                    <Animated.View style={[styles.search, { height }, { opacity }]} >
                        <TextInput style={{ fontFamily: 'DINPro', fontSize: 16, backgroundColor: '#FFFFFF', width: width - 40, height: 44 }} placeholder='Search' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                        <Image style={{ width: 20, height: 20 }} source={require('../../../assets/icons/search.png')} />
                    </Animated.View>

                    <ActivityList navigation={this.props.navigation}  goto={'Recipe'}
                        data={[
                            { key: 'Devin' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                    />

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
    },
    search: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },

});