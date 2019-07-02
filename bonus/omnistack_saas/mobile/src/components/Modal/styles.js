import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkerTransparent,
    justifyContent: 'center',
  },

  content: {
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 20,
    borderRadius: 5,
    alignItems: 'stretch',
  },
});

export default styles;
