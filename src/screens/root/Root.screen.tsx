import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AuthService } from '../../services/authService';
import { NavigationService } from '../../services/navigationService';
import { SignInScreen } from '../enter/signIn';
import { SignUpScreen } from '../enter/signUp';
import { WelcomeScreen } from '../enter/welcome';
import { InstrumentScreen } from '../instrument/Instrument.screen';
import { PortfolioScreen } from '../main/portfolio';
import { SettingsScreen } from '../main/settings';
import { StockScreen } from '../main/stock';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

export type EnterNavigationStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
const EnterNavigationStack = createStackNavigator<
  EnterNavigationStackParamList
>();

export type MainNavigationStackParamList = {
  Main: undefined;
  Instrument: { name: string };
};
const MainNavigationStack = createStackNavigator<
  MainNavigationStackParamList
>();

const TabNavigation = createMaterialBottomTabNavigator();
const navigationRef = React.createRef<NavigationContainerRef>();

export const navigationService = new NavigationService(navigationRef);
export const authService = new AuthService();

export const RootScreen = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={navigationService.stateDidChange}>
      {!authService.isUserLoggedIn ? (
        <EnterNavigationStack.Navigator initialRouteName={'Welcome'}>
          <EnterNavigationStack.Screen
            name={'Welcome'}
            component={WelcomeScreen}
          />
          <EnterNavigationStack.Screen
            name={'SignIn'}
            component={SignInScreen}
          />
          <EnterNavigationStack.Screen
            name={'SignUp'}
            component={SignUpScreen}
          />
        </EnterNavigationStack.Navigator>
      ) : (
        <MainNavigationStack.Navigator initialRouteName={'Main'}>
          <MainNavigationStack.Screen
            name={'Main'}
            component={MainBottomTabBar}
          />
          <MainNavigationStack.Screen
            name={'Instrument'}
            component={InstrumentScreen}
          />
        </MainNavigationStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const MainBottomTabBar = () => {
  return (
    <TabNavigation.Navigator initialRouteName={''}>
      <TabNavigation.Screen name={'portfolio'} component={PortfolioScreen} />
      <TabNavigation.Screen name={'Stock'} component={StockScreen} />
      <TabNavigation.Screen name={'Settings'} component={SettingsScreen} />
    </TabNavigation.Navigator>
  );
};
