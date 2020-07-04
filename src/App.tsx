import React, { createContext, ReactNode, useEffect, useState} from "react";
import { View, Text, StyleSheet} from "react-native";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {Provider} from "react-native-paper";

// import { PLAID_CLIENT_ID } from 'react-native-dotenv';

import { Stack  as SignedInStack} from './screens/signed-in';
import { Stack as SignedOutStack}  from './screens/signed-out';
import theme from './theme';

//console.log(theme);
/**
 * Types
 */
type User = FirebaseAuthTypes.User | null;

 /**
  * Context
  */
 export const UserContext = createContext<User>(null);

function App() {
  // Declare state variables 
  const [initializing, setInitializing] = useState(true);
  const [listenUser, setListenUser] = useState(false);
  const [user, setUser] = useState<User>(null);

  /** Listen for auth state changes */
  useEffect(() => {
    const authListener = auth().onAuthStateChanged(result => {
      setUser(result);
      if (initializing && !listenUser) {
        setInitializing(false);
        setListenUser(true);
      }
    });

    return () => {
      if (authListener) {
        authListener();
      }
    }
  }, [initializing, listenUser]);

  /** Listen for user changes */
  useEffect(() => {
    let userListener: () => void;

    if (listenUser) {
      userListener = auth().onUserChanged(result => {
      setUser(result);
      });
    }

    return () => {
      if (userListener) {
        userListener();
      }
    }
  }, [listenUser]);
  
  if (initializing) {
    return <Text>Loading...</Text>;
  }

  function container(children: ReactNode | ReactNode[]) {
    return <Provider theme={theme}>{children}</Provider>;
  }

  return container(
    user ? (
      <UserContext.Provider value={user}>
        <SignedInStack />
      </UserContext.Provider>
    ) : (
      <SignedOutStack />
    );
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
