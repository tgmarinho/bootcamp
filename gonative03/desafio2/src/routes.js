import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from '~/pages/repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Repositories,
  }),
);

export default Routes;
