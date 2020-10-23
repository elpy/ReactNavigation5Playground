import React from 'react';
import { SafeAreaView, StatusBar, View, Button } from 'react-native';
import { navigationService } from '../../root';

export const WelcomeScreen = () => {
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
          <Button title={'Sign In'} color={'blue'} onPress={signIn} />
          <Button title={'Sign Up'} color={'green'} onPress={signUp} />
        </View>
      </SafeAreaView>
    </>
  );
};

const signIn = () => {
  navigationService.navigate('SignIn');
};

const signUp = () => {
  navigationService.navigate('SignUp');
};
