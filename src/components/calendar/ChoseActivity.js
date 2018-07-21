import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

import Header from '../Header';
import ActivityList from '../ActivityList';


export default class ChoseActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pillarData: this.props.navigation.state.params.pillarData,
            pillarName: this.props.navigation.state.params.pillarName,
            user_id: this.props.navigation.state.params.user_id,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={'CHOOSE YOUR ACTIVITY'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 9 }}>
                    <ActivityList navigation={this.props.navigation} goto={'Activity'}
                        data={this.state.pillarData} activityType='add'
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