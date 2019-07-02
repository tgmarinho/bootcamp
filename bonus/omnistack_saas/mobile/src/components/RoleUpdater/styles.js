import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  roleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },

  cancel: {
    alignItems: 'center',
    marginTop: 20,
  },

  cancelText: {
    color: colors.light,
  },
});

export default styles;
