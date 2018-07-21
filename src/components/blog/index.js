import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Image, Animated, FlatList, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

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
            loader: true,
            articles: [],
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.getlfmagazinepost().then((articles) => {
            this.setState({ articles: articles.post_list, loader: false })
        });
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {

        let {articles} = this.state;

        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Header goBack={() => this.props.navigation.goBack()} backgroundcolor={'#FFFFFF'} headerTitle={'Articles'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                            </View>
                            <View style={styles.container}>

                                <FlatList
                                    data={articles}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({ item, index }) =>
                                        <View style={styles.categoryContainer}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Article', {article: item}) } style={styles.categoryDetails}>
                                                <ImageBackground style={styles.category} source={item.id_image ? { uri: 'https://content.jwplatform.com/thumbs/DRJghGa7.jpg' } : { uri: 'https://content.jwplatform.com/thumbs/DRJghGa7.jpg' }}>
                                                    <ImageBackground style={styles.category} source={require('../../../assets/images/coach_frame.png')}>
                                                        <View style={{ margin: 10, flex: 1   }}>
                                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#FFFFFF', }}>{item.name}</Text>
                                                        </View>

                                                        <View style={{ margin: 10, marginTop: 0, flex: 1 }}>

                                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 14, color: '#FFFFFF', }}>{item.short_description.replace(/<[^>]*>/g, "")}</Text>
                                                            {/*<HTML html={`<div style="font-family: DINPro-Light !important; color: #FFFFFF">` + item.short_description + "</div>"} />
                                                            */}
                                                        </View>
                                                    </ImageBackground>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                />
                            </View>
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
    },
    categoryContainer: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 150,
        margin: 5,
    },
    categoryDetails: {
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subIcons: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 3,
        marginBottom: 3,
        height: 100,
    },
    category: {
        flex: 1,
        width: width - 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },


});

export default connect(state => {
    return {
    }
}, dispatch => {
    return bindActionCreators({ getlfmagazinepost: getlfmagazinepost }, dispatch)
}
)(Blog);