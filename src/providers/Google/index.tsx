import React, {useEffect, useContext,useState} from "react";
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {GoogleSignIn, statusCodes} from 'react-native-google-signin';
import {UserContext} from '../../App';
import {Provider,ProviderButton} from '../../components';
import {getProviderButtonTitle} from '../../utils/helpers';
import {View,Text} from "react-native";

const PROVIDER_ID = 'google.com';

function Google() {
  // declare state variables
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);
  const {isOnlyProvider, title, variant} = getProviderButtonTitle(
    user,
    PROVIDER_ID
  );

  async function handleGoogle() {

  }

  useEffect(() => {

  }, []);

  return (
    <ProviderButton loading={loading} onPress={handleGoogle} type="google">
      {title}
    </ProviderButton>
  );
};

export default Google;
