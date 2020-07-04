import React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Theme, withTheme} from "react-native-paper";

import {SignIn, CreateAccount, ForgotPassword} from "../../signed-out";

interface Props {
  theme: Theme;
};

const Stack = createStackNavigator();

function SignedOutStack({theme}: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.accent,
        }}
      >
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="CreateAccount" options={{title: 'Create Account'}} component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" options={{title: 'Password Reset'}} component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default withTheme(SignedOutStack);
