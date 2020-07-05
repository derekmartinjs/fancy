import React from "react";
import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Theme, withTheme} from "react-native-paper";

import {Settings, Profile} from "../../signed-in";

interface Props {
  theme: Theme;
};

const Stack = createStackNavigator();

function SignedInStack({theme}: Props) {
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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default withTheme(SignedInStack);
