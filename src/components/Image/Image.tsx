import React from 'react';
import { View, Image, DimensionValue } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  source:String
};

const Img = ({ height, width, source, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'Image-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'Image-img'}
        style={Layout.fullSize}
        source={Images[source]}
        resizeMode={mode}
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
