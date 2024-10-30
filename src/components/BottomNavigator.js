import React from 'react';
import { View, StyleSheet , Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.tabContainer}>
        <Pressable onPress={() => ('Info')} style={styles.iconContainer}>
          <Icon name="home" size={24} color="#000" />
        </Pressable>
        <Pressable onPress={() => ('Messages')} style={styles.iconContainer}>
          <Icon name="envelope" size={24} color="#000" />
        </Pressable>
        <Pressable onPress={() => ('NewContent')} style={styles.iconContainer}>
          <Icon name="plus-circle" size={24} color="#000" />
        </Pressable>
        <Pressable onPress={() => ('Notifications')} style={styles.iconContainer}>
          <Icon name="bell" size={24} color="#000" />
        </Pressable>
        <Pressable onPress={() => ('Menu')} style={styles.iconContainer}>
          <Icon name="bars" size={24} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, 
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
    ,
    backgroundColor: '#fff',
    
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomTabNavigator;
