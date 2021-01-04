import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";


export default function InformationHouseExpanded(props) {

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' }}>

                <View style={styles.featuredImmobileView}>
                    <Text style={styles.featuredImmobileText}>destaque</Text>
                </View>

                <Text style={styles.immobileToBuy}>Imóvel para comprar em:</Text>

            </View>

            <Text style={styles.adress}>{props.Adress}</Text>

            <View style={{borderTopWidth: 0.3, marginTop: 20, borderColor: '#000'}}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.price}>R$ {props.Price}</Text>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.priceBefore}>R$ {props.Price - 50}</Text>
                        <Text style={styles.spare}>Economize R$ {50} mil</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginVertical: 15 }}>
                    <Text style={styles.condominiumPrice}>condomínio R$ 927</Text>
                    <Text style={styles.iptu}>  /  IPTU R$ 1.608</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

                <View style={styles.containerProperty}>
                    <Image source={require('../../assets/icons/meters.png')} style={styles.imageHouseProperty} />
                    <Text style={styles.textHouseProperty}>{props.Meters} m²</Text>
                </View>

                <View style={styles.containerProperty}>
                    <Image source={require('../../assets/icons/bedroom.png')} style={styles.imageHouseProperty} />
                    <Text style={styles.textHouseProperty}>{props.Bedrooms} quartos</Text>
                </View>

                <View style={styles.containerProperty}>
                    <Image source={require('../../assets/icons/vacancy.png')} style={styles.imageHouseProperty} />
                    <Text style={styles.textHouseProperty}>{props.Vacancy} vagas</Text>
                </View>

                <View style={styles.containerProperty}>
                    <Image source={require('../../assets/icons/bathroom.png')} style={styles.imageHouseProperty} />
                    <Text style={styles.textHouseProperty}>{props.Bathroom} banheiros</Text>
                </View>

            </View>

        </View>
    )

}