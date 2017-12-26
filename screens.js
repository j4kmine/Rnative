import { Navigation } from 'react-native-navigation';
import Home from './screens/Home';
import Heroes from './containers/heroes';
import Settingan from './screens/Settingan';

import HeroAdd from './screens/HeroAdd';
import HeroView from './screens/HeroView';
import HeroEdit from './screens/HeroEdit';
import Login from './screens/Login';
// register all screens of the app (including internal ones)
export function registerScreens(store,Provide) {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Heroes', () => Heroes,store,Provide);
  Navigation.registerComponent('tab.Settingan', () => Settingan);
  Navigation.registerComponent('tab.Login', () => Login,store,Provide);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd,store,Provide);
  Navigation.registerComponent('push.HeroView', () => HeroView,store,Provide);
  Navigation.registerComponent('push.HeroEdit', () => HeroEdit,store,Provide);

}