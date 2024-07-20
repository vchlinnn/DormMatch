import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Define the type for the user object
type AppUser = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  dob: {
    date: string;
    age: number;
  };
  location: {
    city: string;
    country: string;
  };
};

// Define the type for the component props
type SwipeableImageProps = {
  user: AppUser;
  willLike: boolean;
  willPass: boolean;
};

const SwipeableImage: React.FC<SwipeableImageProps> = ({
  user,
  willLike,
  willPass,
}) => {
  return (
    <View>
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: '#64EDCC' }}>LIKE</Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: '#F06795' }}>NOPE</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>
            {user.name.first}
          </Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {user.dob.age}
          </Text>
        </View>
        <View style={styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="white" />
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {user.location.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

const boxStyle: ViewStyle = {
  position: 'absolute',
  top: '50%',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderWidth: 3,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  likeBox: {
    ...boxStyle,
    left: 40,
    borderColor: '#64EDCC',
  },
  passBox: {
    ...boxStyle,
    right: 40,
    borderColor: '#F06795',
  },
  photo: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrimary: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: 'white',
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.80)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default SwipeableImage;
