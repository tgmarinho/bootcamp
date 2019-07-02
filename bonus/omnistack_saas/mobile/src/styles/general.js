import colors from './colors';

export const formStyles = {
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.lighter,
    marginBottom: 5,
  },

  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.darkTransparent,
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: colors.white,
  },
};

export const buttonStyles = {
  button: {
    height: 44,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
};
