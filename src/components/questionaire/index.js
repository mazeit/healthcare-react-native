import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Dimensions, ScrollView } from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

import Header from '../Header';

export default class QuestionarieIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'FRAGEBOGEN'} leftButton={false} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} notificationButton={false} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <ScrollView>
                        <View  style={styles.intro}> 
                            <Image source={require('../../../assets/icons/qintro.png')} style={{ width: 50, height: 61, marginTop: 20}} />

                            
                            <Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 20, alignItems: 'center', textAlign: 'center'}}>Es freut uns sehr, dass Livinflow Dein Interesse wecken konnten! </Text>



                            <View style={{ flex: 1, alignItems: 'center'}}>
                                <View style={[styles.textBlock, { marginTop: 0 }]}>
                                    <Text style={styles.textContent}>Damit wir Dir ein möglichst maßgeschneidertes Paket an Angeboten bereitstellen können, möchten wir Dich bitten, einige Angaben zu Dir und Deinem Leben, Deinem Lebensstil und Lebensgefühl zu beantworten. Die Beantwortung der Fragen wird etwa 15 min. in Anspruch nehmen. Es ist sehr wichtig, dass Du die Fragen in den nächsten zwei Tagen beantwortest, damit wir basierend auf Deinen Angaben, Dein individuelles Angebot erstellen können! 
                                    </Text>
                                    <Text style={styles.textContent}> Zunächst benötigen wir ein paar allgemeine Angaben von Dir:</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.props.navigation.navigate('OverviewStatus')}>
                                        <View style={{ backgroundColor: '#4AB3E2', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#FFFFFF' }}>Los gehts</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
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
        backgroundColor: '#F5F5F5',
    },


    intro: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    },

    textBlock: {
        flex: 8,
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: 20,
    },

    textContent: {
        fontFamily: 'DINPro-Light',
        fontSize: 16,
        color: '#838383',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        textAlign: 'center'
    },

});