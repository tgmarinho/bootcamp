import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Podcast from '~/pages/Podcast';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Podcast,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
