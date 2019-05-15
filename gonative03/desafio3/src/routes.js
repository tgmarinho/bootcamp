import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const routes = createAppContainer(createSwitchNavigator({ Main }));

export default routes;
