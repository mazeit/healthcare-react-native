import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';

export default class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let props = this.props;
        return (
            <View style={[{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: props.color ? props.color : '#000',
                alignItems: 'center',
                justifyContent: 'center',
                }, props.style]}>
            {
                props.selected ?
                    <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: props.color ? props.color : '#000',
                    }}/>
                : null
            }
            </View>
        );
    }
}
