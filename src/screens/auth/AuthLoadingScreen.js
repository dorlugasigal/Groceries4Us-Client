import React, { useEffect } from 'react';
import { styles } from '../../styles/main';
import { AsyncStorage, ActivityIndicator, StatusBar, View } from 'react-native';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function AuthLoadingScreen(props) {
  useEffect(() => {
    _bootstrapAsync();
  }, []);
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  // Render any loading content that you like here
  return (
    <View style={styles.container}>
      <DevelopmentFlag></DevelopmentFlag>
      <ActivityIndicator size={20} />
      <StatusBar barStyle="default" />
    </View>
  );
}
