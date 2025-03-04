import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '@/constants/color';
import { forwardRef } from 'react';

interface Props extends TextInputProps {
  label?: string;
  variant?: 'filled' | 'standard' | 'outlined';
  error?: string;
}

const InputFieldComponent = forwardRef<TextInput, Props>(
  ({ label, variant = 'filled', error = '', ...props }: Props, ref) => {
    return (
      <View>
        {label && <Text style={Styles.label}>{label}</Text>}
        <View style={[Styles.container, Styles[variant], Boolean(error) && Styles.inputError]}>
          <TextInput
            ref={ref}
            placeholderTextColor={colors.GRAY['500']}
            style={Styles.input}
            autoCapitalize={'none'}
            spellCheck={false}
            autoCorrect={false}
            {...props}
          />
        </View>
        {Boolean(error) && <Text style={Styles.error}>{error}</Text>}
      </View>
    );
  },
);

export const InputField = InputFieldComponent;

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
