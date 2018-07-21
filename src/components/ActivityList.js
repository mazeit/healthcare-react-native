import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('window');

import { addFavorite, removeFavorite, getActivity, getRecipe } from '../actions/index';
import LoaderWait from './LoaderWait';


class ActivityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataListColor: { nutrition: require('../../assets/images/nutrition_image.png'), activity: require('../../assets/images/activity_image.png'), mindfulness: require('../../assets/images/mindfulness_image.png'), coach: require('../../assets/images/coach_image.png') },
            dataListImage: { nutrition: require('../../assets/images/nutrition_frame.png'), activity: require('../../assets/images/activity_frame.png'), mindfulness: require('../../assets/images/mindfulness_frame.png'), coach: require('../../assets/images/coach_frame.png') },
            listData: this.props.data,
            loader: false,
            activityType: this.props.activityType || '',
        };
        this.favClicked = this.favClicked.bind(this);
        this.openDatePrefrence = this.openDatePrefrence.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    }

    openDatePrefrence(item) {
        this.props.navigation.navigate('CalendarView', { id_content: item.id_content, mode : 'add-activity' })
    }

    favClicked({ item, index }, cond) {

        let { listData } = this.state;
        let targetItem = listData[index];

        targetItem.favorite = !targetItem.favorite;

        this.setState({ listData: [...listData] });
        if (cond) {
            this.props.removeFavorite(item.id_content, item.pillar).then(()=>{
            })
        } else if (!cond) {
            this.props.addFavorite(item.id_content, item.pillar).then(()=>{
            })
        }
    }


    goToNextView (item) {
        if (item.rezept == 0) {

            this.props.getActivity(item.id_content)
            .then((resultObj)=>{
                console.log(resultObj);
                if (!resultObj.hasError) {
                    this.setState({loader: false, resultObj: resultObj.content});

                    this.props.navigation.navigate('Activity',  {activityType: this.state.activityType, data: resultObj.content})
                }
            });
        } else {

            this.props.getRecipe(item.rezept_video)
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

        const { listData } = this.state;

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
                                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.openDatePrefrence(item)}>
                                                    <Icon name="plus" size={50} style={{ marginLeft: -10 }} color="#454545" />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity onPress={() => this.goToNextView(item)} style={styles.categoryDetails}>
                                            <ImageBackground style={styles.category} source={item.file_id !== '' ? { uri: 'https://content.jwplatform.com/thumbs/DRJghGa7.jpg' } : this.state.dataListColor[item.pillar]}>
                                                <ImageBackground style={styles.category} source={this.state.dataListImage[item.pillar]}>
                                                    {/* <Text>{item.key}</Text> */}
                                                    <View style={{ margin: 10, flex: 1   }}>
                                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#FFFFFF', }}>{item.name}</Text>
                                                    </View>
                                                    <View style={{ margin: 10, marginTop: 0, flex: 1 }}>
                                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 14, color: '#FFFFFF', }}>{item.description}</Text>
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
    const addActivityData = state.getData.addActivityData || {};
    return {
        addFavResponce,
        removeFavResponce,
        addActivityData,
    }
}, dispatch => {
    return bindActionCreators({ addFavorite: addFavorite, removeFavorite: removeFavorite, getActivity: getActivity, getRecipe }, dispatch)
}
)(ActivityList);