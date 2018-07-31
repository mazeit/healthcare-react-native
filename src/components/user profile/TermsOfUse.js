import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');
import Header from '../Header';

import { getTermsOfConditions } from '../../actions/index';
import HTML from 'react-native-render-html';
class TermsOfUse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            termsOfUse: null
        };
    }

    componentDidMount() {
        this.props.getTermsOfConditions().then((result)=>{
            this.setState({termsOfUse: result.cms});
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'TERMS OF USE'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    {this.state.termsOfUse && <View style={styles.termsOfUse}>

                        {/*<Text style={{ height: 26, fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', marginTop: 20, marginLeft: 20 }}>Terms of use</Text>

                        <ScrollView style={styles.termsOfUseBlock}>

                            <View style={[styles.textBlock, { marginTop: 0 }]}>
                                <Text style={styles.textContent}>You become a registered user of the Service and create a Service account (“Account”) by (i) using your personal unique email address and giving other information required; or (ii) by using the available single sign-on via Facebook.</Text>
                            </View>

                        </ScrollView>*/}
                        <ScrollView style={styles.termsOfUseBlock}>

                            <HTML html={`<div style="font-family: DINPro-Light; ">` + this.state.termsOfUse.textContent + "</div>"} />
                                                          

                        </ScrollView>
                    </View>}

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
        fontFamily: 'DINPro-Light',
        fontSize: 16,
        color: '#838383',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
    },
});

export default connect(state => {
    return {};
}, dispatch => {
    return bindActionCreators({ getTermsOfConditions }, dispatch)
})(TermsOfUse);
