import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const { height, width } = Dimensions.get('window');


export default class AddActivityCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5', width: width, }}>

                    <TouchableOpacity style={styles.categoryContainer}>
                        <ImageBackground style={styles.category} source={require('../../../assets/images/add_nutrition.png')}>
                            <Text style={styles.text}>Nutrition</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer}>
                        <ImageBackground style={styles.category} source={require('../../../assets/images/add_activity.png')}>
                            <Text style={styles.text}>Activity</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer}>
                        <ImageBackground style={styles.category} source={require('../../../assets/images/add_mindfullness.png')}>
                            <Text style={styles.text}>Mindfullness</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.categoryContainer, { marginBottom: 10 }]}>
                        <ImageBackground style={styles.category} source={require('../../../assets/images/add_coaching.png')}>
                            <Text style={styles.text}>Coaching</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View style={styles.contentSubBlock}>

                </View>

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
    contentSubBlock: {
        flex: 1,
        width: width,
        backgroundColor: '#00000080',

    },
    text: {
        fontFamily: 'DINPro',
        fontSize: 22,
        color: '#FFFFFF',
        alignSelf: 'flex-start',
        marginLeft: 20,
    }

});