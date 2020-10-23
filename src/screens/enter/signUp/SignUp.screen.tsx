import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Button } from 'react-native';
import { navigationService } from '../../root';

export const SignUpScreen = () => {
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
          <Text style={{ textAlign: 'center' }}>
            {"Congratulations!\nYou've been successfully registered!"}
          </Text>
          <Button title={'Sign In now'} color={'green'} onPress={signIn} />
        </View>
      </SafeAreaView>
    </>
  );
};

const signIn = () => {
  navigationService.replace('SignIn');
};
