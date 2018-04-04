import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


import GeneralMenu from '../GeneralMenu';
import ImportantNotification from './ImportantNotification';
import ContentOverview from './ContentOverview'
// import CoachProfile from './CoachProfile'
// import Example from './Example'


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
    }

    goToNext() {
        switch (this.state.page) {

            case 'contentInformation':

                this.setState({ page: 'contentOverview', showHeader: true });
                break;

            case 'password':
                return <SignInPassword navigation={this.props.navigation} forgotPassword={this.forgotPassword} setInput={this.setInput} invalidPassword={this.state.invalidPassword} />;
            case 'passwordForgoten':
                return <PasswordForgotten />;
            default:
                return null;
        }
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }


    render() {

        return (
            <View style={styles.container}>

                {
                    this.state.showHeader &&
                    <View style={styles.header}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            {
                                this.state.goBack && <Image source={require('../../../assets/icons/back_grey.png')} style={{ width: 54, height: 54, resizeMode: 'center' }} />
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
                                case 'passwordForgoten':
                                    return <PasswordForgotten />;
                                default:
                                    return null;
                            }
                        })()
                    }
                </View>

                {
                    this.state.showMenu && <View style={styles.menuOverlay}>
                        <GeneralMenu showMenu={this.showMenu} />
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
        backgroundColor: '#F5F5F580',
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