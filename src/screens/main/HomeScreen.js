import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';

import { styles } from '../../styles/main';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function HomeScreen(props) {
  navigationOptions = {
    title: 'Welcome to the app!'
  };

  _showMoreApp = () => {
    props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <DevelopmentFlag></DevelopmentFlag>
      <View>
        <Text>List would show here</Text>
      </View>
    </View>
  );
}
