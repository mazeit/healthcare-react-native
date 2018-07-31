import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions, Switch } from 'react-native';

const { height, width } = Dimensions.get('window');
import Header from '../Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNotificationInfo, updateNotificationInfo } from '../../actions';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from 'react-native-modal-datetime-picker';

import LoaderWait from '../LoaderWait';
import moment from 'moment';
class ProfileNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            userNotfi: null,
            loader: false,


            isMorningActivityVisible: false,
            isAfternoonActivityVisible: false,
        };
        this.updateNotificationInfo = this.updateNotificationInfo.bind(this);
    }

    updateNotificationInfo(info) {
        this.props.updateNotificationInfo(info).then(res=>{
            console.log(res);
        })
    }

    componentDidMount() {
        // this.props.getNotificationInfo().then((res)=>{
        //     this.setState({userNotfi: res.notifications, loader: false});

        // });
    }

    render() {
        if (this.state.loader) {
            return (<View style={{ flex: 1 }}>
                        <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View>
                    </View>);
        }
        let {notifiInfo} = this.props;
        console.log(notifiInfo);
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'NOTIFICATION'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <View style={styles.notification}>

                        <View style={styles.notificationBlock}>

                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 10 }}>My notification</Text>
                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginBottom: 10 }}>settings</Text>

                            <View style={styles.notificationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383' }}>Activity quote</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Switch onValueChange={() => this.updateNotificationInfo({ reminder: notifiInfo.reminder == 0 ? 1 :0 })} onTintColor={'#4AB3E2'} value={notifiInfo.reminder==0 ? false : true}></Switch>
                                </View>
                            </View>

                            <View style={[styles.notificationContainer, { borderBottomWidth: 0 }]}>
                                <View style={{ flex: 7, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383' }}>Reminder for morning activities</Text>
                                </View>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>

                                    <DateTimePicker
                                        date={notifiInfo.morning_reminder_time ? new Date(notifiInfo.morning_reminder_time) : new Date()}
                                        mode={'time'}
                                        isVisible={this.state.isMorningActivityVisible}
                                        onConfirm={(value)=>{console.log(value); this.updateNotificationInfo({morning_reminder_time: moment(value).format('YYYY-MM-DD HH:mm:ss')}); this.setState({isMorningActivityVisible: false}); }}
                                        onCancel={()=>this.setState({isMorningActivityVisible: false})}
                                    />
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#4AB3E2' }} onPress={()=>this.setState({isMorningActivityVisible: true}) }>{notifiInfo.morning_reminder_time ? moment(notifiInfo.morning_reminder_time).format('HH:mm') : moment().format('HH:mm')}</Text>
                                </View>
                            </View>

                            <View style={styles.notificationContainer}>
                                <View style={{ flex: 7, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383' }}>Reminder for afternoon activities</Text>
                                </View>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    

                                    <DateTimePicker
                                        date={notifiInfo.evening_reminder_time ? new Date(notifiInfo.evening_reminder_time) : new Date()}
                                        mode={'time'}
                                        isVisible={this.state.isAfternoonActivityVisible}
                                        onConfirm={(value)=>{this.updateNotificationInfo({evening_reminder_time:  moment(value).format('YYYY-MM-DD HH:mm:ss')}); this.setState({isAfternoonActivityVisible: false}); }}
                                        onCancel={()=>this.setState({isAfternoonActivityVisible: false})}
                                    />
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#4AB3E2' }} onPress={()=>this.setState({isAfternoonActivityVisible: true}) }>{notifiInfo.evening_reminder_time ? moment(notifiInfo.evening_reminder_time).format('hh:mm') : moment().format('hh:mm')}</Text>
                                </View>
                            </View>

                            <View style={styles.notificationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383' }}>Success/Motivation notification</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Switch onValueChange={() => this.updateNotificationInfo({ motivation: notifiInfo.motivation == 0 ? 1 :0 })} onTintColor={'#4AB3E2'} value={notifiInfo.motivation==0 ? false : true}></Switch>
                                </View>
                            </View>

                            <View style={styles.notificationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383' }}>Quote of the day</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Switch onValueChange={() => this.updateNotificationInfo({ quote: notifiInfo.quote == 0 ? 1 :0 })} onTintColor={'#4AB3E2'} value={notifiInfo.quote==0 ? false : true}></Switch>
                                </View>
                            </View>

                            <View style={styles.notificationContainer}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383' }}>News/Blog Posts</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Switch onValueChange={() => this.updateNotificationInfo({ news: notifiInfo.news == 0 ? 1 :0 })} onTintColor={'#4AB3E2'} value={notifiInfo.news==0 ? false : true}></Switch>
                                </View>
                            </View>

                        </View>

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },


    notification: {
        flex: 1,
        margin: 10,
    },
    notificationBlock: {
        flex: 1,
        width: width - 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        alignItems: 'center',
    },

    notificationContainer: {
        marginLeft: 10,
        marginRight: 10,
        height: 55,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
    },
});



export default connect(state => {
    const notifiInfo = state.validUser.notifiInfo || {};
    return {
        notifiInfo,
    }
}, dispatch => {
    return bindActionCreators({ getNotificationInfo, updateNotificationInfo }, dispatch)
})(ProfileNotification)
