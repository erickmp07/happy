import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import { CommonActions, useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { MapEvent, Marker } from "react-native-maps";

import mapMarker from "../../images/map-marker.png";

export default function SelectMapPosition() {
    const navigation = useNavigation();
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    function handleSelectMapPosition(event: MapEvent) {
        setPosition(event.nativeEvent.coordinate);
    }

    function handleNextStep() {
        navigation.dispatch(CommonActions.navigate({ 
            name: "InstitutionData", 
            params: { position } 
        }));
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -27.2092052,
                    longitude: -49.6401092,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                onPress={handleSelectMapPosition}
                style={styles.mapStyle}
            >
                {!!position.latitude && (
                    <Marker
                        icon={mapMarker}
                        coordinate={position}
                    />
                )}
            </MapView>

            {!!position.latitude && (
                <RectButton style={styles.nextButton} onPress={handleNextStep}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </RectButton>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },

    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    nextButton: {
        backgroundColor: "#15c3d6",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 56,

        position: "absolute",
        left: 24,
        right: 24,
        bottom: 40,
    },

    nextButtonText: {
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
        color: "#FFF",
    }
})