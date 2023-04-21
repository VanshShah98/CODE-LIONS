import React, { useState, useEffect } from 'react';
import { StyleSheet, View} from 'react-native';
//import EmergencyContacts_Shre from './components/EmergencyContact_Shre';
import PanicButton from './components/PanicButton';
import axios from 'axios';

//const backgroundImage = require("./Code.png");

export default function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Get the user's location based on their IP address
    const apiUrl = "https://ipgeolocation.abstractapi.com/v1/?api_key=";
    axios.get(apiUrl)
      .then(response => {
        setLocation(response.data.city + ", " + response.data.region +",Longitude:"+ response.data.longitude+", Latitude:"+ response.data.latitude);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const sendMessage = (body, to) => {
    // Send an SMS message using the SMS API
    axios.post('https://api.twilio.com/2010-04-01/Accounts/SDI/Messages.json', {
      Body: body,
      To: to,
      From: 'YOUR PHN Number',
    }, {
      auth: {
        username: 'YOUR_SID',
        password: 'YOUR_PASS',
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
    // Send an SMS message with the user's location
    sendMessage(`Emergency at ${location}`, 'MSG to be recived phn no');
  };

  return (
    <>
      <View style={styles.container}>
        <PanicButton sendMessage={sendMessage} getCurrentLocation={getCurrentLocation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundImage: `url(${"./Code.png"})`, // Set the background image
    //resizeMode: 'cover', // Make sure the image covers the entire background
  },
  container_Shre: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
  },
  container_Vansh: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'right',
    justifyContent: 'center',
  },
});
