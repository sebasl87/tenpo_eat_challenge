import React from 'react'
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { REACT_APP_GOOGLE_GEOCODE_KEY } from '@env';
import { useRoute } from '@react-navigation/native';
export interface IHeader {
    title: string
}
const Header: React.FC<IHeader> = ({ title }) => {
    const { geocode } = useSelector((state: RootState) => state.google);
    const route = useRoute();

    return (
        <View
            style={route.name === "LocationSearch" && {
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
            {route.name === "Location" ?
                <TextInput clearButtonMode="always" placeholder='Escribe tu dirección' defaultValue={geocode && geocode[0]?.formatted_address} style={{ ...styles.fontTitle, ...styles.inputLocation, fontSize: 16 }} />
                :
                <GooglePlacesAutocomplete
                    placeholder='Escribe tu dirección'
                    minLength={3}
                    listViewDisplayed='auto'
                    fetchDetails={true}
                    renderDescription={row => row.description}

                    onPress={(data, details = null) => {

                        console.log(data.description);
                    }}

                    query={{
                        key: REACT_APP_GOOGLE_GEOCODE_KEY,
                        language: 'es',
                        types: "address",
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
            }
        </View>
    );
}

export default Header