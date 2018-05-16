import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');
import Header from '../Header';

export default class HelpFaq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: '-90deg',
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'HELP & FAQ'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <ScrollView style={styles.helpFaqContainer}>

                        <View style={[styles.termsOfUseBlock, { marginTop: 0 }]}>

                            <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center' }}>Do you have issues with your app or your challenge? These answers here might help you:</Text>

                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                            <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>How can i buy a new challenge</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <Image style={{ width: 20, height: 20, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                            <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>Who to contact ?</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <Image style={{ width: 20, height: 20, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                            <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>How to become a partner ?</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <Image style={{ width: 20, height: 20, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                            <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>How to get medical information ?</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <Image style={{ width: 20, height: 20, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                            <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>How can i invite friends ?</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <Image style={{ width: 20, height: 20, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                            <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>How does the app works ?</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <Image style={{ width: 20, height: 20, transform: [{ rotateZ: this.state.rotate }] }} source={require('../../../assets/icons/little_arrow_grey.png')} />
                            </View>

                        </TouchableOpacity>

                        <View style={[styles.termsOfUseBlock, { flexDirection: 'column', height: 309 }]}>

                            <Text style={{ flex: 1, height: 66, fontFamily: 'DINPro', fontSize: 18, color: '#838383', margin: 20, marginBottom: 0, textAlign: 'center' }}>No answer to your question? Be free to contact our support team for a personal assistence. You can reach us:</Text>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Image style={{ width: 147, height: 147, }} source={require('../../../assets/icons/clock.png')} />
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', textAlign: 'center' }}>Monday – Friday</Text>

                                <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', textAlign: 'center' }}>9am – 5pm</Text>

                                <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', textAlign: 'center' }}>[phone number]</Text>

                                <Text style={{ flex: 1, fontFamily: 'DINPro', fontSize: 16, color: '#4AB3E2', marginBottom: 20, textAlign: 'center' }}>[email-adresss]</Text>
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

    helpFaqContainer: {
        flex: 1,
        margin: 10,
        padding: 5,
        width: width - 20,
        backgroundColor: '#F5F5F5',
    },
    termsOfUseBlock: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',

    },
});