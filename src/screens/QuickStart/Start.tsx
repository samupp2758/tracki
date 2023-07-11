import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';

const Start = () => {
  const { Layout, Gutters,Fonts } = useTheme();

  const init = async () => {
  /*  await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Start2' }],
    });*/
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
        <Text style={[Fonts.titleRegular]}>Start</Text>
    </View>
  );
};

export default Start;
