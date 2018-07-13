import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');

import Header from '../Header';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import LoaderWait from '../LoaderWait';

import StatusItem from './StatusItem';

class OverviewStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: [
                { key: 'personal', icon: 'nutrition', color: '#4ab3e2' , text: 'Perssonal', back: '#e2f4fa', current: 4, total: 12, img: require('../../../assets/images/q-personal.png')},
                { key: 'nutrition', icon: 'nutrition', color: '#8ACE91', text: 'Nutrition', back: '#e1f2e2', current: 4, total: 20, img: require('../../../assets/images/q-nutrition.png')},
                { key: 'mindfulness', icon: 'mindfulness', color: '#D4B870', text: 'Mindfulness', back: '#f4ead6', current: 2, total: 7, img: require('../../../assets/images/q-mindfulness.png')},

                { key: 'activity', icon: 'activity', color: '#AE0069', text: 'Activity', back: '#f0d1e4', current: 4, total: 7, img: require('../../../assets/images/q-activity.png')},
                { key: 'coach', icon: 'activity', color: '#454545' , text: 'Coaching', back: '#e1e1e1', current: 4, total: 7, img: require('../../../assets/images/q-coach.png')},
                { key: 'allgemein', icon: 'activity', color: '#ea6b57' , text: 'Allgemein', back: '#fce7e5', current: 4, total: 7, img: require('../../../assets/images/q-allgemein.png')},
            ]
        };
    }

    render() {
        const {listData} = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={'FRAGEBOGEN'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 9 }}>
                    

                    <View style={styles.subContainer}>
                        {
                            this.state.loader ?
                                <View style={{ flex: 1, backgroundColor: '#FFFFFF', width: width }}><LoaderWait /></View> :
                                <View style={{ flex: 1 }}>
                                    <FlatList
                                        data={listData}
                                        keyExtractor={( item, index) => item.key}
                                        renderItem={({ item, index }) =>
                                            <StatusItem item={item} asHeader={false} navigation={this.props.navigation}/>
                                        }
                                    />
                                </View>
                        }

                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        width: width,
        backgroundColor: '#FFFFFF',
    },

});

export default connect(state => {
    const user_id = state.validUser.user.id || '';
    return {
        user_id,
    }
}, dispatch => {
    return bindActionCreators({ }, dispatch)
})(OverviewStatus);