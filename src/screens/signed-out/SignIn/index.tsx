import React from "react";
import {StyleSheet, View,Text} from "react-native";
import {Button, Theme, withTheme} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationParams} from 'react-navigation';
import {Hero, ProviderButton} from "../../../components";
import {EmailPassword, Facebook, Google} from "../../../providers";
import theme from "../../../theme";

interface Props {
  navigation: NavigationParams;
  theme: Theme;
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 6,
    marginTop: -25,
  },
  button: {
    marginVertical: 5,
    width: 300,
  },
  divider: {
    width: 300,
    marginVertical: 20,
    height: StyleSheet.hairlineWidth,
  }
});

function SignIn({navigation, theme}: Props) {
  return (
    <>
      <Hero
        height={330}
        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.3)']}
        image={
          'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
        }>
          <EmailPassword />
      </Hero>

      <View style={[styles.fab, {backgroundColor: theme.colors.primary}]}>
        <Icon name="arrow-down-bold" color="#fff" size={23} />
      </View>

      <View style={styles.center}>
        <Button
          color="#9e9e9e"
          style={styles.button}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot your password?
        </Button>
        <Button
          mode="contained"
          icon="account-box"
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')}>
          Create an account
        </Button>
        <View style={[styles.divider, {backgroundColor: theme.colors.primary}]}>
          <Google />
          <Facebook />
        </View>
        
      </View>
    </>
  );
}

export default withTheme(SignIn);
