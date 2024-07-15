import React, { ForwardedRef, useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import SwipeableImage from './SwipeableImage';

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
type SwipesProps = {
  users: AppUser[];
  currentIndex: number;
  handleLike: () => void;
  handlePass: () => void;
  swipesRef: ForwardedRef<Swipeable>;
};

const Swipes: React.FC<SwipesProps> = ({
  users,
  currentIndex,
  handleLike,
  handlePass,
  swipesRef,
}) => {
  const [willLike, setWillLike] = useState(false);
  const [willPass, setWillPass] = useState(false);

  const renderLeftActions = () => {
    if (currentIndex + 1 < users.length) {
      return (
        <RectButton style={styles.container as ViewStyle}>
          <SwipeableImage
            user={users[currentIndex + 1]}
            willLike={false}
            willPass={false}
          />
        </RectButton>
      );
    }
    return null;
  };

  const renderRightActions = () => {
    if (currentIndex + 1 < users.length) {
      return (
        <RectButton style={styles.container as ViewStyle}>
          <SwipeableImage
            user={users[currentIndex + 1]}
            willLike={false}
            willPass={false}
          />
        </RectButton>
      );
    }
    return null;
  };

  return (
    <Swipeable
      ref={swipesRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false);
        handleLike();
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false);
        handlePass();
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <SwipeableImage
        user={users[currentIndex]}
        willLike={willLike}
        willPass={willPass}
      />
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.forwardRef<Swipeable, SwipesProps>((props, ref) => (
  <Swipes swipesRef={ref} {...props} />
));
