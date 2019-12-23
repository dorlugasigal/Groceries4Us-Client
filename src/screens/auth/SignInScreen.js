import React, { useState, useEffect } from 'react';
import { styles } from '../../styles/authStyle';
import { Text, AsyncStorage, Image, TextInput, View, TouchableHighlight } from 'react-native';
import { authenticateUser } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { ToastAndroid } from 'react-native';

import useForm from 'react-hook-form';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function SignInScreen(props) {
  const { register, setValue, handleSubmit, errors } = useForm();
  _signInAsync = async data => {
    //change this
    authenticateUser(
      data,
      res => {
        if (res && res.token) {
          console.log(`user's token is ${res.token}`);
          AsyncStorage.setItem('userToken', res.token);
          props.navigation.navigate('App');
        } else {
          ToastAndroid.show('Wrong email or password', ToastAndroid.SHORT);
        }
      },
      error => {
        ToastAndroid.show('Wrong email or password', ToastAndroid.SHORT);
        console.log(error);
      }
    );
  };
  return (
    <LinearGradient style={styles.container} colors={['rgb(105,197,254)', 'rgb(92,164,247)', 'rgb(98,131,227)']}>
      <DevelopmentFlag></DevelopmentFlag>
      <Image
        style={{ width: '100%', height: '20%', resizeMode: 'contain', flex: 2 }}
        source={require('./../../styles/logo3.png')}
      />

      <View style={styles.textInputContainer}>
        <Ionicons name="md-person" style={styles.icon} size={32} color="rgb(247,247,247)" />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="rgb(247,247,247)"
          ref={register(
            { name: 'email' },
            {
              required: true
            }
          )}
          onChangeText={text => setValue('email', text, true)}
        />
      </View>

      <View style={styles.textInputContainer}>
        <Ionicons name="md-key" style={styles.icon} size={32} color="rgb(247,247,247)" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="rgb(247,247,247)"
          placeholder="Password"
          ref={register(
            { name: 'password' },
            {
              required: true
            }
          )}
          secureTextEntry={true}
          onChangeText={text => setValue('password', text, true)}
        />
      </View>
      <TouchableHighlight style={styles.btnContainer} onPress={handleSubmit(_signInAsync)}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableHighlight>

      <View style={styles.secondaryButtonContainer}>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0)"
          style={styles.smallBtnContainer}
          onPress={() => props.navigation.navigate('ForgetPassword')}
        >
          <Text style={styles.buttonText}>Forget Password?</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0)"
          style={styles.smallBtnContainer}
          onPress={() => props.navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    </LinearGradient>
  );
}
