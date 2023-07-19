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
import { Colors } from 'tracki/src/theme/Variables'

type Props = {
  height?: DimensionValue
  width?: DimensionValue
  title?: String
  backgroundColor?: ColorValue,
  color?:ColorValue,
  onPress:()=>void
}

const Button = ({ color ,backgroundColor, height, width, title, onPress }: Props) => {
    const { Layout, Images, Fonts,Colors,FontSize } = useTheme()
  const style = StyleSheet.create({
    button: {
      backgroundColor,
      height,
      width,
      ...Layout.colCenter,
      borderRadius:9000000000
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
}

export default Button
