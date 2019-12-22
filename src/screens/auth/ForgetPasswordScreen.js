import React, { useState } from 'react';
import { styles } from '../../styles/authStyle';
import { Text, TextInput, View, TouchableHighlight } from 'react-native';
import { forgetPassword, checkForgetPasswordCode } from '../../services/HttpService';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { ToastAndroid } from 'react-native';

import useForm from 'react-hook-form';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';

export function ForgetPasswordScreen(props) {
  const { register, setValue, handleSubmit, errors } = useForm();
  const emailExpression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  const [codeSent, setCodeSent] = useState(false);
  _getCode = async data => {
    forgetPassword(
      data,
      res => {
        setCodeSent(res);
        ToastAndroid.show(res ? 'an email sent to you with your code' : 'error sending email', ToastAndroid.SHORT);
      },
      error => console.log(error)
    );
  };

  _setCode = async data => {
    checkForgetPasswordCode(
      data,
      res => {
        if (res) {
          props.navigation.navigate('ChangePassword');
        } else {
          ToastAndroid.show('the code is wrong', ToastAndroid.SHORT);
        }
      },
      error => console.log(error)
    );
  };
  return (
    <LinearGradient style={styles.container} colors={['rgb(105,197,254)', 'rgb(92,164,247)', 'rgb(98,131,227)']}>
      <DevelopmentFlag></DevelopmentFlag>

      {!codeSent && (
        <View style={[styles.container, { width: '100%' }]}>
          <Text style={styles.detailsText}>Forgot your password?</Text>
          <Text style={styles.detailsText}>Don't worry!</Text>
          <View style={styles.textInputContainer}>
            <Ionicons name="md-person" style={styles.icon} size={32} color="rgb(247,247,247)" />
            <TextInput
              style={styles.textInput}
              placeholder="What's your email?"
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
          <TouchableHighlight style={styles.btnContainer} onPress={handleSubmit(_getCode)}>
            <Text style={styles.btnText}>Get your code</Text>
          </TouchableHighlight>
        </View>
      )}
      {codeSent && (
        <View style={[styles.container, { width: '100%' }]}>
          <View style={styles.textInputContainer}>
            <Ionicons name="md-code" style={styles.icon} size={32} color="rgb(247,247,247)" />
            <TextInput
              style={styles.textInput}
              placeholder="Whats your code?"
              placeholderTextColor="rgb(247,247,247)"
              ref={register(
                { name: 'token' },
                {
                  required: true
                }
              )}
              onChangeText={text => setValue('token', text, true)}
            />
          </View>

          <TouchableHighlight style={styles.btnContainer} onPress={handleSubmit(_setCode)}>
            <Text style={styles.btnText}>Proceed!</Text>
          </TouchableHighlight>
        </View>
      )}
    </LinearGradient>
  );
}
