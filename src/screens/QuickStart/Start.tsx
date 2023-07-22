import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  Animated,
  SafeAreaView,
} from 'react-native'
import { useTheme } from '../../hooks'
import { Brand, Button, Image,Icon } from '../../components'
import { changeTheme, setDefaultTheme } from '../../store/theme'
import { FontSize } from 'tracki/src/theme/Variables'
import { Path, Svg, SvgUri, SvgXml } from 'react-native-svg'
import { animated, easings, useSpring } from '@react-spring/native'
import { useDispatch } from 'react-redux'
import { ApplicationScreenProps } from 'tracki/@types/navigation'


const Start = ({ navigation }: ApplicationScreenProps) => {
  const [current, setcurrent] = useState(1)
  const dispatch = useDispatch()
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const backgrounds = [Colors.lightGray, Colors.primary, Colors.secondary]
  const logoColors = [Colors.dark, Colors.dark, Colors.white]

  const [viewAnimation,changeViewAnimation] = useSpring(()=>({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: {},
  }))

  const [changeAnimation, changePresentation] = useSpring(() => ({
    from: { right: 0, opacity: 1 },
  }))
  const [backgroundAnimation, changeBackground] = useSpring(() => ({
    from: { backgroundColor: backgrounds[0] },
  }))
  const [logoAnimation, changeLogoAnimation] = useSpring(() => ({
    from: { color: logoColors[0] },
  }))

  const init = async () => {
  }

  useEffect(()=>{
    init()
  },[])

  useEffect(() => {
  })

  const block1 = () => {
    return (
      <>
        <Icon name={"speedometer"} size={140}/>
        <Text
          style={[
            Fonts.textBold,
            { fontSize: FontSize.midLarge },
            { marginTop: 20 },
          ]}
        >
          Real-time Speed {'\n'}Testing.
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            { fontSize: FontSize.small },
            { marginTop: 5 },
            { width: '85%' },
            { textAlign: 'justify' },
          ]}
        >
          With this powerful tool, you can accurately measure your network's
          download and upload speeds, as well as ping performance in real-time.
        </Text>
      </>
    )
  }

  const block2 = () => {
    return (
      <>
        <Icon name='rocket' size={140}/>
        <Text
          style={[
            Fonts.textBold,
            { fontSize: FontSize.midLarge },
            { marginTop: 20 },
          ]}
        >
          Custom Speed-testing.
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            { fontSize: FontSize.small, color: Colors.dark },
            { marginTop: 5 },
            { width: '85%' },
            { textAlign: 'justify' },
          ]}
        >
          This powerful app allows you to conduct real-time speed tests
          specifically tailored for streaming services. Tracki ensures you get
          the most accurate results possible, guaranteeing smooth streaming
          experiences.
        </Text>
      </>
    )
  }

  const block3 = () => {
    return (
      <>
        <Icon name='build' size={140} color={Colors.lightGray}/>
        <Text
          style={[
            Fonts.textBold,
            { fontSize: FontSize.midLarge, color: Colors.lightGray },
            { marginTop: 20 },
          ]}
        >
          Troubleshooting Tips {'\n'}and Recommendations.
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            { fontSize: FontSize.small, color: Colors.lightGray },
            { marginTop: 5 },
            { width: '85%' },
            { textAlign: 'justify' },
          ]}
        >
          If you encounter any connectivity issues, our network diagnostics and
          troubleshooting features come to the rescue, providing valuable
          insights and solutions.
        </Text>
      </>
    )
  }

  const renderBlocks = () => {
    const arr = [block1, block2, block3]
    return arr[current - 1]()
  }

  const change = () => {
    changePresentation.start({ right: 200, opacity: 0 })

    setTimeout(() => {

      const temp = current == 3 ? 1 : current + 1
      setcurrent(temp)
      changePresentation.set({ right: -200 })
      changePresentation.start({ right: 0, opacity: 1 })
      changeBackground.start({ backgroundColor: backgrounds[temp - 1] })
      changeLogoAnimation.start({ color: logoColors[temp - 1] })



      if (temp == 3) {
        dispatch(changeTheme({ darkMode: true }))
      } else {
        dispatch(changeTheme({ darkMode: false }))
      }

      console.log('Changing Presentation to block' + temp)
    }, 200)
  }

  const getStarted = () => {
    changeViewAnimation.start({opacity:0})

    setTimeout(()=>{
      dispatch(changeTheme({ darkMode: false }))
      navigation.navigate('GetStarted');
    },500)
  }

  return (
    <animated.View
      style={[
        { ...viewAnimation },
        { ...backgroundAnimation },
        Layout.fill,
        Layout.fullWidth,
      ]}
    >
      <SafeAreaView style={[Layout.fill, Layout.fullWidth]}>
        <animated.Text
          style={[
            Fonts.titleRegular,
            { marginTop: 20, marginLeft: 20 },
            { ...logoAnimation },
          ]}
        >
          Tracki
        </animated.Text>
        <animated.View
          style={[
            { ...changeAnimation },
            Layout.fill,
            Layout.colHCenter,
            { marginLeft: 20 },
          ]}
        >
          {renderBlocks()}
        </animated.View>
        <View style={[]}>
          <Button onPress={current == 3 ? getStarted : change} title={current == 3 ? 'Get Started' : 'Next'} />
        </View>
      </SafeAreaView>
    </animated.View>
  )
}

export default Start
