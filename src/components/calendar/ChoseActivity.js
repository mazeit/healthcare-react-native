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
                    renderItem={({item}) => <TouchableOpacity style={styles.categoryContainer}>
                                                <ImageBackground style={styles.category} source={require('../../../assets/images/demo.png')}>
                                                    <Image source={require('../../../assets/images/nutrition_frame.png')} style={{ height: 100 }} />
                                                    {/* <Text>{item.key}</Text> */}
                                                </ImageBackground>
                                            </TouchableOpacity>}
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
        margin: 3,
    },
    category: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

});