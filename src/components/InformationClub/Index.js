import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

import styles from './Styles'

export default class InformationHouse extends Component {

    constructor() {
        super()
    }

    render() {
        return (

         
                <TouchableWithoutFeedback
                    onPress={() =>
                     
                            this.props.selectedCard(500, 500, this.props.id)
                        
                    }
                >
                    <View style={styles.container}>
                        <Text style={styles.houseTitle}>{this.props.HouseTitle}</Text>
                        <Text style={styles.openingHours}>{this.props.OpeningHours}</Text>
                        <Text style={styles.adress}>{this.props.Adress}</Text>
                    </View>

                </TouchableWithoutFeedback>
        )
    }
}


