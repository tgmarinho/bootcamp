import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    marginTop: metrics.baseMargin,
  },

  boxInput: {
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  inputError: {
    borderColor: colors.danger,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 30,
    marginTop: metrics.baseMargin,
  },
  button: {
    marginLeft: metrics.baseMargin + 2,
  },
  icon: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
