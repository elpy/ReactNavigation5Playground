import { RouteProp } from '@react-navigation/core/src/types';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { MainNavigationStackParamList } from '../root';

type RouteType = RouteProp<MainNavigationStackParamList, 'Instrument'>;
type NavigationType = StackNavigationProp<
  MainNavigationStackParamList,
  'Instrument'
>;

interface IProps {
  navigation: NavigationType;
  route: RouteType;
}

export const InstrumentScreen = (props: IProps) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{props.route.params?.name}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
