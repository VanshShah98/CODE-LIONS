// PanicButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function PanicButton(props) {
  const handlePanic = () => {
    // Trigger an emergency message with the user's location using the SMS API and Google Maps API
    props.getCurrentLocation();
    //props.sendEmergencyMessage();
  };

  return (
    <TouchableOpacity onPress={handlePanic} style={styles.button}>
      <Text style={styles.text}>Panic</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 100,
    borderRadius: 400,
    margin: 300,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
