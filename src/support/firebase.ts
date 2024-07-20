import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import { firebaseConfig } from '../config/firebaseConfig';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// import { Persistence } from 'firebase/auth';

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  
