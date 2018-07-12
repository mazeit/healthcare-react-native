import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const { height, width } = Dimensions.get('window');
import Header from '../Header';

const myAccountSubHeading = ['User name', 'First name', 'Last name', 'Address', 'Postal', 'City', 'Email address', 'Active challenge', 'Language'];
const personalDetailSubHeading = ['Goal', 'Age', 'Weight'];


class ProfileInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myAccountSubHeadingDetails : [this.props.user.firstname + ' ' + this.props.user.lastname, this.props.user.firstname, this.props.user.lastname, this.props.user.country, this.props.user.geoloc_postcode, this.props.user.geoloc_id_state, this.props.user.email, this.props.user.activated, this.props.user.id_lang],
            personalDetailSubHeadingDetails: [this.props.user.goal, this.props.user.birthday, this.props.user.weight],
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'MY PROFILE'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <View style={styles.profilePicture}>
                        <ImageBackground style={styles.profilePictureBlur} source={{uri: this.props.user.img_dir}} blurRadius={15}>
                            <View style={{ width: 133, height: 133, borderWidth: 0.5, borderColor: '#FFFFFF', borderRadius: 133, overflow: 'hidden', marginBottom: 20 }}>
                                <Image source={{uri: this.props.user.img_dir}} style={{ width: 133, height: 133, }} />
                            </View>
                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 18, color: '#4AB3E2' }}>Change Profile</Text>
                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 18, color: '#4AB3E2' }}>Picture</Text>
                        </ImageBackground>
                    </View>

                    <ScrollView style={styles.profileInformaton}>

                        <View style={styles.myAccount}>
                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 22, color: '#454545', marginTop: 10 }}>My</Text>
                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 22, color: '#454545', marginBottom: 10 }}>Account</Text>
                            {
                                myAccountSubHeading.map((item, i) =>
                                    <View key={i} style={styles.informationContainer}>
                                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{item}</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.myAccountSubHeadingDetails[i]}</Text>
                                        </View>
                                    </View>
                                )
                            }

                        </View>
                        <View style={styles.personelDetails}>
                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 22, color: '#454545', marginBottom: 10, marginTop: 10 }}>Personal details</Text>
                            {
                                personalDetailSubHeading.map((item, i) =>
                                    <View key={i} style={styles.informationContainer}>
                                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{item}</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383' }}>{this.state.personalDetailSubHeadingDetails[i]}</Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>

                    </ScrollView>

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
    profilePicture: {
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePictureBlur: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInformaton: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    myAccount: {
        flex: 1,
        width: width - 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    personelDetails: {
        flex: 1,
        width: width - 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#838383',
        height: 55,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});

export default connect(state => {
    const user = state.validUser.user || {};
    return {
        user,
    }
})(ProfileInformation)