import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { SwipesProps } from '../types/SwipesProps';
import SwipeableImage from './SwipeableImage';

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
        <RectButton style={styles.container}>
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
        <RectButton style={styles.container}>
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
