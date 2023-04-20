// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import EmergencyContacts from './components/EmergencyContacts1';
import PanicButton from './components/PanicButton';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import EmergencyContacts1 from './components/EmergencyContact';

export default function App() {
  const sendMessage = (body, to) => {
    // Send an SMS message using the SMS API
    axios.post('https://api.twilio.com/2010-04-01/Accounts/AC28506daa05d311be29e7d6266e300df7/Messages.json', {
      Body: body,
      To: to,
      From: '+16204450267',
    }, {
      auth: {
        username: 'AC28506daa05d311be29e7d6266e300df7',
        password: '11e16f88f6dd11cc36dca4c7cdb7d560',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  };

  const getCurrentLocation = () => {
    // Get the current location of the user using the Google Maps API
    Geolocation.getCurrentPosition(
      position => {
        const { lat, long } = position.coords;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=YOUR_API_KEY`;
        axios.get(url).then(res => {
          const address = "Emergency at SRM-KTR 404/405.Please reach ASAP.Help needed ";//res.data.results[0].formatted_address;
          sendMessage(`Emergency at ${address}`, '+918920572883');
        }).catch(error => {
          console.log(error);
        });
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <>
    <View>
      <EmergencyContacts1 />
    </View>
    <View style={styles.container}>
        <PanicButton sendMessage={sendMessage} getCurrentLocation={getCurrentLocation} />
    </View>
    <View>
      <EmergencyContacts />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 20,
    color : "white",
  }
});
