import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, WebView } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import LoaderWait from './LoaderWait';
import { getImportantNotification, getActivity, getRecipe } from '../actions/index';


const { height, width } = Dimensions.get('window');


class ImportantNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            importantn: null,   
            backgroundColor: '#AE0069',
            backgroundColorArray: ['#AE0069', '#D4B870', '#8ACE91'],
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ backgroundColor: this.state.backgroundColorArray[Math.floor(Math.random() * 3)] }), 2000);
        this.props.getImportantNotification()
        .then((importantn)=>{
            this.setState({loader: false, importantn});
        })
        
    }


    gotoContentDeail() {
        let content = this.state.importantn.importantn;
        this.setState({loader: true});
        if (content.rezept == 0) {

            this.props.getActivity(content.id_content)
            .then((resultObj)=>{
                console.log(resultObj);
                if (!resultObj.hasError) {
                    this.setState({loader: false, resultObj: resultObj.content});

                    this.props.navigation.navigate('Activity',  {activityType: this.state.activityType, data: resultObj.content})
                }
            });
        } else {

            this.props.getRecipe(content.rezept_video)
            .then((resultObj)=>{
                console.log(resultObj);
                if (!resultObj.hasError){
                    this.setState({loader: false, resultObj: resultObj.recipe});
                    this.props.navigation.navigate('Recipe',  {activityType: this.state.activityType, data: resultObj.recipe})

                }
            });
        }
    }

    render() {
        const {importantn} = this.state;
        return (
            <ImageBackground style={styles.homeImage} source={require('../../assets/images/homeBlur.png')}>

                {this.state.loader ?
                    <View style={{ flex: 1, opacity: 0.8 }}><LoaderWait /></View> :
                    <View style={[styles.container, { backgroundColor: this.state.backgroundColor, }]}>
                        {(this.state.importantn && this.state.importantn.errors.length > 0) ?

                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginTop: '12%' }}>{this.state.importantn.errors[0]}</Text>

                                <View style={[styles.getCalender, {}]}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CalendarView', {})}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginTop: '12%' }}>Go to My Day</Text>
                                                <Icon name="little_arrow" size={50} style={{ marginLeft: -15}} color="#FFFFFF" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ContentOverview')} style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name="close" size={50} style={{ marginLeft: -15}} color="#FFFFFF" />
                                </TouchableOpacity>
                                <View style={styles.header}>
                                    <Text style={styles.headerText}>Your next activity</Text>
                                    <Text style={styles.headerText}>before noon!</Text>
                                </View>
                                <View style={styles.activityDisply}>

                                    {
                                        importantn.importantn.file_id !== '' ?
                                            <WebView
                                                style={{ flex: 1 }}
                                                javaScriptEnabled={true}
                                                domStorageEnabled={true}
                                                source={{ uri: 'https://content.jwplatform.com/players/' + importantn.importantn.file_id + '-Qzd90UGq.html' }}
                                            /> :
                                            <Image source={require('../../assets/images/no_video.png')} style={{ width: '100%', height: '100%', }} />
                                    }
                                </View>
                                <View style={{ backgroundColor: '#FFFFFF', width: width - 130, flex: 1, marginTop: '-10%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545' }}>{importantn.importantn.name}</Text>
                                </View>
                                <View style={styles.buttons}>
                                    <TouchableOpacity style={{ backgroundColor: this.state.backgroundColor, flex: 1, width: '100%', marginTop: '5%', alignItems: 'center', justifyContent: 'center', borderColor: '#ffffff', borderRadius: 50, borderWidth: 0.5 }} onPress={()=>this.gotoContentDeail() }>
                                        <Text style={{ marginLeft: '20%', marginRight: '20%', fontFamily: 'DINPro-Light', fontSize: 17, color: '#ffffff' }}>More Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', flex: 1, width: '100%', marginTop: '5%', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                        <Text style={{ marginLeft: '20%', marginRight: '20%', fontFamily: 'DINPro-Light', fontSize: 17, color: this.state.backgroundColor }}>Start session</Text>
                                    </TouchableOpacity>
                                </View> 

                                <View style={[styles.getCalender, {}]}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CalendarView', {})}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Medium', fontSize: 16, color: '#ffffff', marginTop: '12%' }}>Go to My Day</Text>
                                                <Icon name="little_arrow" size={50} style={{ marginLeft: -15}} color="#FFFFFF" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>}

                    </View>
                }
            </ImageBackground>
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeImage: {
        width: '100%',
        height: '100%',
    },
    header: {
        flex: 1.5,
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'DINPro-Light',
        fontSize: 22,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activityDisply: {
        flex: 4,
        overflow: 'hidden',
        marginTop: 5,
        width: width - 100,
    },
    image: {
        width: 300,
        height: 230,
        // marginLeft: 70,
    },
    buttons: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    getCalender: {
        flex: 1,
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});




export default connect(state => {

    return {
    }
}
    , dispatch => {
        return bindActionCreators({ getImportantNotification: getImportantNotification, getActivity, getRecipe }, dispatch)
    }
)(ImportantNotification);

