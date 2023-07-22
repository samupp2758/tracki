import React from 'react';
import { View, Image, DimensionValue } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number;
  width?: number;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  source:String
};

const Img = ({ height, width, source, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View >
      <Image
        testID={'Image-img'}
        source={Images[source]}
        resizeMode={mode}
        style={{width:width,height:height}}
      />
    </View>
  );
};

Img.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default Img;
