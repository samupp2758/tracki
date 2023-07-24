import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  Animated,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native'
import { useTheme } from '../../hooks'
import {
  Brand,
  Button,
  Image,
  Icon,
  Input,
  IconedButton,
} from '../../components'
import { changeTheme, setDefaultTheme } from '../../store/theme'
import { FontSize } from 'tracki/src/theme/Variables'
import { Path, Svg, SvgUri, SvgXml } from 'react-native-svg'
import { animated, easings, useSpring } from '@react-spring/native'
import { useDispatch } from 'react-redux'
import { ApplicationScreenProps } from 'tracki/@types/navigation'
import { Platform, NativeModules } from 'react-native'
const { StatusBarManager } = NativeModules

const GetStarted = ({ navigation }: ApplicationScreenProps) => {
  const { Colors, Images, Layout, Fonts } = useTheme()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [connected, setconnected] = useState(false)

  const [viewAnimation, changeViewAnimation] = useSpring(() => ({
    from: { opacity: 0 },
    delay: 500,
    config: {},
  }))

  const init = () => {}

  useEffect(() => {
    init()
  }, [])

  const showView = () => {
    changeViewAnimation.start({ opacity: 1 })
  }

  const onChangeName = (value: string) => {
    setName(value)
  }

  return (
    <animated.View
      style={[
        { ...viewAnimation },
        Layout.fill,
        Layout.fullWidth,
        { backgroundColor: Colors.lightGray },
      ]}
    >
      <ImageBackground
        onLoadEnd={() => showView()}
        source={Images.bgGetStarted}
        resizeMode='cover'
        style={[Layout.fill]}
      >
        <View style={[Layout.fill]}>
          <View
            style={[
              { marginTop: StatusBarManager.HEIGHT },
              Layout.fill,
              Layout.colCenter,
            ]}
          >
            <Image source={'logo'} height={100} />
          </View>
          <View
            style={[
              {
                borderStartStartRadius: 70,
                borderStartEndRadius: 70,
                minHeight: 400,
                backgroundColor: Colors.lightGray,
              },
              Layout.fullWidth,
              Layout.colVCenter,
            ]}
          >{!connected ? (
            <View
              style={{
                marginTop: 50,
                width: '80%',
              }}
            >
            
              <Input
                value={name}
                onChangeText={onChangeName}
                placeholder={'Your Name Here'}
              />
                <View style={[Layout.colVCenter, { marginTop: 30 }]}>
                  <Text
                    style={[Fonts.textSmall, { color: Colors.textGray200 }]}
                  >
                    Connect with one of these:
                  </Text>
                  <View style={{ marginTop: 20 }}>
                    <View style={[Layout.row]}>
                      <IconedButton
                        text={'Google'}
                        icon={'google'}
                        onPress={() => {}}
                      />
                      <IconedButton
                        text={'Apple'}
                        icon={'apple'}
                        onPress={() => {}}
                      />
                    </View>
                    <View style={[Layout.row]}>
                      <IconedButton
                        text={'Github'}
                        icon={'github'}
                        onPress={() => {}}
                      />
                      <IconedButton
                        text={'Instagram'}
                        icon={'instagram'}
                        onPress={() => {}}
                      />
                    </View>
                  </View>
                </View>
              
            </View>) : (<></>)}
          </View>
        </View>
      </ImageBackground>
    </animated.View>
  )
}

export default GetStarted
