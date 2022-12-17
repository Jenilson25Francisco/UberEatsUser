
import { View, Image, FlatList, StyleSheet, Text } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';

const restaurant = restaurants[0];
("");

const RestaurantDetailsPage = () => {

    return (

        <View style={styles.page}> 
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <Text style={styles.title}>{restaurant.name}</Text>

        </View>

    );

};

const styles = StyleSheet.create({});

export default RestaurantDetailsPage;