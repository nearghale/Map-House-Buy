import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        width: 300,
        height: 220,
        alignItems: 'center'

    },
    subContainer: {
        width: "100%",
        height: "80%",
        borderRadius: 20,
        marginTop: "11%",
        backgroundColor: 'white'
    },
    containerText: {
        alignItems: "center",
        marginTop: "10%",
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4F4F4F"
    },
    description: {
        fontSize: 18,
        color: "#808080",
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        height: "40%",
        width: "100%",
        borderTopWidth: 0.2,
        borderColor: "#C0C0C0",
        marginTop: "5%",
        paddingTop: "2%"
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: 'red',
        position: "absolute",

    },
    call: {
        width: "45%",
        height: "90%",
        borderWidth: 1,
        backgroundColor: "#00FF7F",
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        justifyContent: "center",
        alignItems: "center"
        
    },
    callIcon: {
        width: "30%",
        height: "75%",
    },
    go: {
        width: "45%",
        height: "90%",
        backgroundColor: '#00BFFF',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    goText:{
      fontSize: 30,
      color: "white",
      fontWeight: "bold"
    },
    goIcon: {
        margin: "4%",
        width: "30%",
        height: "50%",
    },

})

export default styles