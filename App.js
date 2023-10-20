import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Onboarding from './Screens/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
