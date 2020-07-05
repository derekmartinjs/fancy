import React, {useEffect, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {UserContext} from '../../App';
import {Provider, ProviderButton} from '../../components';
import {getProviderButtonTitle} from '../../utils/helpers';
import {View, Text} from 'react-native';
import {GOOGLE_WEB_CLIENT_ID} from 'react-native-dotenv';

const PROVIDER_ID = 'google.com';

GoogleSignin.configure({
  scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //      hostedDomain: '', // specifies a hosted domain restriction
});

function Google() {
  // declare state variables
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);
  const {isOnlyProvider, title, variant} = getProviderButtonTitle(
    user,
    PROVIDER_ID,
  );

  const handleGoogle = async () => {
    if (!loading) {
      setLoading(true);

      try {
        await GoogleSignin.hasPlayServices();

        if (variant === 'UNLINK') {
          await user.unlink(PROVIDER_ID);
        } else {
          //  const userInfo = await GoogleSignin.signIn();
          await GoogleSignin.signIn();
          const {accessToken, idToken} = await GoogleSignin.getTokens();
          const credential = auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );

          if (variant === 'LINK') {
            console.log('user wants to link Google')
            await user.linkWithCredential(credential);
          } else if (variant === 'SIGN_IN') {
            await auth().signInWithCredential(credential);
          }
        }
      } catch (error) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            return Alert.alert('Google Auth Canceled');
          case statusCodes.IN_PROGRESS:
            return Alert.alert('Google Auth Already In Progress');
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            return Alert.alert('Google Auth Requires Play Services');
          default:
            Alert.alert('Google Auth Error', error.message);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ProviderButton
      style={{height: 40}}
      loading={loading}
      onPress={handleGoogle}
      type="google">
      {title}
    </ProviderButton>
  );
}

export default Google;
