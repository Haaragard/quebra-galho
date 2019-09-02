import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';
import Register from './pages/register/register';


const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    About: About,
    Login: Login,
    Register: Register,
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f5f5f5',
      }
    },
  })
);

export default Routes;