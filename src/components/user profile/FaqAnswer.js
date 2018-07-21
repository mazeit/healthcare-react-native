import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');
import Header from '../Header';

import HTML from 'react-native-render-html';
export default class FaqAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Faq: this.props.navigation.state.params.Faq,
            qIndex: this.props.navigation.state.params.qIndex
        };
        this.prevQuestion = this.prevQuestion.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion() {
        if(this.state.qIndex > 0)
            this.setState({qIndex: this.state.qIndex - 1});
    }

    prevQuestion() { 
        if(this.state.qIndex < (this.state.Faq.length - 1))
            this.setState({qIndex: this.state.qIndex + 1});
    }

    render() {
        let {Faq, qIndex} = this.state;

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'HELP & FAQ'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <ScrollView style={styles.termsOfUse}>

                        <View style={styles.termsOfUseBlock}>
                            <Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545' }}>{Faq[qIndex].title}</Text>



                            <View style={{ flex: 1, alignItems: 'center'}}>
                                <View style={[styles.textBlock, { marginTop: 0 }]}>
                                    <HTML html={"<div style='font-family: DINPro-Light !important'>" + Faq[qIndex].description + "</div>"} imagesMaxWidth={width - 20} />
                                </View>


                                <View style={styles.navegate}>

                                    <TouchableOpacity style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} onPress={()=>this.prevQuestion()}>
                                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#4AB3E2' }}>Previous</Text>
                                        </View>
                                    </TouchableOpacity> 

                                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} onPress={()=>this.nextQuestion()}>
                                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#4AB3E2' }}>Next</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flex: 1, alignItems: 'center', alignSelf:'center', justifyContent: 'center', margin: 10}}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=>this.props.navigation.goBack()}>
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
        padding: 20,
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',


    },
    textBlock: {
        flex: 8,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    textContent: {
        fontFamily: 'DINPro-Light',
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