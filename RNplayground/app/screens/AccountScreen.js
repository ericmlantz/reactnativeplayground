//import 3rd party libraries
import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon'
import ListItem from '../components/lists/ListItem';
import ListItemSeperator from '../components/lists/ListItemSeparator';

const menuItems = [
  {
    id: 1,
    title: 'My Listings',
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    id: 1,
    title: 'My Messages',
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  }
]

// create a component
const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
      <ListItem style={styles.listItem}
        title="Mosh Hamedanidkfjdaklfjkldjfksldjfkalsjfklsdjfklasjfklsjfklsdjfklasjfklsdjfklsdfjakslfjsklfsklfjaklfjklsdjfslkdj"
        subTitle="me@me.com"
        image={require('../assets/mosh.jpg')}
      />
      </View>
      <View style={styles.container}>
        <FlatList
        data={menuItems}
        keyExtractor={menuItem => menuItem.title}
        renderItem={({item}) => 
          <ListItem
            title={item.title}
            IconComponent={
              <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
              />}
          />
        }
        ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title='Logout'
        IconComponent={
          <Icon name='logout'
          backgroundColor={colors.danger}/>
        }
      />
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    flex: 1,
    backgroundColor: colors.light
  },
});

//make this component available to the app
export default AccountScreen;
