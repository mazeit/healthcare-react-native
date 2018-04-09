import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';



import Login from './src/components/login';
import ContentOverviewContainer from './src/components/content overview';
import ContentOverview from './src/components/content overview/ContentOverview';
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
        <AppNavigator />
      </Provider>
    );
  }
}


const AppNavigator = StackNavigator({
  WelcomeScreen: { screen: Login },
  ContentOverviewContainer: { screen: ContentOverviewContainer },
  CalendarContainer: { screen: CalendarContainer },
  ContentOverview: { screen: ContentOverview},
  Profile: { screen: Profile}




}, { headerMode: 'none' });

const styles = StyleSheet.create({
  container: {

  },
});
