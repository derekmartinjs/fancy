import React, {useEffect, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {UserContext} from '../../App';
import {Provider, ProviderButton} from '../../components';
import {getProviderButtonTitle} from '../../utils/helpers';
import {View, Text} from 'react-native';

const PROVIDER_ID = 'facebook.com';

function Facebook() {
  // declare state variables
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const {isOnlyProvider, title, variant} = getProviderButtonTitle(
    user,
    PROVIDER_ID,
  );

  const handleFacebook = async () => {
    if (!loading && !user) {
      setLoading(true);

      try {
        if (variant === 'UNLINK') {
          await user.unlink(PROVIDER_ID);
        } else {
          await LoginManager.logInWithPermissions(['public_profile'])
            .then(async (result: {isCancelled: any; accessToken: any}) => {
              const {isCancelled} = result;

              if (isCancelled) {
                Alert.alert('Facebook Auth Canceled');
              } else {
                const {accessToken} = await AccessToken.getCurrentAccessToken();

                if (!accessToken) {
                  throw new Error(
                    'No Access Token was returned from Facebook SDK.',
                  );
                }

                const credential = auth.FacebookAuthProvider.credential(
                  accessToken,
                );

                if (variant === 'LINK') {
                  await user.linkWithCredential(credential);
                } else if (variant === 'SIGN_IN') {
                  await auth().signInWithCredential(credential);
                }
              }
            })
            .catch(err => {
              console.log('err:');
              console.log(err);
            });
        }
      } catch (error) {
        Alert.alert('Facebook Auth Error', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  if (isOnlyProvider) {
    return null;
  }

  return (
    <ProviderButton
      // eslint-disable-next-line react-native/no-inline-styles
      style={{height: 40}}
      loading={loading}
      onPress={handleFacebook}
      type="facebook">
      {title}
    </ProviderButton>
  );
}

export default Facebook;
