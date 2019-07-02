import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Main,
  }),
);
