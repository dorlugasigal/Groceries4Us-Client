import React from 'react';
import { AsyncStorage, Button, View } from 'react-native';

import { styles } from '../styles/main';
import DevelopmentFlag from '../components/DevelopmentFlag/DevelopmentFlag';
export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  render() {
    return (
      <View style={styles.container}>
        <DevelopmentFlag></DevelopmentFlag>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
