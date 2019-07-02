import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDarker,
    paddingHorizontal: 10,
    paddingTop: getStatusBarHeight() + 25,
  },

  teamContainer: {
    marginBottom: 10,
  },

  teamAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  newTeam: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
