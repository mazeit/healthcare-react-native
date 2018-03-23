import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Loader from './src/components/Loader.js';
import Welcome from './src/components/Welcome.js';
import SignInEmail from './src/components/SignInEmail.js';
import SignInPassword from './src/components/SignInPassword.js';
import PasswordForgotten from './src/components/PasswordForgotten.js';
import ContentOverview from './src/components/ContentOverview.js';
import AuthoriseWelcome from './src/components/AuthoriseWelcome.js';
import ImportantNotification from './src/components/ImportantNotification.js';
import CalendarView from './src/components/CalendarView.js';
import userReducer from './src/reducers';


const store = createStore(userReducer,  compose(applyMiddleware(thunk)));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene (route, navigator) {
    if(route.name == 'loaderPage') {
      return <Loader navigator={navigator} />
    } else if (route.name == 'homePage') {
      return <Welcome navigator={navigator} />
    } else if (route.name == 'signInEmailPage') {
      return <SignInEmail navigator={navigator} />
    } else if (route.name == 'signInPasswordPage') {
      return <SignInPassword navigator={navigator} user={route.user} />
    } else if (route.name == 'passwordForgottenPage') {
      return <PasswordForgotten navigator={navigator} />
    } else if (route.name == 'authoriseWelcomePage') {
      return <AuthoriseWelcome navigator={navigator} user={route.user}/>
    } else if (route.name == 'contentOverviewPage') {
      return <ContentOverview navigator={navigator} />
    } else if (route.name == 'importantNotificationPage') {
      return <ImportantNotification navigator={navigator} />
    } else if (route.name == 'CalendarPage') {
      return <CalendarView navigator={navigator} />
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ name: 'loaderPage'}}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if (route.name == 'homePage') {
              return Navigator.SceneConfigs.VerticalUpSwipeJump;
            } else {
              return Navigator.SceneConfigs.PushFromRight;
            }
          }
        }
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
