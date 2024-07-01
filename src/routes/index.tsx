import { YStack, useTheme } from 'tamagui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { gray700 } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = gray700.val;

  return (
    <YStack f={1} bg='$gray700'>
      <NavigationContainer theme={theme}>
        {/* <AuthRoutes /> */}
        <AppRoutes />
      </NavigationContainer>
    </YStack>
  );
}
