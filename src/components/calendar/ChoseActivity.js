import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

import Header from '../Header';
import ActivityList from '../ActivityList';


export default class ChoseActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={'CHOOSE YOUR ACTIVITY'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.screenProps.rootNavigation} />
                </View>
                <View style={{ flex: 9 }}>
                    <ActivityList navigation={this.props.navigation} goto={'Activity'}
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
        flex: 1,
    },

});