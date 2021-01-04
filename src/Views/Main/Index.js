import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from "react-native"
import MapView, { Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import mapStyle from './MapStyle'
import InformationHouse from '../../components/InformationClub/Index'
import MarkerView from "../../components/MarkerView/Index"
import Callout from '../../components/Callout/Index'
import ExpandedCard from '../../components/InformationClub/ExpandedCard/Index'


export default function App() {

  const [visibleInformationHouse, setVisibleInformationHouse] = useState('')
  const [titleHouse, setTitleHouse] = useState('')
  const [imageHouse, setImageHouse] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [adress, setAdress] = useState('')
  const [price, setPrice] = useState('')
  const [minhaLocalizacao, setMinhaLocalizacao] = useState({})
  const [destination, setDestination] = useState(latitude = 42.3730591, longitude = -71.033754)
  const [yOffset, setYOffset] = useState(null)
  const [xOffset, setXOffset] = useState(null)
  const [selectedCard, setSelectedCard] = useState(null)
  const [meters, setMeters] = useState(null)
  const [vacancy, setVacancy] = useState(null)
  const [bedrooms, setBedrooms] = useState(null)
  const [bathrooms, setBathrooms] = useState(null)


  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  useEffect(() => {

    requestPermissions()

    Geolocation.getCurrentPosition(
      (position) => {
        setMinhaLocalizacao({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
        console.log('minha localização => ', minhaLocalizacao);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])


  function visibleInformation(titleHouse, openingHours, adress, price, meters, bathrooms, bedrooms, vacancy, imageHouse) {
    setVisibleInformationHouse(visibleInformationHouse != '' ? '' : titleHouse)
    setTitleHouse(titleHouse)
    setOpeningHours(openingHours)
    setAdress(adress)
    setPrice(price)
    setMeters(meters)
    setBathrooms(bathrooms)
    setBedrooms(bedrooms)
    setVacancy(vacancy)
    setImageHouse(imageHouse)
  
  }







  const Houses = [
    {
      houseTitle: "Casa com piscina",
      openingHours: "Segunda a Sabádo das 07h às 22h/ Domingo e feriado das 08h às 18h",
      adress: "Rua Arca da aliança, 22 - Núcleo Lageado, São Paulo SP, 08440-565",
      latitude: -23.53110806941113,
      longitude: -46.410299770244364,
      meters: 148,
      bedrooms: 4,
      vacancy: 3,
      bathrooms: 2,
      price: 124.155,
      image: require("../../assets/icons/house_basic.png"),
      clicked: false,
      phone: 11983878747
    },
    {

      houseTitle: "Apartamento a venda!",
      openingHours: "Segunda a sexta das 07h às 20h/ Domingo e feriado das 05h às 18h",
      adress: "Rua Sāo José de Mossamedes, 590 - Núcleo Lageado, São Paulo - SP, 08440-540",
      latitude: -23.523360501253322,
      longitude: -46.4126324243453,
      meters: 78,
      bedrooms: 2,
      vacancy: 1,
      bathrooms: 1,
      price: 180.255,
      image: require("../../assets/icons/apartament.png"),
      clicked: false,
      phone: 11983878747


    },
  ]




  return (

    <View style={styles.container}>

      {minhaLocalizacao.latitude ? <MapView
        style={styles.mapStyle}
        customMapStyle={mapStyle}
        initialRegion={minhaLocalizacao}
        showsUserLocation={true}
        onPress={() => {
          visibleInformationHouse != '' ? setVisibleInformationHouse('') : null
        }}
      >

        {Houses.map((House, key) => (
          <Marker
            key={key}
            coordinate={{
              latitude: House.latitude,
              longitude: House.longitude,
            }}
            onPress={() => {

              visibleInformation(House.houseTitle,
                House.openingHours,
                House.adress,
                House.price,
                House.meters,
                House.bathrooms,
                House.bedrooms,
                House.vacancy,
                House.image)

            }
            }
          >

            {visibleInformationHouse === House.houseTitle ?
              <Callout key={key} Image={House.image} Title={House.houseTitle} Description={House.price} CallNumber={House.phone} />
              : null}

            <MarkerView ImageHouse={House.image} />
          </Marker>



        ))}


      </MapView> : null

      }


      {visibleInformationHouse && selectedCard === null ?
        <InformationHouse
          selectedCard={(px, py, id) => {
            setYOffset(3000),
              setXOffset(1000),
              setSelectedCard(1)
          }

          }
          HouseTitle={titleHouse}
          OpeningHours={openingHours}
          Adress={adress}
        /> : null}

      {selectedCard && (
        <ExpandedCard
          yOffset={yOffset}
          xOffset={xOffset}
          HouseTitle={titleHouse}
          ImageHouse={imageHouse}
          OpeningHours={openingHours}
          Adress={adress}
          Price={price}
          Meters={meters}
          Bedrooms={bedrooms}
          Vacancy={vacancy}
          Bathrooms={bathrooms}
          unselectCard={() =>
            setSelectedCard(null)
          }
        />)}


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 300,
    height: 200
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%',
  }
})