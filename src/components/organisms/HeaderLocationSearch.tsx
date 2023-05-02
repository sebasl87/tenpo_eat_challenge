import React from 'react'
import { useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { styles } from '../../styles/styles';
import { AppDispatch } from '../../store';
import { REACT_APP_GOOGLE_GEOCODE_KEY } from 'dotenv';
import { setAddress } from '../../store/addressSlice';
import { Location } from '../../store/googleSlice';
export interface IHeader {
    title: string
}
export interface IHandleDispatch { address: string, coordinates?: Location }

const Header: React.FC<IHeader> = ({ title }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch<AppDispatch>();

    const handleDispatch: (arg0: IHandleDispatch) => void = ({ address, coordinates }) => { dispatch(setAddress({ formated_address: address, geolocation: coordinates })), navigation.navigate("Location") }

    return (
        <View
            style={{
                height: 1200,
                width: '100%',
                position: 'absolute',
                zIndex: 100,
            }}
        >
            <View style={styles.headerLocation}>
                <View style={{ marginBottom: 32, display: "flex", flexDirection: "row" }}>
                    <Image
                        source={require("../../../assets/icons/location.png")}
                        style={{ height: 24, width: 24, marginRight: 6, paddingTop: 30 }}
                    />
                    <Text style={styles.fontTitle}>{title}</Text>
                </View>
            </View>
            <GooglePlacesAutocomplete
                placeholder='Escribe tu dirección'
                minLength={3}
                listViewDisplayed='auto'
                fetchDetails={true}
                renderDescription={row => row.description}
                onPress={(data, details = null) => {
                    handleDispatch({ address: data?.description, coordinates: details?.geometry.location })
                }}
                query={{
                    key: REACT_APP_GOOGLE_GEOCODE_KEY,
                    language: 'es',
                    types: "geocode",
                    components: 'country:cl',
                }}
                renderRow={(rowData) => {
                    const title = rowData.structured_formatting.main_text;
                    const address = rowData.structured_formatting.secondary_text;
                    return (
                        <View>
                            <Text style={{ fontFamily: "Gotham-Book", fontSize: 16, marginBottom: 4 }}>{title}</Text>
                            <Text style={{ fontFamily: "Gotham-Book", fontSize: 12, color: "#ADADAD" }}>{address}</Text>
                        </View>
                    );
                }}
                styles={{
                    textInputContainer: { ...styles.textInputContainer },
                    textInput: { maxWidth: "90%", fontFamily: "Gotham-Book", alignSelf: "center" }
                }}
            />

        </View>
    );
}

export default Header