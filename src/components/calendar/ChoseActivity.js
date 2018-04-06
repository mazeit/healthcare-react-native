import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';

const { height, width } = Dimensions.get('window');


export default class ChoseActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <View style={styles.categoryContainer}>
                                                <View style={styles.subIcons}>
                                                    <TouchableOpacity style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                                        <Image source={require('../../../assets/icons/add.png')} style={{ width: 10, height: 10, resizeMode: 'center', marginTop: 10 }} />
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                                        <Image source={require('../../../assets/icons/add.png')} style={{ width: 10, height: 10, resizeMode: 'center', marginBottom: 10 }} />
                                                    </TouchableOpacity>
                                                </View>
                                                <TouchableOpacity style={styles.categoryDetails}>
                                                    <ImageBackground style={styles.category} source={require('../../../assets/images/demo.png')}>
                                                        <ImageBackground style={styles.category} source={require('../../../assets/images/nutrition_frame.png')}>
                                                            <Text>{item.key}</Text>
                                                        </ImageBackground>
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                            </View>
                                }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 100,
        margin: 3,
    },
    categoryDetails: {
        width: width - 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subIcons: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 3,
        marginBottom: 3,
        height: 100,
    },
    category: {
        flex: 1,
        width: width - 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

});