import { StyleSheet } from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  cancel: {
    alignItems: 'center',
    marginTop: 20,
  },

  cancelText: {
    color: colors.light,
  },
});

export default styles;
