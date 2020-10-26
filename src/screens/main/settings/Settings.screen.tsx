import React from 'react';
import { SafeAreaView, StatusBar, View, Button } from 'react-native';
import { authService } from '../../root';

export const SettingsScreen = () => {
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
          <Button title={'Log Out'} color={'blue'} onPress={logOut} />
        </View>
      </SafeAreaView>
    </>
  );
};

const logOut = () => {
  authService.logOut();
};
