import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/color';

interface Props extends PressableProps {
  label: string;
  size?: 'medium' | 'large';
  variant?: 'filled';
}

export const CustomButton = ({ label, size = 'large', variant = 'filled', ...props }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [Styles.container, Styles[size], Styles[variant], pressed && Styles.pressed]}
      {...props}>
      <Text style={Styles[variant]}>{label}</Text>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  large: {
    width: '100%',
    height: 44,
  },

  medium: {},

  filled: {
    backgroundColor: colors.ORANGE['600'],
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.WHITE,
  },

  pressed: {
    opacity: 0.8,
  },
});
