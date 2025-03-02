import { SafeAreaView, StyleSheet } from 'react-native';
import { FeedList } from '@/components/FeedList';
import { colors } from '@/constants/color';

export default function HomeScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <FeedList />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
