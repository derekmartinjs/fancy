import React from "react";
import auth from '@react-native-firebase/auth';
import { Button, View, Text } from "react-native";

const Stack = () => (
  <View>
    <Text>Signed In Stack screen</Text>
    <Button
      onPress={() => auth().signOut().then(() => console.log('user signed out'))}
      title="Sign Out"
    >
            await auth().signInWithEmailAndPassword(email, password);
    </Button>
  </View>
);

export default Stack;