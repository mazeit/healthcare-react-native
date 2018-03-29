import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

const menuList = ['MY LIVINFLOW', 'MY NAVIGATOR', 'MY FAVORITES', 'MY PROFILE', 'HELP & FAQ', 'INVITE MY FRIENDS', 'WEBSHOP', 'BLOG'];

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
                        <TouchableOpacity onPress={() => this.props.showMenu()}>
                            <Image source={require('../../assets/icons/close.png')} style={{ width: 54, height: 54, }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={ styles.menu }>
                    {
                        menuList.map((item, i) => 
                            <Text key={i} style={{ flex:1, fontFamily: 'DINPro-Light', fontSize: 16, color: '#FFFFFF',}}>{item}</Text>
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
});