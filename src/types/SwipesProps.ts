import { User } from './User';
import { ForwardedRef } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

// Define the type for the component props
export type SwipesProps = {
    users: User[];
    currentIndex: number;
    handleLike: () => void;
    handlePass: () => void;
    swipesRef: ForwardedRef<Swipeable>;
  };
