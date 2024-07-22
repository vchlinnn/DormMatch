import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Define the type for the props
type BottomBarProps = {
  handleLikePress: () => void;
  handlePassPress: () => void;
};

const BottomBar: React.FC<BottomBarProps> = ({
  handleLikePress,
  handlePassPress,
}) => {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
        <FontAwesome name="times" size={27} color="#416499" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLikePress}>
        <FontAwesome name="check" size={27} color="#416499" />
      </TouchableOpacity>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#E9F3FD',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
});

export default BottomBar;
