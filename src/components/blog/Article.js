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
            article: this.props.navigation.state.params.article,
            loader: true,

        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.lfmagazineauthorById(this.state.article.id_lfmagazine_author).then((author) => {
            this.setState({ author: author.author, loader: false })
        });
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {

        let {article, author} = this.state;
        
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={article.name} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                            </View>
                            
                            <View style={styles.container}>

                                <ScrollView style={styles.article} showsVerticalScrollIndicator={false}>

                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={styles.articleImage}>
                                            <ImageBackground style={styles.image} source={article.img_dir ? {uri: article.img_dir} : require('../../../assets/images/article.png')}>

                                            </ImageBackground>
                                        </View>

                                        <View style={styles.content}>

                                            <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>{article.name}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.contentSubBlock}>
                                                <View style={[styles.details, { height: 51, }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>{moment(article.date_add).format('DD.MMMM YYYY')}  ·  Reading time: {article.reading_time}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.contentSubBlock}>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    {/*<View style={{ flex: 1, alignItems: 'flex-start', margin: 20, marginBottom: 0 }}>
                                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#838383', }}>Kathryn Budig has created a career that’s the envy of yogis around the globe, but here she debunks some common misconceptions about what it means to be a big-name, internationally traveling yoga teacher.</Text>
                                                    </View>*/}
                                                    <HTML html={`<div style="font-family: DINPro-Light; ">` + article.description + "</div>"} />
                                                            
                                                </View>
                                            </View>


                                            <View style={[styles.contentSubBlock, { width: width - 20 }]}>
                                                <View style={styles.details}>
                                                    <View style={styles.teacherImage}>
                                                        <ImageBackground style={{ width: width - 20, height: 124, alignItems: 'center', justifyContent: 'center' }} source={require('../../../assets/images/yogaTeacher.png')} blurRadius={15} >
                                                            <View style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 100, overflow: 'hidden', }}>
                                                                <Image source={require('../../../assets/images/yogaTeacher.png')} style={{ width: 100, height: 100, }} />
                                                            </View>
                                                        </ImageBackground>
                                                    </View>
                                                </View>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', }}>{author.name}</Text>
                                                </View>
                                                <View style={[styles.details, { margin: 10 }]}>
                                                    <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>{author.short_description.replace(/<[^>]*>/g, "")}</Text>
                                                </View>
                                                <View style={[styles.details, { margin: 10, }]}>
                                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CoachProfile', {id_author: author.id_author}) }>
                                                        <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Visit her profile</Text>
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
    articleImage: {
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
    teacherImage: {
        height: 124,
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