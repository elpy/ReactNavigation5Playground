import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

export const PortfolioScreen = () => {
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
          <Text>138 048$</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
