import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import { registerScreens } from './screens';
import store from './store';
import Login from './screens/Login';
import {AsyncStorage} from 'react-native';
registerScreens(store,Provider); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'tab.Home', // this is a registered name for a screen
      icon: require('./img/one.png'),     
      title: 'Home',
      navigatorStyle:{
        navBarHidden:true
      }
    },
    {
      label: 'Heroes',
      screen: 'tab.Heroes',
      icon: require('./img/one.png'),
     
      title: 'Heroes',
      navigatorStyle:{
        navBarHidden:true
      }
    },
    {
      label: 'Settingan',
      screen: 'tab.Settingan',
      icon: require('./img/one.png'),     
      title: 'Settingan',
      navigatorStyle:{
        navBarHidden:true
      }
    }
  ]
});