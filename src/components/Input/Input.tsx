import {
  ColorValue,
  DimensionValue,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'tracki/src/hooks'
import SVGs from 'tracki/src/theme/assets/images/SVGs'

type Props = {
  placeholder: string
  onChangeText: (value: string) => void
  value: string
  title?: string
  style?: object
}

const Input = ({ placeholder, title, value, onChangeText, style }: Props) => {
  const { Layout, Images, Fonts, Colors, FontSize, MetricsSizes } = useTheme()
  const arr = {
    AntDesign,
    Entypo,
    FontAwesome,
  }

  return (
    <View>
      {title == undefined ? (
        <></>
      ) : (
        <Text
          style={[
            Fonts.textSmall,
            {
              marginLeft: 20,
              marginTop: 5,
              marginBottom: 5,
              color: Colors.dark,
            },
          ]}
        >
          {title}
        </Text>
      )}
      <View
        style={[
          { ...style },
          Layout.colHCenter,
          Layout.boxShadow,
          {
            borderRadius: MetricsSizes.tiny,
            backgroundColor: Colors.white,
            height: 60,
            paddingLeft: 20,
          },
        ]}
      >
        <TextInput
          style={[Fonts.textSmall, { color: Colors.textGray800 }]}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={Colors.textGray200}
          placeholder={placeholder}
        />
      </View>
    </View>
  )
}
// <Family name={name} size={size}/>
Input.defaultProps = {}

export default Input
