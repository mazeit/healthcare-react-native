import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const myAccountSubHeading = ['User name', 'First name', 'Last name', 'Address', 'Postal', 'City', 'Email address', 'Active challenge', 'Language' ];
const personalDetailSubHeading=  ['Goal', 'Age', 'Weight'];


export default class ProfileInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={ styles.profilePicture }>
                    <ImageBackground style={styles.profilePictureBlur} source={require('../../assets/images/profilePicture.png')} blurRadius={15}>
                        <View style={{ width: 133, height: 133, borderWidth: 0.5, borderColor: '#FFFFFF', borderRadius: 133, overflow: 'hidden', marginBottom: 20}}>
                            <Image source={require('../../assets/images/profilePicture.png')} style={{ width: 133, height: 133, }}/>
                        </View>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#4AB3E2'}}>Change Profile</Text>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#4AB3E2'}}>Picture</Text>
                    </ImageBackground>
                </View>

                <ScrollView style={styles.profileInformaton}>

                    <View style={ styles.myAccount }>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545', marginTop: 10}}>My</Text>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545', marginBottom: 10}}>Account</Text>
                        {
                            myAccountSubHeading.map((item, i) => 
                                <View key={i} style={ styles.informationContainer }>
                                    <View style={{ flex: 1, alignItems: 'flex-start'}}>
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>{item}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end'}}>
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Value</Text>   
                                    </View>
                                </View>
                            )
                        }
                        
                    </View>
                    <View style={ styles.personelDetails }>
                        <Text style={{ fontFamily: 'DINPro', fontSize: 22, color: '#454545', marginBottom: 10, marginTop: 10 }}>Personal details</Text>
                        {   
                            personalDetailSubHeading.map((item, i) => 
                                <View key={i} style={ styles.informationContainer }>
                                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>{item}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#838383'}}>Value</Text>   
                                    </View>
                                </View>
                            )
                        }
                    </View>
        
                </ScrollView>
                
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