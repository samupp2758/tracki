import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  Animated,
  SafeAreaView,
} from 'react-native'
import { useTheme } from '../../hooks'
import { Brand, Button, Image, Icon } from '../../components'
import { changeTheme, setDefaultTheme } from '../../store/theme'
import { FontSize } from 'tracki/src/theme/Variables'
import { Path, Svg, SvgUri, SvgXml } from 'react-native-svg'
import { animated, easings, useSpring } from '@react-spring/native'
import { useDispatch } from 'react-redux'

const Signin = ({ navigation }) => {
  const { Layout } = useTheme()
  return (
    <animated.View style={[Layout.fill, Layout.fullWidth]}>
      <SafeAreaView style={[Layout.fill,Layout.colCenter]}>
        <Text>Sigin</Text>
      </SafeAreaView>
    </animated.View>
  )
}

export default Signin
