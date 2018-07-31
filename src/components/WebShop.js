import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, WebView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import { getCalendarData, getWelcome } from '../actions/index';
import LoaderWait from './LoaderWait';

const { height, width } = Dimensions.get('window');

class WebShop extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'WEBSHOP'} leftButton={false} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>
                    <WebView
                        style={{ flex: 1 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: 'http://livinflow.com/' }}
                    /> 
                </View>
            </View>
        );
    }

    componentWillUnmount() {
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 9
    },
});


export default connect(state => {
    const user = state.validUser.user || {};
    const calendarData = state.getData.calendarData || {};

    return {
        user,
        calendarData
    }
}
    , dispatch => {
        return bindActionCreators({ getCalendarData: getCalendarData, getWelcome }, dispatch)
    }
)(WebShop);

