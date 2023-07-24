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
import Icon from '../Icon/Icon'

type Props = {
  text: String
  icon: String
  onPress: () => void
  style?: object
}

const IconedButton = ({ text, icon, onPress, style }: Props) => {
  const { Layout, Images, Fonts, Colors, FontSize,MetricsSizes } = useTheme()
  const arr = {
    AntDesign,
    Entypo,
    FontAwesome,
  }

  return (
    <TouchableOpacity
      style={[Layout.boxShadow,
        {
          borderRadius: MetricsSizes.tiny,
          backgroundColor: Colors.white,
          height: 60,
          minWidth: 160,
          margin: 10,
        },
      ]}
    >
      <View style={[Layout.row, Layout.fullWidth, Layout.fullHeight]}>
        <View
          style={[Layout.colCenter,{ aspectRatio: 1, height: '100%' }]}
        >
            <Icon name={icon} size={30} color={'#000'}/>
        </View>

        <View style={[Layout.fill,Layout.colCenter]}>
          <Text style={[Fonts.textSmall, { color: Colors.dark }]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
// <Family name={name} size={size}/>
IconedButton.defaultProps = {}

export default IconedButton
