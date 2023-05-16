import * as React from 'react';
import  { Text,View, Slider, TextInput } from 'react-native';
import StyleSheet from './helpers/StyleSheet'

const App = () => {

  const renderSlider = () => {
    return (
      <View style={{padding: 20, paddingTop: 700}}>
        <TextInput 
        style={style.spent}
        //keyboardType={numeric}
        >

        </TextInput>
        <Slider 
            style={style.progressBar}
            minimumValue={0}
            maximumValue={50}
            step={5}
            value={parseInt(0)}
            thumbTintColor="#13B351"
            minimumTrackTintColor="#13B351"
            maximumTrackTintColor="#C6C6C7"
            onValueChange={ 20}>
        </Slider>
        <Text>Welcome to my food app </Text>
      </View>
    )
  }
    return (
      renderSlider()
    )
}

export default App;

const style = StyleSheet(base => ({
  progressBar: {
		width: 100,
		height: 40,
		flexDirection: 'row',
		marginLeft: 15,
		marginBottom: 20
	},
  spent: {
		//fontFamily: base.helper.font('ProximaNova', 500),
		fontSize: 22,
		//color: base.color.ivoryBlack,
		//borderBottomColor: base.color.ivoryBlack,
    color: 'black',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		marginBottom: 28,
		marginTop: 20
	},
}))

