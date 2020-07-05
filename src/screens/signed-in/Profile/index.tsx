import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import {
  Avatar,
  Caption,
  FAB,
  Headline,
  Subheading,
  Theme,
  Title,
  withTheme
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationParams} from 'react-navigation';
import {UserContext} from '../../../App';
import {Hero, Provider} from '../../../components';
import {Google, Facebook} from '../../../providers';
import { getProviders } from '../../../utils/helpers';

interface Props {
  theme: Theme;
  navigation: NavigationParams;
}

function Profile({ theme, navigation}) {
  // import contexts and declare state variables
  const user = useContext(UserContext);

  if (!user) {
    return null;
  }

  const providers = getProviders(user);

  return (
    <View style={styles.container}>
      <Hero height={120} colors={['#15212B', '#15212B']} />
      <View style={[styles.content, styles.profile]}>
        {user.photoURL ? (
          <Avatar.Image size={80} source={{ uri: user.photoURL}} />
        ) : (
          <Avatar.Text 
            size={80}
            label={user.email ? user.email.substring(0, 2).toUpperCase() : 'A'} 
            style={styles.avatar}
          />
        )}
      </View>
      <View style={styles.content}>
        <Headline>
          {user.displayName ? user.displayName : user.email}
          {user.emailVerified && (
            <Icon name="check-decagram" color="#2196f3" size={26} />
          )}
        </Headline>
        {!!user.displayName && <Title>{user.email}</Title>}
        {!!user.phoneNumber && <Subheading>{user.phoneNumber}</Subheading>}
        {!! user.metadata.lastSignInTime && (
          <Caption>
            {`Last log-in: ${dayjs(user.metadata.lastSignInTime).format(
              'DD/MM/YYYY HH:mm'
            )}`}
          </Caption>
        )}
      </View>
      <View style={styles.providers}>
        <Provider type="password" active={providers.includes('password')} />
        <Provider type="faceboook" active={providers.includes('facebook.com')} />
        <Provider type="google" active={providers.includes('google.com')} />
        <Provider type="phone" active={providers.includes('phone')} />
      </View>
      <FAB 
        color="#fff"
        style={[styles.fab, {backgroundColor: theme.colors.primary}]}
        icon="cog"
        onPress={() => navigation.navigate('Settings')}
      />
      <View style={styles.center}>
        <Facebook />
        <Google />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
  },
  center: {
    width: '100%',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  profile: {
    marginTop: -50,
    paddingVertical: 10,
  },
  providers: {
    backgroundColor: '#F6F7F8',
    flexDirection: 'row',
    elevation: 4,
    justifyContent: 'space-evenly',
    marginVertical: 30,
    padding: 20,
  },
  avatar: {
    borderColor: '#fff',
    borderWidth: 5,
    elevation: 4,
  },
});

export default withTheme(Profile);
