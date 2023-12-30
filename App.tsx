import React from 'react';

import {
  View, 
  Text, 
  SafeAreaView,
  Button,
  Image,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    marginTop: 50,
    resizeMode: 'center',
    width: 100,
    height: 1000
  }
})

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello React Native!</Text>
        {/* <Button 
        color="#841584"
        onPress={()=> handlePress()} title="Click Me">Click Me</Button> */}
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      </View> 
    </SafeAreaView>
  );
}

function handlePress(){
  console.log("Pressed")
}

export default App;
