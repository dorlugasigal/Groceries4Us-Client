import React, { useState } from 'react';
import { styles } from '../../styles/authStyle';
import { AsyncStorage, Text, TextInput, View, TouchableHighlight, ToastAndroid } from 'react-native';
import { changePasswordForget } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import useForm from 'react-hook-form';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function ChangePasswordScreen(props) {
  const { navigation } = props;
  const { register, setValue, handleSubmit, errors, watch } = useForm();
  const passwordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const pass = watch('password'); // you can also target specific fields by their names

  _changePassword = data => {
    data.id = navigation.getParam('id', -1);
    data.token = navigation.getParam('token', -1);
    changePasswordForget(
      data,
      res => {
        console.log(res);
        ToastAndroid.show('You Successfully changed your password, Try to log in', ToastAndroid.LONG);

        props.navigation.navigate('SignIn');
      },
      error => {
        ToastAndroid.show('an Error Occured, please try again later', ToastAndroid.SHORT);
        console.log;
      }
    );
  };

  return (
    <LinearGradient style={styles.container} colors={['rgb(105,197,254)', 'rgb(92,164,247)', 'rgb(98,131,227)']}>
      <DevelopmentFlag></DevelopmentFlag>

      <View style={[styles.container, { width: '100%' }]}>
        <Text style={styles.detailsText}>Forgot your password?</Text>
        <Text style={styles.detailsText}>Don't worry!</Text>
        <View style={styles.textInputContainer}>
          <Ionicons name="md-key" style={styles.icon} size={32} color="rgb(247,247,247)" />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="rgb(247,247,247)"
            placeholder="Password"
            ref={register(
              { name: 'password' },
              {
                required: true,
                pattern: passwordExpression
              }
            )}
            secureTextEntry={true}
            onChangeText={text => setValue('password', text, true)}
          />
        </View>
        {errors.password && errors.password.type === 'required' && (
          <Text style={styles.notValid}>Password is Required</Text>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <Text style={styles.notValid}>
            Password must contain:{'\n'}• at least 8 characters {'\n'}• combination of upper-case and lower-case
            characters {'\n'}• one or more digits {'\n'}• one special character
          </Text>
        )}
        <View style={styles.textInputContainer}>
          <Ionicons name="md-key" style={styles.icon} size={32} color="rgb(247,247,247)" />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="rgb(247,247,247)"
            placeholder="Repeat your password"
            ref={register(
              { name: 'secondPassword' },
              {
                validate: value => value === pass
              }
            )}
            secureTextEntry={true}
            onChangeText={text => setValue('secondPassword', text, true)}
          />
        </View>
        {errors.secondPassword && errors.secondPassword.type === 'validate' && (
          <Text style={styles.notValid}>Passwords must match</Text>
        )}
        <TouchableHighlight style={styles.btnContainer} onPress={handleSubmit(_changePassword)}>
          <Text style={styles.btnText}>Change your password</Text>
        </TouchableHighlight>
      </View>
    </LinearGradient>
  );
}
