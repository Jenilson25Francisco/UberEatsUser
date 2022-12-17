import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetails from './src/screens/RestaurantDetails';

export default function App() {
  return (
    <View style={styles.container}>

     {/* <HomeScreen />*/}
      {<RestaurantDetails />}

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
