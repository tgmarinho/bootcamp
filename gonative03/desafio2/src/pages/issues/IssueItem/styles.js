import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: metrics.baseMargin,
    padding: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  name: {
    color: colors.regular,
    fontSize: 14,
  },
  icon: {
    color: colors.regular,
  },
});

export default styles;
