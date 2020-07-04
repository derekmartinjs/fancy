import React from "react";
import { View, Text, StyleSheet} from "react-native";
// import { Stack  as SignedInStack} from './screens/signed-in';
// import { Stack as SignedOutStack}  from './screens/signed-out';

function App() {
  return (
    <View style={styles.root}>
      <Text style={{justifyContent: "center", alignItems: "center", color: 'white'}}>Amanda's Amazing App</Text>
    </View>
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