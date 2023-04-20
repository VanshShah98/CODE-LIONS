// EmergencyContacts.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmergencyContacts1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <Text>Name: Vansh Shah, Phone: +919574004357</Text>
      <Text>Name: Shreyansh Kumbhare, Phone: +91 9970998041</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
