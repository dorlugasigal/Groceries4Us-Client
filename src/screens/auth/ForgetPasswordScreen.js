import React, { useState, useEffect } from 'react';
import { styles } from '../../styles/authStyle';
import { Text, AsyncStorage, Image, TextInput, View, TouchableHighlight } from 'react-native';
import { registerUser, authenticateUser } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import useForm from 'react-hook-form';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function ForgetPasswordScreen(props) {
  const { register, setValue, handleSubmit, errors } = useForm();

  _getCode = async props => {};

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
              required: true,
              pattern: emailExpression
            }
          )}
          onChangeText={text => setValue('email', text, true)}
        />
      </View>
      {errors.email && errors.email.type === 'required' && <Text style={styles.notValid}>Email is Required</Text>}
      {errors.email && errors.email.type === 'pattern' && <Text style={styles.notValid}>Not a valid Email</Text>}

      <TouchableHighlight style={styles.btnContainer} onPress={() => handleSubmit(_getCode())}>
        <Text style={styles.btnText}>What's my code?</Text>
      </TouchableHighlight>
    </LinearGradient>
  );
}
