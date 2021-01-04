import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 8,
        marginTop: 5,
        elevation: 2
    },
    featuredImmobileView: {
        backgroundColor: "#696969",
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    featuredImmobileText: {
        color: '#FFF',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        fontWeight: "700"
    },
    immobileToBuy: {
        color: '#4F4F4F',
        alignSelf: "center",
        marginLeft: 10,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 17,
        fontWeight: "700"
    },
    adress: {
        color: '#1E90FF',
        alignSelf: "center",
        marginTop: 5,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 17,
        fontWeight: "700"
    },
    price: {
        color: '#363636',
        marginTop: 21,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 27,
        fontWeight: "bold"
    },
    priceBefore: {
        color: '#4F4F4F',
        marginTop: 18,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        fontWeight: "bold"
    },
    spare: {
        color: '#32CD32',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        fontWeight: "bold"
    },
    condominiumPrice: {
        color: '#4F4F4F',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        fontWeight: "bold"
    },
    iptu:{
        color: '#4F4F4F',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        fontWeight: "bold"
    },
    containerProperty: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageHouseProperty: {
        width: 50,
        height: 50
    },
    textHouseProperty: {
        color: '#4F4F4F',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 17,
        fontWeight: "bold"
    }

})

export default styles