import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';
import { navigationService } from '../../root';

export const StockScreen = () => {
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
          <FlatList
            style={{ flex: 1, width: '100%' }}
            data={['APPLE', 'MICROSOFT', 'AT&T', 'SBER', 'YANDEX']}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const renderItem = (info: ListRenderItemInfo<string>) => {
  return (
    <Pressable onPress={() => navigateToInstrument(info.item)} key={info.item}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text>{info.item}</Text>
        <Text>{`${Math.round(Math.random() * 100)}$`}</Text>
      </View>
    </Pressable>
  );
};

const navigateToInstrument = (name: string) => {
  navigationService.navigate('Instrument', { name: name });
};
