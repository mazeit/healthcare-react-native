import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');
import Header from '../Header';

export default class FaqAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'HELP & FAQ'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <ScrollView style={styles.termsOfUse}>

                        <View style={styles.termsOfUseBlock}>
                            <Text style={{ height: 26, fontFamily: 'DINPro-Regular', fontSize: 22, color: '#454545', marginTop: 20, marginLeft: 20 }}>How can i buy a new challange ?</Text>



                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <View style={[styles.textBlock, { marginTop: 0 }]}>
                                    <Text style={styles.textContent}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
                                </View>


                                <View style={styles.navegate}>
                                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 16, color: '#4AB3E2' }}>Previous</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 16, color: '#4AB3E2' }}>Next</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Okay</Text>
                                    </View>
                                </TouchableOpacity>
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


    termsOfUse: {
        flex: 1,
        margin: 10,
        width: width - 20,
        backgroundColor: '#F5F5F5',

    },
    termsOfUseBlock: {
        flex: 1,
        // margin: 10,
        // marginLeft: 20,
        // marginRight: 10,
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',


    },
    textBlock: {
        flex: 8,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    textContent: {
        fontFamily: 'DINPro-Regular',
        fontSize: 16,
        color: '#838383',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    navegate: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        borderTopWidth: 0.5,
    }
});