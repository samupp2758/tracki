
import { ColorValue, DimensionValue, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'tracki/src/hooks'
import { Colors } from 'tracki/src/theme/Variables'
import SVGs from 'tracki/src/theme/assets/images/SVGs'

type Props = {
    size?:number
    name:String
    color:String
  }
  
  const Icon = ({ name,size,color }: Props) => {
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
        borderRadius:9000000000
      }
    })
    
    const Obj = SVGs[name];
    return (
      <View style={{}}>
        <Obj height={size} width={size} fill={color}/>
      </View>
    )
  }
  // <Family name={name} size={size}/>
  Icon.defaultProps = {
    font:'AntDesign',
    name:"logo",
    backgroundColor: Colors.transparent,
    color:Colors.dark,
    size:20,
    style_custom:{}
  }
  
  export default Icon
  
 