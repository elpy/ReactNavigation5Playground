import React from 'react';
import { SafeAreaView, StatusBar, View, Button, TextInput } from 'react-native';
import { authService } from '../../root';

export const SignInScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <TextInput>Your beautiful name</TextInput>
            <TextInput>Your genius password</TextInput>
          </View>
          <Button title={'Enter'} color={'blue'} onPress={enter} />
        </View>
      </SafeAreaView>
    </>
  );
};

const enter = () => {
  authService.logIn();
};
