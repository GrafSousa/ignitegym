import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { getTokens, useTheme } from 'tamagui';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';
import { Exercise } from '@screens/Exercise';

type AppRoutes = {
  home: undefined;
  profile: undefined;
  history: undefined;
  exercise: undefined;
};

export type AppNavigatorRouteProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { green500, gray200, gray600 } = useTheme();

  const { size } = getTokens();
  const iconSize = size.$6.val;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: green500.val,
        tabBarInactiveTintColor: gray200.val,
        tabBarStyle: {
          backgroundColor: gray600.val,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: size.$10.val,
          paddingTop: size.$6.val,
        },
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name='history'
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name='exercise'
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
