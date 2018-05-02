import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';



import Login from './src/components/login';
import WelcomeScreen from './src/components/WelcomeScreen';
import ContentOverview from './src/components/content overview';
import CalendarContainer from './src/components/calendar';
import Profile from './src/components/user profile';
import userReducer from './src/reducers';


const store = createStore(userReducer, compose(applyMiddleware(thunk)));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}


const AppNavigator = StackNavigator({
  Login: { screen: Login },
  WelcomeScreen: { screen: WelcomeScreen },
  ContentOverview: { screen: ContentOverview },
  CalendarContainer: { screen: CalendarContainer },
  Profile: { screen: Profile}

},{
  initialRouteName: 'Login',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      elevation: 0,
        shadowOpacity: 0,
      backgroundColor: '#FFFFFF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const styles = StyleSheet.create({
  container: {

  },
});
