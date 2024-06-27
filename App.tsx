import { StatusBar, Text, View } from 'react-native';
import { TamaguiProvider } from 'tamagui';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { tamaguiConfig } from './src/config/tamagui.config';

import { Loading } from '@components/Loading';
import { SignIn } from '@screens/Signin';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading />}
    </TamaguiProvider>
  );
}
