import React, { useState, useEffect } from 'react';
import { styles } from '../../styles/authStyle';
import { Text, AsyncStorage, Image, TextInput, View, TouchableHighlight } from 'react-native';
import { registerUser, authenticateUser } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import useForm from 'react-hook-form';
import { getTimeFieldValues } from 'uuid-js';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function SignUpScreen(props) {
  const { register, setValue, handleSubmit, errors, watch } = useForm();

  const emailExpression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  const passwordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const pass = watch('password'); // you can also target specific fields by their names

  _signUp = data => {
    registerUser(
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
      <Text style={styles.detailsText}>Enter your details:</Text>

      <View style={styles.textInputContainer}>
        <Ionicons name="md-person" style={styles.icon} size={32} color="rgb(247,247,247)" />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="rgb(247,247,247)"
          ref={register(
            { name: 'email' },
            {
              required: true,
              pattern: emailExpression
            }
          )}
          onChangeText={text => setValue('email', text, true)}
        />
      </View>
      {errors.email && errors.email.type === 'required' && <Text style={styles.notValid}>Email is Required</Text>}
      {errors.email && errors.email.type === 'pattern' && <Text style={styles.notValid}>Not a valid Email</Text>}

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

      <TouchableHighlight style={styles.btnContainer} onPress={handleSubmit(_signUp)}>
        <Text style={styles.btnText}>Sign Up!</Text>
      </TouchableHighlight>
    </LinearGradient>
  );
}
