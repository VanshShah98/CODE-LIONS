// EmergencyContacts.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmergencyContacts1() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Emergency Contacts</Text>
            <Text>Name: Anmol Purohit, Phone: +918920572883</Text>
            <Text>Name: Pratham Jain , Phone: +919601520311</Text>

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