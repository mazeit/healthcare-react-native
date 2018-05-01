import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');


const menuList = [
    {
        name: 'MY LIVINFLOW',
        component: 'ContentOverview'
    },
    {
        name: 'MY NAVIGATOR',
        component: 'Navigator'
    },
    {
        name: 'MY FAVORITES',
        component: 'Favourites'
    },
    {
        name: 'MY PROFILE',
        component: 'Profile'
    },
    {
        name: 'HELP & FAQ',
        component: 'HelpFaq'
    },
    {
        name: 'INVITE MY FRIENDS',
        component: 'InviteFriends'
    },
    {
        name: 'WEBSHOP',
        component: 'WebShop'
    },
    {
        name: 'BLOG',
        component: 'Blog'
    },
];

export default class GeneralMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: 20}} onPress={() => this.props.showMenu()}>
                            <Icon name="close" size={50} style={{ marginLeft: -15}} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={ styles.menu }>
                    {
                        menuList.map((item, i) => 
                            <TouchableOpacity key={i} onPress={ () => this.props.navigation.navigate(item.component)} style={ styles.listItem }>
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