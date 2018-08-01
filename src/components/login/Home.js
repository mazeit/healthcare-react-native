import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.homeTittleContainer}>
                    <Image style={styles.homeTittle} source={require('../../../assets/images/homeTittle.png')} resizeMode='center'  />
                </View>
                <View style={styles.blankContainer}>
                </View>
                <View style={styles.subtittle}>
                    <Text style={{fontFamily:'DINPro-Bold', fontSize: 26, textAlign: 'center', color: '#ffffff'}}>MINDFULNESS</Text>
                    <Text style={{fontFamily:'DINPro-Medium', fontSize: 16, textAlign: 'center', color: '#ffffff'}}>Mit Achtsamkeit und einem bewussten Lebensgefühl zu mehr innerer Balance</Text>
                </View>
                <View style={styles.blankContainer}>
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
    homeTittleContainer: {
        flex: 1,
        top: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75%',
        width: '75%',
    },
    homeTittle: {
        resizeMode: 'center',
        flex: 1,
        width: width - 50
    },
    subTittle: {
        flex: 1,
        top: '-10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blankContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });