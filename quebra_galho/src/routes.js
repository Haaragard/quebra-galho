import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home/home';


const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
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