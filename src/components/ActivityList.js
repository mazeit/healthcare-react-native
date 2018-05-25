import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');


export default class ActivityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => <View style={styles.categoryContainer}>
                        <View style={styles.subIcons}>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="fav" size={50} style={{ marginLeft: -10 }} color="#454545" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="plus" size={50} style={{ marginLeft: -10 }} color="#454545" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.goto)} style={styles.categoryDetails}>
                            <ImageBackground style={styles.category} source={require('../../assets/images/activity_image.png')}>
                                <ImageBackground style={styles.category} source={require('../../assets/images/activity_frame.png')}>
                                    {/* <Text>{item.key}</Text> */}
                                    <View style={{ margin: 10, flex: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#FFFFFF', }}>The tittle does it</Text>
                                    </View>
                                    <View style={{ margin: 10, marginTop: 0, flex: 1 }}>
                                        <Text style={{ fontFamily: 'DINPro', fontSize: 14, color: '#FFFFFF', }}>This can be a short description</Text>
                                        <Text style={{ fontFamily: 'DINPro', fontSize: 14, color: '#FFFFFF', }}>also with two or three lines</Text>
                                    </View>
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
        marginTop: 5,
        marginBottom: 5,
    },
    categoryContainer: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 100,
        margin: 5,
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
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

});