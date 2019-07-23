import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';

export default function createNavigator(isLoggedIn = false) {
  console.tron.log(isLoggedIn);
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}
