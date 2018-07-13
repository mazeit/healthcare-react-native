import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image, ScrollView } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');

import Header from '../Header';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import LoaderWait from '../LoaderWait';
import StatusItem from './StatusItem';
import Option from '../shared/Option';
class QuestionStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };


    }

    renderStep0(data) {
        return <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                            

            <Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 20, alignItems: 'center', textAlign: 'center'}}>Thema Personal</Text>



            <View style={{ flex: 1, alignItems: 'center'}}>
                <View style={[styles.textBlock, { marginTop: 0 }]}>
                    <Text style={styles.textContent}>Lorem ipsum dolor amet yOLO hexagon pok pok cardigan lomo biodiesel, normcore deep v snackwave ugh. 

                        Four loko pinterest VHS, pitchfork semiotics snackwave subway tile seitan. Listicle chicharrones tumblr health goth hella waistcoat thundercats butcher farm-to-table. 

                        Hell of green juice XOXO skateboard freegan, put a bird on it squid everyday carry blog jianbing hella. Cronut keytar craft beer viral, microdosing portland pinterest vape.
                    </Text>
                    <Text style={styles.textContent}> Zunächst benötigen wir ein paar allgemeine Angaben von Dir:</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', margin: 10 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.props.navigation.navigate('OverviewStatus')}>
                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: data.color, borderWidth: 1 }}>
                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: data.color }}>Weiter</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    }

    renderStep(data) {
        let stepNum = 3;

        return <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: data.color, margin: 20, alignItems: 'center', textAlign: 'left'}}>Frage {stepNum}</Text>

            <View style={{ flex: 1}}>
                <View style={[styles.textBlock, { marginTop: 0 }]}>

                    <Text style={[styles.textContent, {fontSize: 14, marginBottom: 30}]}> Inwiefern stimmst Du der folgenden Aussage zu? </Text>

                    <Text style={styles.textContent}>Ich fühle mich selbstsicher und vertraue auf meine Fähigkeiten
                    </Text>
                </View>

                <View style={{ flex: 1, margin: 10}}>
                    <View  style={{ flexDirection: 'column', margin: 10}}>

                        <View style={{ flexDirection: 'row', marginBottom: 10}}>
                            <Option selected={true} style={{}} color={data.color}/>
                            <Text style={{color: data.color, marginLeft: 10}}>TESTTTTTTTTTT</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 10}}>
                            <Option selected={true} style={{}} color={data.color}/>
                            <Text style={{color: data.color, marginLeft: 10}}>TESTTTTTTTTTT</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 10}}>
                            <Option selected={true} style={{}} color={data.color}/>
                            <Text style={{color: data.color, marginLeft: 10}}>TESTTTTTTTTTT</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, margin: 10}}>
                    <View  style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10}}>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <Text style={{color: data.color, marginBottom: 10}}>1</Text>
                            <Option selected={true} style={{}} color={data.color}/>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <Text style={{color: data.color, marginBottom: 10}}>2</Text>
                            <Option selected={true} style={{}} color={data.color}/>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', margin: 10}}>
                        <Text style={{width: 100}}>Stimme überhaupt nicht zu</Text>
                        <Text style={{width: 100, textAlign: 'right'}}>Stimme voll und ganz zu</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'  }} onPress={()=> this.props.navigation.navigate('OverviewStatus')}>
                        <IconFontAwesome name="angle-left" style={{marginRight: 5}} size={15} color='#000000' />
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#000000' }}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=> this.props.navigation.navigate('OverviewStatus')}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#838383' }}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }} onPress={()=> this.props.navigation.navigate('OverviewStatus')}>
                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: data.color }}>Next</Text>
                        <IconFontAwesome name="angle-right"  style={{marginLeft: 5}} size={15} color={data.color} />
                    </TouchableOpacity>
                        

                </View>
            </View>
        </View>
    }

    render() {
        const {data} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.navigate('OverviewStatus')} backgroundcolor={data.color} headerTitle={'FRAGEBOGEN'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#ffffff'} showNext={false} rightButton={true} headColor={'#ffffff'} navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 9,  alignItems: 'center', justifyContent: 'center', backgroundColor: data.color}}>
                
                    <View style={styles.intro}> 
                        <View style={{height: 80, marginBottom: 10}}> 
                            <StatusItem item={data} asHeader={true} navigation={this.props.navigation}/>
                        </View>
                        {this.renderStep0(data)}
                        {/*this.renderStep(data)*/}
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    intro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    textBlock: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: 20,
    },

    textContent: {
        fontFamily: 'DINPro-Light',
        fontSize: 16,
        color: '#838383',
        textAlign: 'center'
    },
});

export default connect(state => {
    const user_id = state.validUser.user.id || '';
    return {
        user_id,
    }
}, dispatch => {
    return bindActionCreators({ }, dispatch)
})(QuestionStep);