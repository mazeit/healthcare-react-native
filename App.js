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
import ImportantNotification from './src/components/ImportantNotification';


import Login from './src/components/login';
import Welcome from './src/components/login/WelcomeNew';
import SignInEmail from './src/components/login/SignInEmail';
import SignInPassword from './src/components/login/SignInPassword';
import PasswordForgotten from './src/components/login/PasswordForgotten';
import SignUp from './src/components/login/SignUp';

import ContentOverview from './src/components/content overview';
import CategoryList from './src/components/content overview/CategoryList'
import Recipe from './src/components/content overview/Recipe';
import Meditation from './src/components/content overview/Meditation';
import Yoga from './src/components/content overview/Yoga';
// Not used
// import ContentDetail from './src/components/content overview/ContentDetail';


import CalendarView from './src/components/calendar';
import Activity from './src/components/calendar/Activity.js';
import AddActivity1 from './src/components/calendar/AddActivity1';
import ChoseActivity from './src/components/calendar/ChoseActivity';
import Tracker from './src/components/calendar/Tracker';
import MyChallenge from './src/components/calendar/MyChallenge';
import ProfilePage from './src/components/user profile';
import ProfileInformation from './src/components/user profile/ProfileInformation';
import ProfileNotification from './src/components/user profile/ProfileNotification';
import TrackingSetting from './src/components/user profile/TrackingSetting';
import TermsOfUse from './src/components/user profile/TermsOfUse';
import HelpFaq from './src/components/user profile/HelpFaq';
import InviteMyFriends from './src/components/user profile/InviteMyFriends';
import InviteMyFriendsList from './src/components/user profile/InviteMyFriendsList';
import FaqAnswer from './src/components/user profile/FaqAnswer';

import QuestionarieIntro from './src/components/questionaire';
import OverviewStatus from './src/components/questionaire/OverviewStatus';
import QuestionStep from './src/components/questionaire/QuestionStep';

import Blog from './src/components/blog';
import Article from './src/components/blog/Article';
import CoachProfile from './src/components/blog/CoachProfile';


import WebShop from './src/components/WebShop';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
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
    Welcome: { screen: Welcome }

  },
  {
    headerMode: 'none',
  }
);

//// SIGN IN STACK / END -------------------------------------------------------------------


//// CONTENT OVERVIEW STACK / START --------------------------------------------------------

// const ContentStack = StackNavigator(
//   {

//   },
//   {
//     headerMode: 'none',
//   }
// );

//// CONTENT OVERVIEW STACK / END --------------------------------------------------------

//// Qustionarie OVERVIEW STACK / START --------------------------------------------------------

const QuestionarieStack = StackNavigator(
  {
    QuestionarieIntro: { screen: QuestionarieIntro },
    OverviewStatus: { screen: OverviewStatus },
    QuestionStep: { screen: QuestionStep }
  },
  {
    headerMode: 'none',
  }
);

//// Qustionarie OVERVIEW STACK / END --------------------------------------------------------


//// CALENDAR STACK / START --------------------------------------------------------

const CalendarStack = StackNavigator({
  CalendarView: { screen: CalendarView },
  AddActivity1: { screen: AddActivity1 },
  ChoseActivity: { screen: ChoseActivity },
  Activity: { screen: Activity },
  Tracker: { screen: Tracker },
  MyChallenge: { screen: MyChallenge },
  // Content
  ContentOverview: { screen: ContentOverview },
  CategoryList: { screen: CategoryList },
  Recipe: { screen: Recipe },
  Meditation: { screen: Meditation },
  Yoga: { screen: Yoga },
  CoachProfile: { screen: CoachProfile },
  // ContentDetail: { screen: ContentDetail }

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


const BlogStack = StackNavigator({
  Blog: { screen: Blog },
  Article: { screen: Article },
  CoachProfile: { screen: CoachProfile },

},
  {
    headerMode: 'none',
  }
);



const WebShopStack = StackNavigator({
  WebShop: { screen: WebShop },

},
  {
    headerMode: 'none',
  }
);

////  ROOT STACK / START------------------------------------>


const AppNavigator = StackNavigator({
  SignInStack: { screen: SignInStack },
  WelcomeScreen: { screen: WelcomeScreen },
  ImportantNotification: { screen: ImportantNotification },
  // ContentStack: { screen: ContentStack },
  CalendarStack: { screen: CalendarStack },
  GeneralMenu: { screen: GeneralMenu },

  QuestionarieStack: { screen: QuestionarieStack },
  ProfileStack: { screen: ProfileStack },
  BlogStack: { screen: BlogStack },
  WebShopStack: { screen: WebShopStack }
}, {
    mode: 'modal',
    headerMode: 'none',
  });


////  ROOT STACK / END ------------------------------------>

const styles = StyleSheet.create({
  container: {

  },
});

var storage = new Storage({
  // maximum capacity, default 1000 
  size: 1000,

  // Use AsyncStorage for RN, or window.localStorage for web.
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,
  
  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,
  
  // cache data in the memory. default is true.
  enableCache: true,
  
  // if data was not found in storage or expired,
  // the corresponding sync method will be invoked and return 
  // the latest data.
  sync : {
    // we'll talk about the details later.
  }
});
global.storage = storage;
// const prevGetStateForActionCalendarStack = CalendarStack.router.getStateForAction;
// CalendarStack.router.getStateForAction = (action, state) =>{
//   if (state && action.type === 'ReplaceCurrentScreen') {
//     const routes = state.routes.slice(0, state.routes.length - 1);
//     routes.push(action);
//     return {
//       ...state,
//       routes,
//       index: routes.length - 1,
//     };
//   }
//   return prevGetStateForActionCalendarStack(action, state);
// };


// distributionUrl=https\://services.gradle.org/distributions/gradle-4.3-rc-2-all.zip
// distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
// gralde-wapper-properties

      // <key>localhost</key>
      // <dict>
      //   <key>NSExceptionAllowsInsecureHTTPLoads</key>
      //   <true/>
      // </dict>

  // react-native link react-native-jwplayer
  // react-native link

  // Change the file react-native-calendars/reservations / index.js
  // getReservations method
  // comment line 162 and 163