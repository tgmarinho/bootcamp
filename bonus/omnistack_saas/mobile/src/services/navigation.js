import { NavigationActions, NavigationEvents } from 'react-navigation';

let nav;

function setTopLevelNavigator(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default {
  setTopLevelNavigator,
  navigate,
};
