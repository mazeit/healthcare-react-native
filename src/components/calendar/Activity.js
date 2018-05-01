import React from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
// import Video from 'react-native-video';
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import icoMoonConfig from '../../selection.json';
// const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');

export default class Activity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paused: true,
        };
    }

    componentDidMount() {
        this.setState({paused: false})
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 3, }}>
                {/* <Icon name="fav_checked" size={80} color="#4AB3E2" /> */}
                    {/* <Video source={{uri: "https://content.jwplatform.com/players/8rxPJLsL-Qzd90UGq.html"}}
                    poster="https://assets-jpcust.jwpsrv.com/thumbs/l1VDr5QT-120.jpg"
                        rate={1}                              // 0 is paused, 1 is normal.
                        volume={1}                            // 0 is muted, 1 is normal.
                        muted={false}                           // Mutes the audio entirely.
                        paused={this.state.paused}                          // Pauses playback entirely.
                        resizeMode="contain"
                        style={{ flex: 1}}/> */}
                    <Image style={{ flex: 1, width:'100%' }} source={require('../../../assets/images/detoxYoga.png')} />
                </View>

                <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center', }}>

                    <View style={[styles.descriptionContainer, { flex: 3.5, marginTop: -50 }]}>
                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 22, color: '#454545', padding: 5, }}>Meditation for stress</Text>
                        <Text style={{ textAlign: 'center', fontFamily: 'DINPro', fontSize: 16, color: '#838383', padding: 5, paddingLeft: 10, paddingRight: 10 }}>Enjoy a healthier mind by developing your awareness of stress and learning how to reframe negative emotions</Text>
                    </View>

                    <View style={[styles.descriptionContainer, { flex: 3, marginTop: 10 }]}>
                        <View style={styles.subContainers}>
                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>Techniques: Body Scan / Visualization</Text>
                        </View>

                        <View style={[styles.subContainers, { flexDirection: 'row', borderTopWidth: 0.5, borderTopColor: '#E9E9E9', width: '85%' }]}>
                            <View style={styles.subContainers}>

                            </View>
                            <View style={styles.subContainers}>
                                <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>30:00</Text>
                            </View >
                            <View style={styles.subContainers}>
                                <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>Easy</Text>
                            </View >
                            <View style={styles.subContainers}>

                            </View>
                        </View>
                    </View>

                    <View style={[styles.descriptionContainer, { flex: 3.5, marginTop: 3, marginBottom: 10 }]}>
                        <View style={styles.subContainers}>
                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 18, color: '#838383', }}>This Session will be available in</Text>
                        </View>
                        <View style={[styles.subContainers, { paddingBottom: 20 }]}>
                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 28, color: '#4AB3E2', }}>21 hours 5 minutes</Text>
                        </View>
                    </View>

                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    descriptionContainer: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 20
    },
    subContainers: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
