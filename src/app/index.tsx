import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';

import BottomBar from '../components/BottomBar';
import Swipes from '../components/Swipes';
import TopBar from '../components/TopBar';
import { User } from '../types/User';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swipesRef = useRef<Swipeable>(null); // Replace 'any' with 'Swipeable'

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await axios.get<{ results: User[] }>(
        'https://randomuser.me/api/?results=50',
      );
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert('Error getting users', '', [
        { text: 'Retry', onPress: () => fetchUsers() },
      ]);
    }
  }, []); // Add dependencies here if needed

  useEffect(() => {
    fetchUsers().catch((error) => console.error(error));
  }, [fetchUsers]);

  function handleLike() {
    console.log('like');
    nextUser();
  }

  function handlePass() {
    console.log('pass');
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  function handleLikePress() {
    if (swipesRef.current) {
      swipesRef.current.openLeft();
    }
  }

  function handlePassPress() {
    if (swipesRef.current) {
      swipesRef.current.openRight();
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                  swipesRef={swipesRef}
                />
              ),
          )}
      </View>
      <BottomBar
        handleLikePress={handleLikePress}
        handlePassPress={handlePassPress}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
