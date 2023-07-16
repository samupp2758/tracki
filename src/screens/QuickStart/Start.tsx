import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={[Layout.fill]}>
        <Text style={[Fonts.titleRegular,{marginTop:20,marginLeft:40}]}>Tracki</Text>
    </View>
  );
};

export default Start;
