// EmergencyContacts.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmergencyContacts1() {
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Emergency Contacts : </Text>
            <Text style={styles.title}>Name: Anmol Purohit, Phone: +918920572883</Text>
            <Text style={styles.title}>Name: Pratham Jain , Phone: +919601520311</Text>
            <Text style={styles.title}>Name: Vansh Shah, Phone: +919574004357</Text>
            <Text  style={styles.title}>Name: Shreyansh Kumbhare, Phone: +91 9970998041</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        color: "white",
    },
    title1: {
        fontSize :30,
        fontWeight: 'bold',
        color : 'white',
    }
});