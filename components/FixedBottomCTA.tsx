import { StyleSheet, View } from 'react-native';
import { CustomButton } from '@/components/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/constants/color';

interface Props {
  label: string;
  onPress: () => void;
}

export const FixedBottomCTA = ({ label, onPress }: Props) => {
  const inset = useSafeAreaInsets();

  return (
    <View style={[Styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
      <CustomButton label={label} onPress={onPress} />
    </View>
  );
};

const Styles = StyleSheet.create({
  fixed: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY['300'],
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
