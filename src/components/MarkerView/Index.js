import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

const markerRed = require("../../assets/icons/markerRed.png")
const markerBlue = require("../../assets/icons/markerBlue.png")
import Callout from '../Callout/Index'
import styles from './Styles'
export default function MarkerView(props) {



    return (
        <View style={styles.container}>
        
                    <Image source={props.Active ? markerBlue : markerRed} style={styles.marker}/>
                    <Image source={props.ImageHouse} style={styles.imageHouse} />

             
        </View>


    )
}