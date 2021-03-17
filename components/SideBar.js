import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';


export default function Sidebar(props) {
  return (
    <ScrollView>
      <ImageBackground source={require('../assets/background.jpg')}
        style={{ width: undefined, padding: 16, paddingTop: 70 }}>

        <Image source={require('../assets/geo.jpg')} style={styles.profile} />

        <Text style={styles.name}>Geoffrey Robelot</Text>

      </ImageBackground>

      <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#FFF'
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 8
  }
})