import { ThemeVariables } from '../../@types/theme';
import SvgRocket from './assets/images/SVGs/rocket';
import SvgSpeedometer from './assets/images/SVGs/speedometer';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/icon.png'),
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),


  };
}
