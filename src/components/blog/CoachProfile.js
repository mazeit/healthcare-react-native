import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Image, Animated, FlatList, ImageBackground, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');
import moment from 'moment';
import ActivityList from '../ActivityList';
import Header from '../Header';
import { getlfmagazinepost, getlfmagazinepostById, lfmagazineauthor, lfmagazineauthorById } from '../../actions/index';
import LoaderWait from '../LoaderWait';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import HTML from 'react-native-render-html';
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id_author: this.props.navigation.state.params.id_author,
            loader: true,
            author: null,
            showConfirm: false
        };
        this.selectCoach = this.selectCoach.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.lfmagazineauthorById(this.state.id_author).then((author) => {
            this.setState({ author: author.author, loader: false })
        });
    }

    componentWillReceiveProps(nextProps) {

    }

    selectCoach() {

    }

    render() {

        let { author, showConfirm } = this.state;
        
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={author.name} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                            </View>
                                            
                            <View style={styles.container}>
                                {showConfirm && 
                                                
                                    <View style={{ position: 'absolute', width: width, height: height, top: 0, left: 0, flex:1, backgroundColor: '#00000080', zIndex: 100}}>
                                        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                                        </View>

                                        <View style={{ flex: 4, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ flex: 1 }}>
                                                <View style={[styles.subContainers, {marginTop: 30, marginBottom: 30 }]}>
                                                    <Text style={{ textAlign: 'center', fontFamily: 'DINPro-Bold', fontSize: 18, color: '#838383'}}>Do you want {author.name} become your new coach?</Text>
                                                </View>
                                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                                    <TouchableOpacity onPress={() => { this.selectCoach(); this.setState({ showConfirm: false}); }} style={[styles.subContainers, { paddingBottom: 20, flexDirection: 'row' }]}>
                                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 100, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Yes</Text>
                                                        </View>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity onPress={() => { this.setState({ showConfirm: false}); }} style={[styles.subContainers, { paddingBottom: 20, flexDirection: 'row' }]}>
                                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 100, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>No</Text>
                                                        </View>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                }


                                <ScrollView style={styles.article} showsVerticalScrollIndicator={false}>
                                    <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={styles.coachImage}>
                                            <ImageBackground style={styles.image} source={author.img_dir ? {uri: author.img_dir} : require('../../../assets/images/yogaTeacher.png')}>

                                            </ImageBackground>
                                        </View>

                                        <View style={styles.content}>

                                            <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>{author.name}</Text>
                                                </View>
                                                <View style={[styles.details, { margin: 10, marginTop: 0 }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>{author.short_description.replace(/<[^>]*>/g, "")}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.contentSubBlock}>
                                                <View style={[styles.details, { height: 51, width: width - 40, borderBottomWidth: 0.5, borderColor: '#E9E9E9', }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>37 years old, married, 2 kids</Text>
                                                </View>
                                                <View style={[styles.details, { height: 51, width: width - 40, borderBottomWidth: 0.5, borderColor: '#E9E9E9', }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>Intention to make everyone better</Text>
                                                </View>
                                                <View style={[styles.details, { height: 51, width: width - 40, }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>0Nutirion specialist, Tai Chi teacher</Text>
                                                </View>
                                            </View>

                                            <View style={styles.contentSubBlock}>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>

                                                        <HTML html={`<div style="font-family: DINPro-Light; ">` + author.description + "</div>"} />
                                                    </View>
                                                </View>
                                            </View>


                                            <View style={[styles.contentSubBlock, { width: width - 20 }]}>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>If you prefer to continue with Kathryn as your Coach, please click here.</Text>
                                                </View>
                                                <View style={[styles.details, { margin: 10, }]}>
                                                    <TouchableOpacity onPress={()=>this.setState({showConfirm: true})} >
                                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Make {author.name} my coach</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.contentSubBlock}></View>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View >
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    coachImage: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    article: {
        flex: 1,
    },
    content: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentSubBlock: {
        width: width - 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    details: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default connect(state => {
    return {
    }
}, dispatch => {
    return bindActionCreators({ getlfmagazinepost, getlfmagazinepostById, lfmagazineauthor, lfmagazineauthorById  }, dispatch)
}
)(Blog);