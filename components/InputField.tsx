import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '@/constants/color';

interface Props extends TextInputProps {
  label?: string;
  variant?: 'filled' | 'standard' | 'outlined';
}

export const InputField = ({ label, variant = 'filled', ...props }: Props) => {
  return (
    <View>
      {label && <Text style={Styles.label}>{label}</Text>}
      <View style={[Styles.container, Styles[variant]]}>
        <TextInput style={Styles.input} {...props} />
      </View>
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
});
