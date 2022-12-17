import { StyleSheet, Text, View, Image } from 'react-native';


const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
        <Image 
            source={{
                uri: restaurant.image
            }}
            style={styles.Image}
        />

        <View style={styles.row}>
            <View>
                <Text style={styles.Title}>{restaurant.name}</Text>
                <Text style={styles.Subtile}>
                    $ {restaurant.deliveryFee} &#8226;
                    {restaurant.minDeliveryTime} -
                    {restaurant.maxDeliveryTime} minutes
                </Text>
            </View>

            <View style={styles.rating}>

                <Text>{restaurant.rating}</Text>

            </View>

        </View>

    </View>
  );
}

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
  
      width: "100%",
      marginVertical: 10,
  
    },
  
    Image: {
  
      width: "100%",
      aspectRatio: 5 / 3,
      marginBottom: 5,
      
    },
  
    Title: {
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 10,
    },
  
    Subtile: {
      color: "grey",
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rating: {
        marginLeft: 'auto',
        backgroundColor: "lightgray",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    }
  
  });