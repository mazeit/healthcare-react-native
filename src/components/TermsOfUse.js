import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

const {height, width} = Dimensions.get('window');


export default class TermsOfUse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={ styles.termsOfUse }>
                                        
                    <Text style={{ height: 26, fontFamily: 'DINPro', fontSize: 22, color: '#454545', marginTop: 20, marginLeft: 20}}>Terms of use</Text>

                    <ScrollView style={ styles.termsOfUseBlock }>

                        <View style={ [styles.textBlock, {marginTop: 0}] }>
                            <Text style={ styles.textContent }>You become a registered user of the Service and create a Service account (“Account”) by (i) using your personal unique email address and giving other information required; or (ii) by using the available single sign-on via Facebook.</Text>
                        </View>

                        <View style={ styles.textBlock }>
                            <Text style={ styles.textContent }>1. Rights & Obligations</Text>
                        </View>

                        <View sstyle={ styles.textBlock }>
                            <Text style={ styles.textContent }>The Service is licensed to you for your personal and non-commercial use only. Your use of the Service might be governed also by separate policies, as provided in connection with such services. Each individual User shall only create one (1) Account. When attending yoga classes through the Service You shall always wear proper exercise clothing. Asana Rebel grants to you a limited, non-exclusive, non-sublicensable and non-transferable right to use only the executable version (no source code) of the Service application for your private use. The Service comprises the relevant application that enables you to use the Service. You affirm that you have not been previously suspended or removed from the Service. You may not sell or charge others for the right to use Your Account, or otherwise transfer Your Account.</Text>
                        </View>

                        <View style={ styles.textBlock }>
                            <Text style={ styles.textContent }>2. Copyright</Text>
                        </View>

                        <View style={ styles.textBlock }>
                            <Text style={ styles.textContent }>You may interact with yoga instructors or users through the Service and submit messages, connect with friends or comment, like or share posts and/or other content to the Service (“User Content”).</Text>
                        </View>

                    </ScrollView>
                    
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
    
    
    termsOfUse: {
        flex: 1,
        margin: 10,
        width: width - 20,
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    termsOfUseBlock: {
        flex: 1,
        margin: 10,
        marginLeft: 20,
        marginRight: 10,

    },
    textBlock: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    textContent: {
        fontFamily: 'DINPro',
        fontSize: 16,
        color: '#838383',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
    },
  });