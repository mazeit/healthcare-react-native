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

export default class StatusItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {item, asHeader, navigation} = this.props;
        return (
            <TouchableOpacity onPress={() => { !asHeader && navigation.navigate('QuestionStep', {data: item})}}>
                <View style={styles.categoryContainer}>
                    <View style={{flexDirection: 'row', height: 80}}>
                        <Image style={{width: 80, height: 80}} source={item.img} />
                            
                        <View style={[styles.textSection, {backgroundColor: !!asHeader ? '#FFFFFF' : item.back}]}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
                                <Icon name={item.icon} size={80} color={item.color} />
                                <Text style={{ fontFamily: 'DINPro-Light',color: item.color, fontSize: 18, fontWeight: 'bold' }} >{item.text}</Text>
                            </View>
                            <Text style={{ fontFamily: 'DINPro-Light',color: item.color , fontSize: 14}} >
                                <Text style={{fontWeight: 'bold'}}>{item.current+ ' '}</Text>
                                 von 
                                 <Text style={{fontWeight: 'bold'}}>{item.total}</Text>
                            </Text>
                        </View>

                    </View>
                    

                    {item.current > 0 && !asHeader && <View style={{height: 5, width: '100%', flexDirection: 'row', backgroundColor: item.back}}>
                        <View style={{backgroundColor: item.color, width: item.current/item.total*100 + '%'}}>
                        </View>
                    </View>}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        width: width - 20,
        flexDirection: 'column',
        marginBottom: 5,
    },

    textSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        padding: 20,
        paddingLeft: 0,
    },

    categoryDetails: {
        width: width - 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

});