import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ContentOverview extends React.Component {
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
        <View style={{flex: 1}}>
            <View style={styles.navigationBar}>
                <Text style={{width: '40%',fontFamily: 'DINPro', fontSize: 16, textAlign: 'center', top: '25%'}}>SELECT YOUR TOPIC</Text>
            </View>
            <View style={styles.section1}>
                <View style={styles.nutrition}>
                    <Image style={styles.image} source={require('../../assets/images/nutrition.png')} />
                    <View style={styles.activityContainer}>
                        <Image style={{width: 34, height: 40}} source={require('../../assets/icons/nutrition.png')} />
                        <Text style={[styles.activitySubtittle,{ color: '#8ACE91' }]} onPress={() => this.navigate('homePage')}>Nutrition</Text>
                    </View>
                </View>
                <View style={styles.activity}>
                    <Image style={styles.image} source={require('../../assets/images/activity.png')} />
                    <View style={styles.activityContainer}>
                        <Image style={{width: 34, height: 40}} source={require('../../assets/icons/activity.png')}/>
                        <Text style={[styles.activitySubtittle,{ color: '#AE0069' }]} onPress={() => this.navigate('homePage')}>Activity</Text>
                    </View>
                </View>
            </View>
            <View style={styles.section2}>
                <View style={styles.mindfulness}>
                    <Image style={styles.image} source={require('../../assets/images/mindfulness.png')} />
                    <View style={styles.activityContainer}>
                        <Image style={{width: 34, height: 40}} source={require('../../assets/icons/mindfulness.png')} />
                        <Text style={[styles.activitySubtittle,{ color: '#D4B870' }]} onPress={() => this.navigate('homePage')}>Mindfulness</Text>
                    </View>
                </View>
                <View style={styles.coaching}>
                    <Image style={styles.image} source={require('../../assets/images/coaching.png')} />
                    <View style={styles.activityContainer}>
                        <Text style={[styles.activitySubtittle,{ color: '#454545' }]} onPress={() => this.navigate('homePage')}>Coaching</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    navigationBar: {
        flex: 1,
        backgroundColor: '#ffffff80',
        justifyContent: 'center',
        alignItems: 'center',

    },
    section1: {
        flex: 3,
        // margin: 10,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
    },
    section2: {
        flex: 3,
        // margin: 10,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
    },
    nutrition: {
        flex: 1,
        overflow: 'hidden',
        margin: 10,
        marginBottom: 5,
        marginRight: 5,
        backgroundColor: '#ffffff'
    },
    activity: {
        flex: 1,
        overflow: 'hidden',
        margin: 10,
        marginBottom: 5,
        marginLeft: 5,
        backgroundColor: '#ffffff'
    },
    mindfulness: {
        flex: 1,
        overflow: 'hidden',
        margin: 10,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: '#ffffff'
    },
    coaching: {
        flex: 1,
        overflow: 'hidden',
        margin: 10,
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: '#ffffff'
    },
    image: {
        resizeMode: 'cover',
        height: '80%',
        width: '100%',
    },
    activitySubtittle: {
        fontFamily: 'DINPro',
        fontSize: 18,
        textAlign: 'center',
    },
    activityContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
    },

  });