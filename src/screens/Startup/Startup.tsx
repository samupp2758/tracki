import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from '../../hooks'
import { Brand } from '../../components'
import { changeTheme, setDefaultTheme } from '../../store/theme'
import { ApplicationScreenProps } from '../../../@types/navigation'
import { store } from '../../store'
import { changeUser } from 'tracki/src/store/user'
import { useDispatch } from 'react-redux'
import { animated, useSpring } from '@react-spring/native'

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters } = useTheme()
  const dispatch = useDispatch()
  const state = store.getState()

  const [viewAnimation, fire_viewAnimation] = useSpring(() => ({
    from: { opacity: 1 },
  }))

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        fire_viewAnimation.start({ opacity: 0 })
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: !state.user.signedin ? 'QuickStart' : 'Main' }],
      })
    }, 100)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <View style={[Layout.fill]}>
        <animated.View
          style={[{ ...viewAnimation }, Layout.fill, Layout.colCenter]}
        >
          <Brand />
          <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
        </animated.View>
      </View>
    </>
  )
}

export default Startup
