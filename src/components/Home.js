import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.navigate = this.navigate.bind(this);
    }

    navigate(name) {
        this.props.navigator.push({
          name
        })
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.homeTittleContainer}>
                    <Image style={styles.homeTittle} source={require('../../assets/images/homeTittle.png')} />
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
        height: '100%',
        width: '100%',
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