import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../components/common/AppButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyFirstApp</Text>

      <AppButton
        onPress={() => {
          console.log('시작하기');
        }}
      >
        시작하기
      </AppButton>
      <AppButton
        onPress={() => {
          router.push('/settings');
        }}
      >
        설정으로 이동
      </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
});
