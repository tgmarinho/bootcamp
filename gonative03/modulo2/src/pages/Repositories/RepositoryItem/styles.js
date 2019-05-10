import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;
