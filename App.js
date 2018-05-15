import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './src/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

import WelcomeScreen from './src/components/WelcomeScreen';
import userReducer from './src/reducers';
import GeneralMenu from './src/components/GeneralMenu';

import Login from './src/components/login';
import SignInEmail from './src/components/login/SignInEmail';
import SignInPassword from './src/components/login/SignInPassword';
import PasswordForgotten from './src/components/login/PasswordForgotten';

import ContentOverview from './src/components/content overview';
import CategoryList from './src/components/content overview/CategoryList'
import Recipe from './src/components/content overview/Recipe';

import CalendarView from './src/components/calendar';
import Activity from './src/components/calendar/Activity.js';
// import AddActivityCategory from './src/components/calendar/AddActivityCategory';
// import ChoseActivity from '.src/components/calendar/ChoseActivity';

import Profile from './src/components/user profile'


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

////  SIGN IN STACK / START --------------------------------------------------------------

const SignInStack = StackNavigator(
  {
    Login: { screen: Login },
    SignInEmail: { screen: SignInEmail },
    SignInPassword: { screen: SignInPassword },
    PasswordForgotten: { screen: PasswordForgotten },

  },
  {
    headerMode: 'none',
  }
);

//// SIGN IN STACK / END -------------------------------------------------------------------


//// CONTENT OVERVIEW STACK / START --------------------------------------------------------

const ContentStack = StackNavigator(
  {
    ContentOverview: { screen: ContentOverview },
    CategoryList: { screen: CategoryList },
    Recipe: { screen: Recipe },
    // PasswordForgotten: { screen: PasswordForgotten },

  },
  {
    headerMode: 'none',
  }
);

//// CONTENT OVERVIEW STACK / END --------------------------------------------------------

//// CALENDAR STACK / START --------------------------------------------------------

const CalendarStack = TabNavigator({
  TabItem1: {
      screen: CalendarView,
      navigationOptions: {
          tabBarLabel:"Calendar",
          tabBarIcon: ({ tintColor }) => <Icon name={"calender"} size={30} color={tintColor} />
      }
  },
  TabItem2: {
    screen: CalendarView,
    navigationOptions: {
        tabBarLabel:"Tracker",
        tabBarIcon: ({ tintColor }) => <Icon name={"tracker"} size={30} color={tintColor} />
    }
  },
  TabItem3: {
    screen: CalendarView,
    navigationOptions: {
        tabBarLabel:"My Challange",
        tabBarIcon: ({ tintColor }) => <Icon name={"challenge"} size={30} color={tintColor} />
    }
  },

}, {
      tabBarOptions: {
          activeTintColor: '#4AB3E2',
      }
});


//// CALENDAR STACK / END --------------------------------------------------------



////  ROOT STACK / START------------------------------------>

const AppNavigator = StackNavigator({
  SignInStack: { screen: SignInStack },
  WelcomeScreen: { screen: WelcomeScreen },
  ContentStack: { screen: ContentStack },
  CalendarStack: { screen: CalendarStack },
  GeneralMenu: { screen: GeneralMenu },
  Profile: { screen: Profile}

<<<<<<< HEAD
}, {
    mode: 'modal',
    headerMode: 'none',
  });


  ////  ROOT STACK / END ------------------------------------>
=======
},{
    headerMode: 'none',
});
>>>>>>> a2233c07f641da8b4d6f3e745b5a41d704982c85

const styles = StyleSheet.create({
  container: {

  },
});
