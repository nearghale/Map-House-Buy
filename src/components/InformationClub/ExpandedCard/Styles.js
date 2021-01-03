import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "85%",
        height: "80%",
        borderRadius: 10,
        marginBottom: "5%",
        backgroundColor: 'white',
        position: "absolute",
        alignSelf: 'center'
    },
    viewRed:{
        width: "100%",
        height: "45%",
        backgroundColor: 'red',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageHouse:{
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    description: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    
    },
    houseTitle: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold'
    },
    openingHours: {
        color: "#C6C6C6",
        fontSize: 13,
        marginTop: "2%"
    },
    adress: {
        color: '#000',
        fontSize: 15,
        marginTop: "5%"
    }
})

export default styles