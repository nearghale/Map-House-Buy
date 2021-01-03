import React from 'react'
import { View, Text, Image } from "react-native";

import styles from './Styles'

export default function StatusBar(){


    return(
      
       <View style={styles.container} >
           
           <Image source={require("../../assets/icons/menu4.png")} style={styles.menu}/>
           <Text style={styles.containerTitle}>Mapa de Parceiros</Text>
       
       </View>
    )
}