import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount(){

    this.timeoutHandle = setTimeout(()=>{
      this.navigate('contentPage');
    }, 2000);

  }

  navigate(name) {
    
    this.props.navigator.push({
      name,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loader}>
          <Image source={require('../../assets/images/loader.png')} style={{width: 100, height: 100, resizeMode: 'center'}}/>
        </View>
        <Text style={[styles.welcome,{fontFamily:'DINPro', fontSize: 22}]}>Welcome to livinflow</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        flex: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
