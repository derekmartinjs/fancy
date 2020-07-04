import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup'; // for everything

let SignupSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().required(),
});

function EmailPassword(props) {
  // Declare state variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Effect handlers
  useEffect(() => {
    if (error) {
      Alert.alert('Sign In - Error:', error);
    }
  }, [error]);

  async function attemptSignIn(values: { email: any; password: any; }) {
    const {email, password} = values;

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/operation-not-allowed':
          setError('Firebase Email Auth has not been activated.');
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('No user found or wrong password.');
          break;
        default:
          console.error(err);
          break;
      }
    }
    console.log(values);
  }

  return (
    <View style={styles.form}>
      <Image
        style={styles.icon}
        source={{
          uri:
            'https://storage.googleapis.com/static.invertase.io/assets/React-Native-Firebase.png',
        }}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={values => attemptSignIn(values)}
      >
      {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            label="Email Address"
            underlineColor="#fff"
            theme={maskTheme}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors && errors.email}
            value={values.email}
          />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            autoCapitalize="none"
            secureTextEntry
            label="Password"
            error={errors && errors.password}
            underlineColor="#fff"
            theme={maskTheme}
            value={values.password}
          />
          <Button 
            style={styles.button}
            icon="lock"
            mode={loading ? 'text' : 'outlined'}
            theme={maskTheme}
            loading={loading}
            onPress={handleSubmit}>
              Log In
          </Button>
        </View>
      )}
      </Formik>
      </View>
  );
}

const maskTheme = {
  dark: true,
  colors: {
    text: '#fff',
    primary: '#fff',
    background: 'transparent',
    placeholder: '#fff',
  },
};
const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    padding: 10,
    width: 65,
    height: 65,
  },
  form: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  button: {
    marginVertical: 20,
  },
});

export default EmailPassword;
