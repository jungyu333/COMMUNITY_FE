import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '@/constants/color';

interface Props extends TextInputProps {
  label?: string;
  variant?: 'filled' | 'standard' | 'outlined';
  error?: string;
}

export const InputField = ({ label, variant = 'filled', error = '', ...props }: Props) => {
  return (
    <View>
      {label && <Text style={Styles.label}>{label}</Text>}
      <View style={[Styles.container, Styles[variant], Boolean(error) && Styles.inputError]}>
        <TextInput placeholderTextColor={colors.GRAY['500']} style={Styles.input} {...props} />
      </View>
      {Boolean(error) && <Text style={Styles.error}>{error}</Text>}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  label: {
    fontSize: 12,
    color: colors.GRAY['700'],
    marginBottom: 5,
  },

  filled: {
    backgroundColor: colors.GRAY['100'],
  },

  standard: {},

  outlined: {},

  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },

  error: {
    fontSize: 12,
    marginTop: 5,
    color: colors.RED['500'],
  },

  inputError: {
    backgroundColor: colors.RED['100'],
  },
});
