import React, { useState, useEffect } from 'react';
import { styles } from '../../styles/signin';
import { Text, AsyncStorage, Image, TextInput, View, TouchableHighlight } from 'react-native';
import { registerUser } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import useForm from 'react-hook-form';

export function SignInScreen(props) {
  const { register, setValue, handleSubmit, errors } = useForm();

  navigationOptions = {
    title: 'Please sign in'
  };
  const emailExpression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  const passwordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  _signInAsync = async props => {
    registerUser(props);
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  return (
    <LinearGradient style={styles.container} colors={['rgb(105,197,254)', 'rgb(92,164,247)', 'rgb(98,131,227)']}>
      <Image
        style={{ width: '100%', height: '20%', resizeMode: 'contain' }}
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
      <TouchableHighlight style={styles.btnContainer} onPress={() => handleSubmit(_signInAsync())}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableHighlight>
    </LinearGradient>
  );
}
