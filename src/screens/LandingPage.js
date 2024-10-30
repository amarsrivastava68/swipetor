import React, { useEffect } from "react";
import { View,  StyleSheet, Image } from "react-native";

export default function LandingPage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("InfoPage");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
     
        <Image
          source={require("../assets/instagram.png")}
          style={styles.icon}
        />

      

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent : 'center' ,
    alignItems : 'center'
  },
 
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "transparent",
    padding: 5,
    margin: 5,
  },

  
});
