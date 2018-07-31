import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');


const menuList = [
    {
        name: 'MY LIVINFLOW',
        component: 'ContentOverview',
        params: {}
    },
    {
        name: 'MY CHALLENGE',
        component: 'CalendarView',
        params: {}
    },
    {
        name: 'MY FAVORITES',
        component: 'CategoryList',
        params: {viewType: 'fav'}
    },
    {
        name: 'MY PROFILE',
        component: 'ProfileStack',
        params: {}
    },
    {
        name: 'BLOG',
        component: 'BlogStack',
        params: {}
    },
    // {
    //     name: 'COACHES',
    //     component: 'CoachProfile',
    //     params: {}
    // },
    {
        name: 'HELP & FAQ',
        component: 'HelpFaq',
        params: {}
    },
    {
        name: 'INVITE MY FRIENDS',
        component: 'InviteMyFriends',
        params: {}
    },
    {
        name: 'WEBSHOP',
        component: 'WebShop'
        // webLink: 'http://livinflow.com/'
    },
];

export default class GeneralMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        if (item.webLink)
            Linking.openURL(item.webLink);
        else
            this.props.navigation.navigate(item.component, item.params);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={{ flex: 1, }}>
                    </View>
                    <View style={{ flex: 1, }}>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: 20}} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="close" size={50} style={{ marginLeft: -15}} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={ styles.menu }>
                    {
                        menuList.map((item, i) => 
                            <TouchableOpacity key={i} onPress={ () => this.handleClick(item)} style={ styles.listItem }>
                                <Text style={{ flex:1, fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF',}}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE0069',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    menu: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    listItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});