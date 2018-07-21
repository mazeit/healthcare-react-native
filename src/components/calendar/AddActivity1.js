import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

import Header from '../Header';
import { getPillarData } from '../../actions/index';
import LoaderWait from '../LoaderWait';

class AddActivityCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            pillarData: {},
            pillarName: ''
        };
        this.openActivityList = this.openActivityList.bind(this);
    }


    openActivityList(pillar) {
        this.setState({pillarName: pillar,loader: true});
        this.props.getPillarData(pillar, this.props.user.id_lang)

        
    }

    componentWillReceiveProps (nextProps) {
        // console.log('.........PROPS....', nextProps);
        
        if(nextProps.pillarData.hasError === false) {
            this.setState({loader: false});
            this.props.navigation.navigate('ChoseActivity',{pillarData: nextProps.pillarData[this.state.pillarName], pillarName: this.state.pillarName, user_id: this.props.user.id})
        }
        else if(nextProps.pillarData.hasError === true) {
            this.setState({ loader: false })
            console.log('......ERROR.....', nextProps.pillarData.errors)
        }
        
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 1 }}>
                    <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={''} leftButton={true} leftButtonName={'close'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                {
                    this.state.loader ?
                        <View style={{ flex: 9, opacity: 0.8 }}><LoaderWait /></View> :
                        <View style={{ flex: 9 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5', width: width, }}>

                                <TouchableOpacity style={styles.categoryContainer} onPress={() => this.openActivityList('nutrition')}>
                                    <ImageBackground style={styles.category} source={require('../../../assets/images/add_nutrition.png')}>
                                        <Text style={styles.text}>Nutrition</Text>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.categoryContainer} onPress={() => this.openActivityList('activity')}>
                                    <ImageBackground style={styles.category} source={require('../../../assets/images/add_activity.png')}>
                                        <Text style={styles.text}>Activity</Text>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.categoryContainer} onPress={() => this.openActivityList('mindfulness')}>
                                    <ImageBackground style={styles.category} source={require('../../../assets/images/add_mindfullness.png')}>
                                        <Text style={styles.text}>Mindfullness</Text>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.categoryContainer, { marginBottom: 10 }]} onPress={() => this.openActivityList('coach')}>
                                    <ImageBackground style={styles.category} source={require('../../../assets/images/add_coaching.png')}>
                                        <Text style={styles.text}>Coach</Text>
                                    </ImageBackground>
                                </TouchableOpacity>

                            </View>


                            <View style={styles.contentSubBlock}>

                            </View>
                        </View>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryContainer: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
    },
    category: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentSubBlock: {
        flex: 1,
        width: width,
        backgroundColor: '#00000080',

    },
    text: {
        fontFamily: 'DINPro-Light',
        fontSize: 22,
        color: '#FFFFFF',
        alignSelf: 'flex-start',
        marginLeft: 20,
    }

});

export default connect(state => {
    const user = state.validUser.user || {};
    const pillarData = state.getData.pillarData || {};
    return {
        pillarData,
        user,
    }
}, dispatch => {
    return bindActionCreators({ getPillarData: getPillarData }, dispatch)
}
)(AddActivityCategory);