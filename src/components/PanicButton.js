// PanicButton.js
// { hover } from '@testing-library/user-event/dist/hover';
//import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function PanicButton(props) {
  const handlePanic = () => {
    // Trigger an emergency message with the user's location using the SMS API and Google Maps API
    props.getCurrentLocation();
  };

  return (
    <TouchableOpacity onPress={handlePanic} style={styles.button}>
    <Text style={styles.text}>S.O.S</Text>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    boxShadow: '10px 0px 50px red',
    padding: 100,
    borderRadius: 12000,
    margin: 300,
  },
  text: {
    fontSize:50,
    color: 'white',
    fontWeight: 'bold',
  },
});
