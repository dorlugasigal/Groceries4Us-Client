import React, { useState } from 'react';
import { styles } from '../../styles/authStyle';
import { Text, TextInput, View, TouchableHighlight } from 'react-native';
import { changePassword } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { ToastAndroid } from 'react-native';

import useForm from 'react-hook-form';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function ChangePasswordScreen(props) {
  const { email } = props;
  const { register, setValue, handleSubmit, errors } = useForm();
  const passwordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  _changePassword = data => {
    changePassword(
      data,
      res => {
        if (res && res.token) {
          AsyncStorage.setItem('userToken', res.token);
          props.navigation.navigate('App');
        }
      },
      error => console.log
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
