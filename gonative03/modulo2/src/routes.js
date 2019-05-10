import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { colors } from '~/styles';
import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
import Organizations from '~/pages/Organizations';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(
        {
          Repositories,
          Organizations,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secondary,
            },
          },
        },
      ),
    },
    {
      initialRouteName: userLogged ? 'User' : 'Welcome',
    },
  ),
);

export default Routes;
