import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');
import Header from '../Header';
import { getFAQ } from '../../actions/index'

class HelpFaq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Faq: [],
            conntactInfo: {},
            rotate: '-90deg',
        };
    }

    componentDidMount() {
        this.props.getFAQ()
    }

    componentWillReceiveProps(nextProps) {
        
        this.setState({ Faq: nextProps.FaqData.faq_list, conntactInfo: nextProps.FaqData.contact_info });
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

                            <Text style={{ fontFamily: 'DINPro-Regular', fontSize: 18, color: '#838383', margin: 20, textAlign: 'center' }}>Do you have issues with your app or your challenge? These answers here might help you:</Text>

                        </View>

                        {
                            this.state.Faq.map((question, i) =>
                                <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('FaqAnswer')} style={[styles.termsOfUseBlock, { height: 55 }]}>

                                    <View style={{ flex: 9, alignItems: 'flex-start', marginLeft: 20 }}>
                                        <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#454545' }}>{question.title}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                        <Icon name="little_arrow" size={50} style={{marginTop: 15, transform: [{ rotateZ: '-90deg'}] }} color="#454545" />
                                    </View>

                                </TouchableOpacity>
                            )
                        }



                        <View style={[styles.termsOfUseBlock, { flexDirection: 'column', height: 309 }]}>

                            <Text style={{ flex: 1, height: 66, fontFamily: 'DINPro-Regular', fontSize: 18, color: '#838383', margin: 20, marginBottom: 0, textAlign: 'center' }}>No answer to your question? Be free to contact our support team for a personal assistence. You can reach us:</Text>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Icon name="time_big" size={50} color="#454545" />
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                <Text style={{ flex: 1, fontFamily: 'DINPro-Regular', fontSize: 16, color: '#4AB3E2', textAlign: 'center' }}>{this.state.conntactInfo.day}</Text>

                                <Text style={{ flex: 1, fontFamily: 'DINPro-Regular', fontSize: 16, color: '#4AB3E2', textAlign: 'center' }}>{this.state.conntactInfo.time}</Text>

                                <Text style={{ flex: 1, fontFamily: 'DINPro-Regular', fontSize: 16, color: '#4AB3E2', textAlign: 'center' }}>{this.state.conntactInfo.phone}</Text>

                                <Text style={{ flex: 1, fontFamily: 'DINPro-Regular', fontSize: 16, color: '#4AB3E2', marginBottom: 20, textAlign: 'center' }}>{this.state.conntactInfo.email}</Text>
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

export default connect(state => {
    const FaqData = state.getData.FaqData || {};
    return {
        FaqData,
    }
}, dispatch => {
    return bindActionCreators({ getFAQ: getFAQ }, dispatch)
})(HelpFaq);