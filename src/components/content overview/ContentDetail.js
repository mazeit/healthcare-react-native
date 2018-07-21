import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, WebView } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import LoaderWait from '../LoaderWait';
import { getActivity, getRecipe } from '../../actions/index';
import Header from '../Header';

const { height, width } = Dimensions.get('window');


class ContentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            content: this.props.navigation.state.params.content,
            activityType: this.props.navigation.state.params.content,
            resultObj: null
        };
    }

    componentDidMount() {
        if (this.state.content.rezept == 0) {

            this.props.getActivity(this.state.content.id_content)
            .then((resultObj)=>{
                console.log(resultObj);
                if (!resultObj.hasError) {
                    this.setState({loader: false, resultObj: resultObj.content});

                    this.props.navigation.navigate('Recipe',  {activityType: this.state.activityType, data: resultObj.recipe})
                }
            });
        } else {

            this.props.getRecipe(this.state.content.rezept_video)
            .then((resultObj)=>{
                console.log(resultObj);
                if (!resultObj.hasError){
                    this.setState({loader: false, resultObj: resultObj.recipe});
                    this.props.navigation.navigate('Activity',  {activityType: this.state.activityType, data: resultObj.recipe})

                }
            });
        }
        
    }


    render() {
        const {importantn} = this.state;
        return (
            <View style={{ flex: 1 }}>

                {this.state.loader ?
                    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}><LoaderWait /></View> :
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'AVACADO SALAD'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                        </View>
                        <View style={styles.container}>
                            
                        </View>
                    </View>
                }
            </View>
        );
    }

    componentWillUnmount() {
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

});




export default connect(state => {

    return {
    }
}
    , dispatch => {
        return bindActionCreators({ getActivity: getActivity, getRecipe: getRecipe }, dispatch)
    }
)(ContentDetail);

