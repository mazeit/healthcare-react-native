import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions, Switch } from 'react-native';

const {height, width} = Dimensions.get('window');


export default class ProfileNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.notification}>

                    <View style={ styles.notificationBlock }>
                    
                        <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545', marginTop: 10}}>My notification</Text>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545', marginBottom: 10}}>settings</Text>
                 
                        <View style={ styles.notificationContainer }>
                            <View style={{ flex: 1, alignItems: 'flex-start'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>Activity Reminder</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <Switch onValueChange={()=> this.setState({toggle: !this.state.toggle})} onTintColor={'#4AB3E2'} value={this.state.toggle}></Switch>   
                            </View>
                        </View>

                        <View style={ [styles.notificationContainer, { borderBottomWidth: 0 }] }>
                            <View style={{ flex: 7, alignItems: 'flex-start'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>Reminder for morning activities</Text>
                            </View>
                            <View style={{ flex: 3, alignItems: 'flex-end'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>7:00 AM</Text>   
                            </View>
                        </View>

                        <View style={ styles.notificationContainer }>
                            <View style={{ flex: 7, alignItems: 'flex-start'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>Reminder for afternoon activities</Text>
                            </View>
                            <View style={{ flex: 3, alignItems: 'flex-end'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>2:00 PM</Text>  
                            </View>
                        </View>

                        <View style={ styles.notificationContainer }>
                            <View style={{ flex: 1, alignItems: 'flex-start'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>Success/Motivation notification</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <Switch onTintColor={'#4AB3E2'}></Switch>   
                            </View>
                        </View>

                        <View style={ styles.notificationContainer }>
                            <View style={{ flex: 1, alignItems: 'flex-start'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>Quote of the day</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <Switch onTintColor={'#4AB3E2'}></Switch>   
                            </View>
                        </View>

                        <View style={ styles.notificationContainer }>
                            <View style={{ flex: 1, alignItems: 'flex-start'}}>
                                <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383'}}>News/Blog Posts</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                <Switch onTintColor={'#4AB3E2'}></Switch>   
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
      flex: 1,
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