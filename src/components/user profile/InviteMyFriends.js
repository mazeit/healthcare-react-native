import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');


export default class InviteMyFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inviteFriendContainer}>

                    <View style={styles.inviteFriendContent}>

                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Image source={require('../../assets/icons/people_selected.png')} style={{ width: 108, height: 108, flex: 1 }} />
                                <Image source={require('../../assets/icons/people_selected.png')} style={{ width: 108, height: 108, flex: 1 }} />
                                <Image source={require('../../assets/icons/people_unselected.png')} style={{ width: 108, height: 108, flex: 1 }} />
                            </View>
                            <View style={{ flex: 1 }}></View>
                        </View>

                        <View style={{ flex: 2, alignItems: 'flex-start', marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontFamily: 'DINPro', fontSize: 16, color: '#838383', }}>You have already successfully invited 2 friends. One more and you get one challenge for free.</Text>
                        </View>

                        <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                            <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 24, marginBottom: 40 }} placeholder='First name' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                            <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 24, marginBottom: 40 }} placeholder='Last name' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                            <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 24 }} placeholder='Email address' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} />
                        </View>

                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#4AB3E2', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52 }}>
                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Send Invitation</Text>
                                </View>
                            </TouchableOpacity>
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
        backgroundColor: '#F5F5F5',
    },


    inviteFriendContainer: {
        flex: 1,
        margin: 10,
        width: width - 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    inviteFriendContent: {
        flex: 1,
        margin: 10,
        marginLeft: 20,
        marginRight: 10,

    },
});