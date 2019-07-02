import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  projectsList: {
    padding: 20,
  },

  projectContainer: {
    backgroundColor: colors.darkTransparent,
    borderWidth: 1,
    borderColor: colors.darkTransparent,
    padding: 20,
    borderRadius: 5,
    marginBottom: 15,
  },

  projectTitle: {
    fontSize: 14,
    color: colors.white,
  },

  newProjectButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
