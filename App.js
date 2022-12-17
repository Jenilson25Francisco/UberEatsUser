import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetails';

export default function App() {
  return (
    <View style={styles.container}>

      <RestaurantDetailsPage />
     

      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
    //padding: 10,
  },
});
