import React from 'react';
import { AsyncStorage, Button, StatusBar, View } from 'react-native';
import { styles } from '../styles/main';
import DevelopmentFlag from '../components/DevelopmentFlag/DevelopmentFlag';
export class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here'
  };
  render() {
    return (
      <View style={styles.container}>
        <DevelopmentFlag></DevelopmentFlag>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
