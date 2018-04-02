import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ContentOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#F5F5F5',}}>

            <View style={styles.section1}>
                <View style={styles.nutrition}>
                    <Image style={styles.image} source={require('../../../assets/images/nutrition.png')} />
                    <View style={styles.activityContainer}>
                        <Image style={{width: 34, height: 40}} source={require('../../../assets/icons/nutrition.png')} />
                        <Text style={[styles.activitySubtittle,{ color: '#8ACE91' }]} >Nutrition</Text>
                    </View>
                </View>
                <View style={styles.activity}>
                    <Image style={styles.image} source={require('../../../assets/images/activity.png')} />
                    <View style={styles.activityContainer}>
                        <Image style={{width: 34, height: 40}} source={require('../../../assets/icons/activity.png')}/>
                        <Text style={[styles.activitySubtittle,{ color: '#AE0069' }]} >Activity</Text>
                    </View>
                </View>
            </View>
            <View style={styles.section2}>
                <View style={styles.mindfulness}>
                    <Image style={styles.image} source={require('../../../assets/images/mindfulness.png')} />
                    <View style={styles.activityContainer}>
                        <Image style={{width: 34, height: 40}} source={require('../../../assets/icons/mindfulness.png')} />
                        <Text style={[styles.activitySubtittle,{ color: '#D4B870' }]} >Mindfulness</Text>
                    </View>
                </View>
                <View style={styles.coaching}>
                    <Image style={styles.image} source={require('../../../assets/images/coaching.png')} />
                    <View style={styles.activityContainer}>
                        <Text style={[styles.activitySubtittle,{ color: '#454545' }]} >Coaching</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}
}

const styles = StyleSheet.create({
    
    section1: {
        flex: 1,
        flexDirection: 'row',
    },
    section2: {
        flex: 1,
        flexDirection: 'row',
    },
    nutrition: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mindfulness: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coaching: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 71,
    },

  });