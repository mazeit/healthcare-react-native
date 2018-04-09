import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


import GeneralMenu from '../GeneralMenu';
import ImportantNotification from './ImportantNotification';
import ContentOverview from './ContentOverview'
import CategoryList from './CategoryList'
import Recipe from './Recipe'


const { height, width } = Dimensions.get('window');

export default class ContentOverviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'contentInformation',
            heading: 'SELECT YOUR TOPIC',
            goBack: false,
            showMenu: false,
            showHeader: false,
        };
        this.showMenu = this.showMenu.bind(this)
        this.goToNext = this.goToNext.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    goToNext(componentName, headerTitle, showHeader = false, goBack = false) {


        this.setState({ page: componentName, showHeader: showHeader, heading: headerTitle, goBack: goBack });
        
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    goBack() {

    //     switch (this.state.page) {
    //         case 'categoryList':

    //             this.setState({ page: 'contentOverview', showHeader: true, heading: 'SELECT YOUR TOPIC', goBack: false });
    //             break;

    //         case 'detailedView':
                
    //             this.setState({ page: 'categoryList', showHeader: showHeader, heading: 'NUTRI', goBack: true });
    //             break;

    //         default:
    //             break;
    //     }
    }

    render() {


        return (
            <View style={styles.container}>

                {
                    this.state.showHeader &&
                    <View style={styles.header}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            {
                                this.state.goBack && <TouchableOpacity onPress={() => this.props.goToNext('contentOverview','SELECT YOUR TOPIC', true, false)}><Image source={require('../../../assets/icons/back_grey.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} /></TouchableOpacity>
                            }
                        </View>
                        <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'DINPro-Bold', fontSize: 16, color: '#454545' }}>{this.state.heading}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => this.showMenu()}>
                                <Image source={require('../../../assets/icons/menu.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                <View style={{ flex: 9 }}>
                    {
                        (() => {
                            switch (this.state.page) {
                                case 'contentInformation':
                                    return <ImportantNotification navigation={this.props.navigation} goToNext={this.goToNext} />;
                                case 'contentOverview':
                                    return <ContentOverview goToNext={this.goToNext} />;
                                case 'categoryList':
                                    return <CategoryList goToNext={this.goToNext} />;
                                case 'detailedView':
                                    return <Recipe goToNext={this.goToNext} />;
                                default:
                                    return null;
                            }
                        })()
                    }
                </View>

                {
                    this.state.showMenu && <View style={styles.menuOverlay}>
                        <GeneralMenu navigation={this.props.navigation} showMenu={this.showMenu} />
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
        //   backgroundColor: '#F5F5F5'
    },
    header: {
        flex: 1,
        backgroundColor: '#FFFFFF80',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
    },

});