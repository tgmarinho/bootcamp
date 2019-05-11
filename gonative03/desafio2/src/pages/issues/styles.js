import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    marginTop: metrics.baseMargin,
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
});

export default styles;
