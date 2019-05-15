import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    marginTop: metrics.baseMargin,
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },

  error: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  activeFilter: {
    color: colors.darker,
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxButtons: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    backgroundColor: '#CCC',
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: metrics.baseRadius,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: colors.dark,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
