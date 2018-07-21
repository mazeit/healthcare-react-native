import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShakingText from 'react-native-shaking-text';

const { height, width } = Dimensions.get('window');
import Header from '../Header';
import { getInvitedFriendsData, inviteFriend } from '../../actions/index';

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class InviteMyFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendFirstName: '',
            friendLastName: '',
            friendEmail: '',
            invitedFriends: 0,
            firstNameError: '',
            lastNameError: '',
            emailError: '',
        };
        this.sendInvitation = this.sendInvitation.bind(this);
        
    }


    componentDidMount() {

        this.props.getInvitedFriendsData().then(invitedFriendData=>{

            this.setState({ invitedFriends: ((invitedFriendData.result.length >= 3) ? 3 :(invitedFriendData.result.length  % 3) ) })
        });
    }

    componentWillReceiveProps(nextProps) {
    }

    sendInvitation() {
        if (this.state.friendFirstName === '' || this.state.friendLastName === '' || this.state.friendEmail === '' || !re.test(this.state.friendEmail)) {
            if (this.state.friendFirstName === '') this.setState({ firstNameError: 'First name cannot be blank' })
            if (this.state.friendLastName === '') this.setState({ lastNameError: 'Last name cannot be blank' })
            if (this.state.friendEmail === '') this.setState({ emailNameError: 'Email cannot be blank' })
            if (!re.test(this.state.friendEmail)) this.setState({ emailError: 'Please enter valid email' })
        } else {
            this.props.inviteFriend(this.state.friendFirstName, this.state.friendLastName, this.state.friendEmail).then(res=>{

                this.props.navigation.navigate('InviteMyFriendsList', {invitedFriend: this.state.friendEmail});
            });
            
        }
    }

    

    render() {
        
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'INVITE MY FRIENDS'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <View style={styles.inviteFriendContainer}>

                        <View style={styles.inviteFriendContent}>

                            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flex: 1 }}></View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <Icon name="people" size={90} color={this.state.invitedFriends >= 1 ? "#4AB3E2" : "#838383"} />
                                    <Icon name="people" size={90} color={this.state.invitedFriends >= 2 ? "#4AB3E2" : "#838383"} />
                                    <Icon name="people" size={90} color={this.state.invitedFriends >= 3 ? "#4AB3E2" : "#838383"} />
                                </View>
                                <View style={{ flex: 1 }}></View>
                            </View>

                            <View style={{ flex: 2, alignItems: 'flex-start', marginTop: 10, marginBottom: 10 }}>
                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>You have already successfully invited {this.state.invitedFriends} friends. {3 - this.state.invitedFriends} more and you get one challenge for free.</Text>
                            </View>

                            <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: 'red', }}>
                                    {this.state.firstNameError}
                                </ShakingText>
                                <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 24, marginBottom: 40, width: '90%' }} onChangeText={(text) => this.setState({ friendFirstName: text })} underlineColorAndroid='rgba(0,0,0,0)' placeholder='First name' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} onBlur={() => { if (this.state.friendFirstName === '') this.setState({ firstNameError: 'First name cannot be blank' }) }} />


                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: 'red', }}>
                                    {this.state.lastNameError}
                                </ShakingText>
                                <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 24, marginBottom: 40, width: '90%' }} onChangeText={(text) => this.setState({ friendLastName: text })} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Last name' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} onBlur={() => { if (this.state.friendLastName === '') this.setState({ lastNameError: 'Last name cannot be blank' }) }} />

                                <ShakingText style={{ fontFamily: 'DINPro-Light', fontSize: 16, width: '90%', top: '5%', color: 'red', }}>
                                    {this.state.emailError}
                                </ShakingText>
                                <TextInput style={{ fontFamily: 'DINPro-Light', fontSize: 24, width: '90%' }} onChangeText={(text) => this.setState({ friendEmail: text })} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Email address' placeholderTextColor={'#454545'} autoCapitalize='none' autoCorrect={false} onBlur={() => { if (this.state.friendEmail === '') this.setState({ emailNameError: 'Email cannot be blank' }); if (!re.test(this.state.friendEmail)) this.setState({ emailError: 'Please enter valid email' }); }} />


                            </View>

                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <TouchableOpacity onPress={() => this.sendInvitation()}>
                                    <View style={{ backgroundColor: '#4AB3E2', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Send Invitation</Text>
                                    </View>
                                </TouchableOpacity>
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

export default connect(state => {
    const user_id = state.validUser.user.id || '';
    const invitedFriendData = state.getData.invitedFriendData || {};
    const inviteFriendSuccess = state.addUser.inviteFriendSuccess || {};
    return {
        user_id,
        invitedFriendData,
        inviteFriendSuccess,
    }
}, dispatch => {
    return bindActionCreators({ getInvitedFriendsData: getInvitedFriendsData, inviteFriend: inviteFriend }, dispatch)
})(InviteMyFriends);