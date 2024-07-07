import { SplashScreen, Stack } from 'expo-router';

import { AppProvider } from '../providers/AppProvider';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppProvider onInitialized={() => SplashScreen.hideAsync()}>
      <Stack initialRouteName="signup">
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
