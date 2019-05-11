import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from '~/pages/repositories';
import Issues from '~/pages/issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Repositories,
    Issues,
  }),
);

export default Routes;
