import React from 'react';
import { Text, View, Dimensions, Image, StyleSheet, WebView,TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import Video from 'react-native-video';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
// import Video from 'react-native-video';


import { getCalendarData } from '../../actions/index'


const { height, width } = Dimensions.get('window');
import Header from '../Header';




class Activity extends React.Component {
    constructor(props) {
        super(props);
        // console.log('.......ID.....', this.props.navigation.state.params.data);
        this.state = {
            activityData: this.props.navigation.state.params.data,
            activityType: this.props.navigation.state.params.activityType,
            type: '',
            paused: false,

        };
        this.openDatePrefrence = this.openDatePrefrence.bind(this);
    }

    componentDidMount() {
    
    }
    componentWillReceiveProps (nextProps) {
        console.log('.......',nextProps)
        // if(nextProps.CalendarDataResponse.hasError === false) {
            // this.props.navigation.navigate('CalendarView', {id_content:this.state.activityData.id,event: this.state.activityData.name,})
        // }else if(nextProps.CalendarDataResponse.hasError === true ) {
            // console.log('......ERROR.....', nextProps.activityData.errors)
        // }
    }


    openDatePrefrence () {
        
    }



    render() {



        const add = <View style={{ flex: 1 }}>
            <View style={styles.subContainers}>
                <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 18, color: '#838383', }}>Add this session to your challenge</Text>
            </View>
            <TouchableOpacity onPress={() => this.openDatePrefrence()} style={[styles.subContainers, { paddingBottom: 20, flexDirection: 'row' }]}>
                <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Add</Text>
                </View>
            </TouchableOpacity>
        </View>

        const locked =
            <View style={{ flex: 1 }}>
                <View style={styles.subContainers}>
                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 18, color: '#838383', }}>This Session will be available in</Text>
                </View>
                <View style={[styles.subContainers, { paddingBottom: 20 }]}>
                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 28, color: '#4AB3E2', }}>21 hours 5 minutes</Text>
                </View>
            </View>

        const open =
            <View style={{ flex: 1 }}>
                <View style={styles.subContainers}>
                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 18, color: '#838383', }}>Change your challenge</Text>
                </View>
                <View style={[styles.subContainers, { paddingBottom: 20, flexDirection: 'row' }]}>
                    <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 110, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5, margin: 5 }}>

                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>1  Day</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 110, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5, margin: 5 }}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>1 Day</Text>
                    </View>
                </View>
            </View>

        const demo = {
            'open': open,
            'locked': locked,
            'add': add
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={'CATEGORY'} leftButton={true} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 3, }}>
                        {
                            this.state.activityData.file_id !== '' ?
                                <WebView
                                    style={{ flex: 1 }}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{ uri: 'https://content.jwplatform.com/players/' + this.state.activityData.file_id + '-Qzd90UGq.html' }}
                                /> :
                                <Image source={require('../../../assets/images/no_video.png')} style={{ width: '100%', height: '100%', }} />
                        }
                    </View>

                    <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center', }}>

                        <View style={[styles.descriptionContainer, { flex: 3.5, marginTop: -50 }]}>
                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Medium', fontSize: 22, color: '#454545', padding: 5, }}>{this.state.activityData.name}</Text>
                            <Text style={{ textAlign: 'center', fontFamily: 'DINPro', fontSize: 16, color: '#838383', padding: 5, paddingLeft: 10, paddingRight: 10 }}>{this.state.activityData.description}</Text>
                        </View>

                        <View style={[styles.descriptionContainer, { flex: 3, marginTop: 10 }]}>
                            <View style={styles.subContainers}>
                                <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>Techniques: Body Scan / Visualization</Text>
                            </View>

                            <View style={[styles.subContainers, { flexDirection: 'row', borderTopWidth: 0.5, borderTopColor: '#E9E9E9', width: '85%' }]}>
                                <View style={styles.subContainers}>

                                </View>
                                <View style={[styles.subContainers, { flexDirection: 'row' }]}>
                                    <Icon name='time' size={50} color="#838383" />
                                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', marginLeft: -10 }}>{this.state.activityData.lange}:00</Text>
                                </View >
                                <View style={[styles.subContainers, { flexDirection: 'row' }]}>
                                    {this.state.activityData.pillar !== 'coach' && <Icon name={this.state.activityData.pillar} size={80} color="#838383" />}
                                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>Easy</Text>
                                </View >
                                <View style={styles.subContainers}>

                                </View>
                            </View>
                        </View>
                        <View style={[styles.descriptionContainer, { flex: 3.5, marginTop: 3, marginBottom: 10 }]}>

                            {demo[this.state.activityType]}

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

export default connect(state => {
    const getCalendarDataResponse = state.getData.getCalendarDataResponse || '';
    return {
        CalendarDataResponse,

    }
}, dispatch => {
    return bindActionCreators({ getCalendarData: getCalendarData }, dispatch)
}
)(Activity);


