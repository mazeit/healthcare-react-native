import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { TabNavigator } from 'react-navigation';
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
import SignUp from './src/components/login/SignUp';

import ContentOverview from './src/components/content overview';
import CategoryList from './src/components/content overview/CategoryList'
import Recipe from './src/components/content overview/Recipe';
import Meditation from './src/components/content overview/Meditation';
import Yoga from './src/components/content overview/Yoga';

import CalendarView from './src/components/calendar';
import Activity from './src/components/calendar/Activity.js';
import AddActivity1 from './src/components/calendar/AddActivity1';
import ChoseActivity from './src/components/calendar/ChoseActivity';
import Tracker from './src/components/calendar/Tracker';

import ProfilePage from './src/components/user profile';
import ProfileInformation from './src/components/user profile/ProfileInformation';
import ProfileNotification from './src/components/user profile/ProfileNotification';
import TrackingSetting from './src/components/user profile/TrackingSetting';
import TermsOfUse from './src/components/user profile/TermsOfUse';
import HelpFaq from './src/components/user profile/HelpFaq';
import InviteMyFriends from './src/components/user profile/InviteMyFriends';
import InviteMyFriendsList from './src/components/user profile/InviteMyFriendsList';
import FaqAnswer from './src/components/user profile/FaqAnswer';


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
    SignUp: { screen: SignUp },
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
    Meditation: { screen: Meditation },
    Yoga: { screen: Yoga },

  },
  {
    headerMode: 'none',
  }
);

//// CONTENT OVERVIEW STACK / END --------------------------------------------------------

//// CALENDAR STACK / START --------------------------------------------------------

const CalendarStack = StackNavigator({
  CalendarView: { screen: CalendarView },
  AddActivity1: { screen: AddActivity1 },
  ChoseActivity: { screen: ChoseActivity },
  Activity: { screen: Activity },
  Tracker: { screen: Tracker },

},
  {
    headerMode: 'none',
  }
);


//// CALENDAR STACK / END --------------------------------------------------------


//// PROFILE STACK / START --------------------------------------------------------

const ProfileStack = StackNavigator({
  ProfilePage: { screen: ProfilePage },
  ProfileInformation: { screen: ProfileInformation },
  ProfileNotification: { screen: ProfileNotification },
  TrackingSetting: { screen: TrackingSetting },
  TermsOfUse: { screen: TermsOfUse },
  HelpFaq: { screen: HelpFaq },
  InviteMyFriends: { screen: InviteMyFriends },
  InviteMyFriendsList: { screen: InviteMyFriendsList },
  FaqAnswer: { screen: FaqAnswer },

},
  {
    headerMode: 'none',
  }
);


//// PROFILE STACK / END --------------------------------------------------------



////  ROOT STACK / START------------------------------------>

const AppNavigator = StackNavigator({
  SignInStack: { screen: SignInStack },
  WelcomeScreen: { screen: WelcomeScreen },
  ContentStack: { screen: ContentStack },
  CalendarStack: { screen: CalendarStack },
  GeneralMenu: { screen: GeneralMenu },
  
  ProfileStack: { screen: ProfileStack }

}, {
    mode: 'modal',
    headerMode: 'none',
  });


////  ROOT STACK / END ------------------------------------>

const styles = StyleSheet.create({
  container: {

  },
});
