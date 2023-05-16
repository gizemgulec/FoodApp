/**
 * Style Generator
 *
 * Example:
 *
     const style = StyleSheet(base => ({
        text: {
            color: color.danger
        }
     }))

     <Text style={style.text}>Sa</Text>
 *
 */

     import { StyleSheet, Dimensions } from 'react-native';
    //  import color from '~/Style/Colors'
    //  import radius from '~/Style/Radius'
    //  import helper from '~/Style/Helper'
    //  import icons from '~/Style/Icons'
    //  import layout from '~/Style/Layout'
    //  import fontSize from '~/Style/Normalize'
     
     let window = Dimensions.get('window');
     
     export const Base = {
        //  window,
        //  color,
        //  helper,
        //  radius,
        //  icons,
        //  layout,
        //  fontSize
     }
     
     export default (callback) => StyleSheet.create(callback(Base))
     
     
     