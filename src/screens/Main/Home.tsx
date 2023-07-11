import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import { useDispatch } from 'react-redux';

const Home = () => {
  const { Layout, Gutters,Fonts } = useTheme();
  const dispatch = useDispatch();

  const init = async () => {
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
        <Text style={[Fonts.titleRegular]}>Home</Text>
    </View>
  );
};

export default Home;
