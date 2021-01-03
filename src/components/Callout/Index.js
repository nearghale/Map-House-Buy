import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Linking,
    Alert,
    Platform,
    TouchableOpacity,
} from "react-native";

import styles from './Styles'
const go = require("../../assets/icons/go.png")
const call = require("../../assets/icons/call.png")
const arrow = require("../../assets/icons/arrowGoBlack.png")

export default function Callout(props) {

    function callNumber(phone) {
       
       
        console.warn('callNumber ----> ', phone);
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };

    return (

        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.containerText}>
                    <Text style={styles.title}>{props.Title}</Text>
                    <Text style={styles.description}>{props.Description}</Text>

                </View>
                <View style={styles.containerButtons} >
                    <TouchableWithoutFeedback
                        onPress={() => { callNumber(Props.CallNumber) }}>
                        <View style={styles.call}>
                            <Image source={call} style={styles.callIcon} />
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.go}>
                        <Text style={styles.goText}>Go</Text>
                        <Image source={arrow} style={styles.goIcon} />
                    </View>
                </View>
            </View >
            <Image style={styles.img} source={props.Image} />


        </View >


    )
}