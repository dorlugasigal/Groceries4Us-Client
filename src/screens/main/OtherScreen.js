import React from 'react';
import { AsyncStorage, Button, StatusBar, View } from 'react-native';
import { styles } from '../../styles/main';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';
export function OtherScreen(props) {
  navigationOptions = {
    title: 'Lots of features here'
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <DevelopmentFlag></DevelopmentFlag>
      <Button title="I'm done, sign me out" onPress={_signOutAsync} />
      <StatusBar barStyle="default" />
    </View>
  );
}
