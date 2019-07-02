import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: colors.backgroundDarker,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.darkTransparent,
  },

  header: {
    backgroundColor: colors.backgroundDarker,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkTransparent,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 10,
    height: 54 + getStatusBarHeight() + 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
