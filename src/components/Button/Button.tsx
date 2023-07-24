import React from 'react'
import {
  View,
  Image,
  DimensionValue,
  TouchableOpacity,
  Text,
  ColorValue,
  StyleSheet,
} from 'react-native'
import { useTheme } from '../../hooks'
import { Colors, MetricsSizes } from 'tracki/src/theme/Variables'

type Props = {
  height: DimensionValue
  width: DimensionValue
  title?: String
  backgroundColor: ColorValue,
  color:ColorValue,
  borderRadius:number,
  onPress:()=>void
}

const Button = ({ borderRadius,color ,backgroundColor, height, width, title, onPress }: Props) => {
    const { Layout, Images, Fonts,Colors,FontSize } = useTheme()
  const style = StyleSheet.create({
    button: {
      backgroundColor,
      height,
      width,
      ...Layout.colCenter,
      ...Layout.boxShadow,
      borderRadius
    },
    title:{
        color,
        fontSize:FontSize.regular
    }
  })

  return (
    <View style={[Layout.colCenter]}>
    <TouchableOpacity style={[style.button]} onPress={()=>{onPress()}}>
      <Text style={[style.title,Fonts.textBold]}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

Button.defaultProps = {
  backgroundColor: Colors.dark,
  color:Colors.primary,
  height: 60,
  width: '90%',
  borderRadius:MetricsSizes.huge
}

export default Button
