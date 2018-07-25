import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import Header from '../Header';

const { height, width } = Dimensions.get('window');

import HTML from 'react-native-render-html';

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityData: this.props.navigation.state.params.data,
            activityType: this.props.navigation.state.params.activityType ? this.props.navigation.state.params.activityType : 'add',
            type: '',
            dataListIcon: { nutrition: require('../../../assets/icons/nutrition.png'), activity: require('../../../assets/icons/activity.png'), mindfulness: require('../../../assets/icons/mindfulness.png'), coach: require('../../../assets/icons/mindfulness.png') },

            portion: this.props.navigation.state.params.data.people
        };
        this.increasePortion = this.increasePortion.bind(this);
        this.decreasePortion = this.decreasePortion.bind(this);
    }

    decreasePortion() {
        if (this.state.portion > 1) {
            this.setState({portion: this.state.portion - 1});
        }
    }
    
    increasePortion() {
        this.setState({portion: parseInt(this.state.portion) + 1});
    }

    render() {
        let {activityData, activityType, portion} = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={activityData.name} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <ScrollView style={styles.recipe} showsVerticalScrollIndicator={false}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.recipeVideo}>
                                {/*<ImageBackground style={styles.video} source={require('../../../assets/images/recipe.png')}>*/}
                                <ImageBackground style={styles.video} source={{uri: (activityData.images[0] &&  activityData.images[0].src) ? 'https://spano24.com//fitnessportal/modules/roccrecipes/media/img_recipes/328/' + activityData.images[0].src : 'https://spano24.com//fitnessportal/modules/roccrecipes/media/img_recipes/328/LOGO.jpeg'}}>

                                </ImageBackground>
                            </View>

                            <View style={styles.content}>
                                <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>{activityData.name}</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>{activityData.description}</Text>
                                    </View>
                                    <View style={styles.details}>
                                        <Image source={require('../../../assets/icons/nutrition.png')} style={{ width: 72, height: 72, }} />
                                    </View>
                                </View>

                                
                                <View style={styles.contentSubBlock}>
                                    {activityData.list_p.length > 0 && <View style={[styles.details, { borderBottomWidth: 0.5, borderBottomColor: '#E9E9E9', height: 51, width: width - 30 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>
                                            {activityData.list_p.map((item, index) => {
                                                return item[0] + ' ' + item[1].name + ' ' + item[2].name + (index != activityData.list_p.length - 1 ? ' · ' :'');
                                            })}
                                            420 kcal  ·  38 g Carbs  ·  7 g Protein  ·  22 g Fat
                                        </Text>
                                    </View>}
                                    <View style={[styles.details, { flexDirection: 'row', height: 51, justifyContent: 'space-between' }]}>

                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                                            <Image source={require('../../../assets/icons/clock_979797.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>{activityData.preparation_work}</Text>

                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                                            <Image source={require('../../../assets/icons/level_979797.png')} style={{ width: 30, height: 30, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>{activityData._difficulty.name}</Text>

                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                                            <Image source={require('../../../assets/icons/people_979797.png')} style={{ width: 25, height: 25, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>{activityData.people} people</Text>

                                        </View>

                                    </View>
                                </View>

                                {activityData.features.length > 0 &&
                                    <View style={styles.contentSubBlock}>
                                        <View style={[styles.details, { flexDirection: 'row', margin: 10 }]}>

                                            {activityData.features.map((feature, index)=>(
                                                <View style={{ flex: 1, alignItems: 'center', }} key={index}>
                                                    <Image source={require('../../../assets/icons/vegan.png')} style={{ width: 60, height: 60, }} />
                                                    <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>{feature.name}</Text>
                                                </View>)) 
                                            }
                                        </View>
                                    </View>
                                }

                                <View style={[styles.contentSubBlock, {flex: 5}]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>Ingredients</Text>
                                    </View>
                                    <View style={[styles.details, { borderBottomWidth: 0.5, borderBottomColor: '#E9E9E9', flex: 10, justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: 20}]}>
                                        
                                        {activityData.list_n.map((item, key) => {

                                            return <Text key={key} style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· {item[0] / activityData.people * portion} {item[1].name} {item[2].name} </Text>
                                        }) }

                                        
                                    </View>
                                    <View style={[styles.details, { margin: 10, flexDirection: 'row', }]}>
                                        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 20 }}>
                                            <TouchableOpacity onPress={this.decreasePortion}>
                                                <Image source={require('../../../assets/icons/minus_circle_8ACE91.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#454545', }}>{portion} Portions</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
                                            <TouchableOpacity onPress={this.increasePortion}>
                                                <Image source={require('../../../assets/icons/plus_circle_8ACE91.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.contentSubBlock}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>Directions</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <HTML html={"<div style='font-family: DINPro-Light'>" + activityData.instructions + "</div>"} imagesMaxWidth={width - 20} />
                                    </View>
                                </View>

                                <View style={[styles.contentSubBlock, { width: width - 20 }]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#838383', }}>Add this recipe to your challenge</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10, }]}>
                                        <TouchableOpacity >
                                            <View style={{ backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', width: 220, height: 52, borderRadius: 52, borderColor: '#4AB3E2', borderWidth: 0.5 }}>
                                                <Text style={{ fontFamily: 'DINPro-Light', fontSize: 17, color: '#4AB3E2' }}>Add</Text>
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
    recipeVideo: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        width: width,
        height: 254,
        alignItems: 'center',
        justifyContent: 'center',
    },
    recipe: {
        flex: 1,
    },
    content: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentSubBlock: {
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