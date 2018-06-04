import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');

import { addFavorite, removeFavorite } from '../actions/index';
import LoaderWait from './LoaderWait';


class ActivityList extends React.Component {
    constructor(props) {
        super(props);
        console.log('....PROPS...', this.props)
        this.state = {
            dataListColor: { nutrition: require('../../assets/images/nutrition_image.png'), activity: require('../../assets/images/activity_image.png'), mindfulness: require('../../assets/images/mindfulness_image.png'), coach: require('../../assets/images/coach_image.png') },
            dataListImage: { nutrition: require('../../assets/images/nutrition_frame.png'), activity: require('../../assets/images/activity_frame.png'), mindfulness: require('../../assets/images/mindfulness_frame.png'), coach: require('../../assets/images/coach_frame.png') },
            listData: this.props.data,
            loader: false,
        };
        this.favClicked = this.favClicked.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log('.....NEXTPROPS////', nextProps)
        this.setState({ loader: false })
    }

    // renderItem ({ item, index }) {
    //     
    //     return (

    //     )
    // }

    favClicked({ item, index }, cond) {

        this.setState({ loader: true });
        let { listData } = this.state;
        let targetItem = listData[index];

        // Flip the 'liked' property of the targetPost
        targetItem.favorite = !targetItem.favorite;



        console.log('.... LIST DATA ........', targetItem)
        this.setState({ listData });
        if (cond) {
            console.log('.... REMOVE ........')
            this.props.removeFavorite(this.props.user_id, item.id_content, this.props.pillarName)
        } else if (!cond) {
            console.log('.... ADD ........')
            this.props.addFavorite(this.props.user_id, item.id_content, this.props.pillarName)
        }


    }

    render() {

        const { listData } = this.state;

        console.log('......LIST DATA', listData)
        return (
            <View style={styles.container}>
                {
                    this.state.loader ?
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF', width: width }}><LoaderWait /></View> :
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={listData}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) =>
                                    <View style={styles.categoryContainer}>
                                        <View style={styles.subIcons}>
                                            {
                                                item.favorite ?
                                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.favClicked({ item, index }, item.favorite)}>

                                                        <Icon name="fav_checked" size={50} style={{ marginLeft: -10 }} color="#454545" />

                                                    </TouchableOpacity> :
                                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.favClicked({ item, index }, item.favorite)}>

                                                        <Icon name="fav" size={50} style={{ marginLeft: -10 }} color="#454545" />

                                                    </TouchableOpacity>
                                            }

                                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon name="plus" size={50} style={{ marginLeft: -10 }} color="#454545" />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.goto)} style={styles.categoryDetails}>
                                            <ImageBackground style={styles.category} source={item.file_id !== '' ? { uri: 'https://content.jwplatform.com/thumbs/DRJghGa7.jpg' } : this.state.dataListColor[this.props.pillarName]}>
                                                <ImageBackground style={styles.category} source={this.state.dataListImage[this.props.pillarName]}>
                                                    {/* <Text>{item.key}</Text> */}
                                                    <View style={{ margin: 10, flex: 1 }}>
                                                        <Text style={{ fontFamily: 'DINPro', fontSize: 18, color: '#FFFFFF', }}>{item.name}</Text>
                                                    </View>
                                                    <View style={{ margin: 10, marginTop: 0, flex: 1 }}>
                                                        <Text style={{ fontFamily: 'DINPro', fontSize: 14, color: '#FFFFFF', }}>{item.description}</Text>
                                                    </View>
                                                </ImageBackground>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                }
                            />
                        </View>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        width: width
    },
    categoryContainer: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 100,
        margin: 5,
    },
    categoryDetails: {
        width: width - 50,
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
        width: width - 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

});

export default connect(state => {
    const addFavResponce = state.addUser.addFavResponce || {};
    const removeFavResponce = state.addUser.removeFavResponce || {};
    return {
        addFavResponce,
        removeFavResponce,
    }
}, dispatch => {
    return bindActionCreators({ addFavorite: addFavorite, removeFavorite: removeFavorite }, dispatch)
}
)(ActivityList);