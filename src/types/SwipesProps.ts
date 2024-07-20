import { User } from './User';
import { ForwardedRef, RefObject } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

// Define the type for the component props
export type SwipesProps = {
    key: number;
    ref: RefObject<Swipeable>;
    users: User[];
    currentIndex: number;
    handleLike: () => void;
    handlePass: () => void;
    swipesRef: ForwardedRef<Swipeable>;
  };
