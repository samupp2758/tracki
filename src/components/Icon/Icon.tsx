
import { ColorValue, DimensionValue, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'tracki/src/hooks'
import { Colors } from 'tracki/src/theme/Variables'


type Props = {
    backgroundColor?: ColorValue
    color?:ColorValue
    size?:Number
    font:String
    name:String
    onPress:()=>void
  }
  
  const Icon = ({ name,color ,backgroundColor, size,font, onPress }: Props) => {
    const { Layout, Images, Fonts,Colors,FontSize } = useTheme()
    const arr = {
        AntDesign,
        Entypo,
        FontAwesome,
        MaterialIcons
    }
    
    const style = StyleSheet.create({
      icon: {
        aspectRatio:1,
        backgroundColor,
        borderRadius:9000000000
      }
    })
    
    const Family = arr[font]
  
    return (
      <></>
    )
  }
  // <Family name={name} size={size}/>
  Icon.defaultProps = {
    font:'AntDesign',
    backgroundColor: Colors.transparent,
    color:Colors.dark,
    size:20
  }
  
  export default Icon
  
 