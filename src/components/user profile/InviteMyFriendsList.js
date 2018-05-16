import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');
import Header from '../Header';

export default class InviteMyFriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'INVITE MY FRIENDS'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <View style={styles.message}>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 20, }}>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545' }}>Thank you for inviting</Text>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#4AB3E2' }}>friend5@gmail.com</Text>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545' }}>to livinflow.</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 30, }}>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383' }}>We sent your friend</Text>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383' }}>an invitation email.</Text>
                        </View>

                    </View>

                    <View style={styles.friendList}>

                        <ScrollView style={styles.friendListContainer}>

                            <View style={styles.informationContainer}>

                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 20 }}>

                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        <Image source={require('../../../assets/icons/clock.png')} style={{ flex: 2, width: 60, height: 60, marginLeft: -6, marginTop: 2 }} />
                                        <Text style={{ flex: 8, fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', }}>21. April 2017</Text>
                                    </View>

                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383' }}>friend1@gmail.com</Text>
                                    </View>

                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end', marginBottom: 20 }}>
                                    <TouchableOpacity>
                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 132, height: 28, borderRadius: 28, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 14, color: '#4AB3E2' }}>Send reminder</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </ScrollView>

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
        backgroundColor: '#F5F5F5',
    },
    message: {
        width: width - 20,
        backgroundColor: '#FFFFFF',
        height: 200,
        alignItems: 'center',
    },

    friendList: {
        // flex: 1,
        height: 75,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 10
    },
    friendListContainer: {
        flex: 1,
        width: width - 20,
    },
    informationContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        // marginBottom: 20,
        marginTop: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});