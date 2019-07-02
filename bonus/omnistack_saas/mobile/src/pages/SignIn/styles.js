import { StyleSheet } from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
