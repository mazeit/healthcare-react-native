import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import Header from '../Header';

const { height, width } = Dimensions.get('window');

const profileSubHeading = ['My profile information', 'My notification', 'My tracking settings', 'Invite my friends', 'Terms of use', 'Privacy policy', 'Helf & FAQ', 'About us'];

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header goBack={this.props.navigation.goBack} backgroundcolor={'#FFFFFF'} headerTitle={'AVACADO SALAD'} leftButton={true} leftButtonName={'arrow'} leftButtonColor={'#454545'} showNext={false} rightButton={true} headColor={'#454545'} navigation={this.props.navigation} />
                </View>
                <View style={styles.container}>

                    <ScrollView style={styles.recipe} showsVerticalScrollIndicator={false}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.recipeVideo}>
                                <ImageBackground style={styles.video} source={require('../../../assets/images/recipe.png')}>

                                </ImageBackground>
                            </View>

                            <View style={styles.content}>
                                <View style={[styles.contentSubBlock, { marginTop: -50, }]}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>Easy peasy avocado salad</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>It's like a portable garden. Or some other short description of the recipe.</Text>
                                    </View>
                                    <View style={styles.details}>
                                        <Image source={require('../../../assets/icons/nutrition.png')} style={{ width: 72, height: 72, }} />
                                    </View>
                                </View>

                                <View style={styles.contentSubBlock}>
                                    <View style={[styles.details, { borderBottomWidth: 0.5, borderBottomColor: '#E9E9E9', height: 51, width: width - 30 }]}>
                                        <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>420 kcal  ·  38 g Carbs  ·  7 g Protein  ·  22 g Fat</Text>
                                    </View>
                                    <View style={[styles.details, { flexDirection: 'row', height: 51, justifyContent: 'space-between' }]}>

                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>

                                            <Image source={require('../../../assets/icons/clock_979797.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>0:10</Text>

                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                                            <Image source={require('../../../assets/icons/level_979797.png')} style={{ width: 30, height: 30, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>Easy</Text>

                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>

                                            <Image source={require('../../../assets/icons/people_979797.png')} style={{ width: 25, height: 25, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Bold', fontSize: 14, color: '#454545', textAlign: 'center' }}>4 people</Text>

                                        </View>

                                    </View>
                                </View>

                                <View style={styles.contentSubBlock}>
                                    <View style={[styles.details, { flexDirection: 'row', margin: 10 }]}>
                                        <View style={{ flex: 1, alignItems: 'center', }}>
                                            <Image source={require('../../../assets/icons/vegan.png')} style={{ width: 60, height: 60, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>Vegan</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', }}>
                                            <Image source={require('../../../assets/icons/vegan.png')} style={{ width: 60, height: 60, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>No nuts</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', }}>
                                            <Image source={require('../../../assets/icons/vegan.png')} style={{ width: 60, height: 60, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>Gluten free</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', }}>
                                            <Image source={require('../../../assets/icons/vegan.png')} style={{ width: 60, height: 60, }} />
                                            <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', textAlign: 'center' }}>What ever</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.contentSubBlock}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>Ingredients</Text>
                                    </View>
                                    <View style={[styles.details, { borderBottomWidth: 0.5, borderBottomColor: '#E9E9E9', height: 190, }]}>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· 2 avocados, pitted</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· 1/2 c. cherry tomatoes, halved</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· 1/2 c. mini marinated mozzarella balls,   halved balsamic vinegar</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· Extra virgin olive oil</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· Kosher salt</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· Freshly ground black pepper</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· Basil, for garnish</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10, flexDirection: 'row', }]}>
                                        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 20 }}>
                                            <Image source={require('../../../assets/icons/minus_circle_8ACE91.png')} style={{ width: 30, height: 30, }} />
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'DINPro-Light', fontSize: 18, color: '#454545', }}>4 Portions</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
                                            <Image source={require('../../../assets/icons/plus_circle_8ACE91.png')} style={{ width: 30, height: 30, }} />
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.contentSubBlock}>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'DINPro-Light', fontSize: 22, color: '#454545', textAlign: 'center' }}>Directions</Text>
                                    </View>
                                    <View style={[styles.details, { margin: 10 }]}>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>1. Coop out avocados, leaving a small border.     Dice avocado and set aside.</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>2. In a large bowl, toss diced avocado with      tomatoes, mozzarella, balsamic, and      olive oil.</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>· 1/2 c. mini marinated mozzarella balls,   halved balsamic vinegar</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>3. Season with salt and pepper.</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>4. Divide salad among 4 avocado halves.</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontFamily: 'DINPro-Light', fontSize: 16, color: '#838383', }}>5. Garnish with basil.</Text>
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