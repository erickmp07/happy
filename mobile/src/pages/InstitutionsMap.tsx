import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import  MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { RectButton } from "react-native-gesture-handler";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import mapMarker from "../images/map-marker.png";

import api from "../services/api";

interface Institution {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function InstitutionsMap() {
    const [institutions, setInstitutions] = useState<Institution[]>([]);

    const navigation = useNavigation();

    useEffect(() => {
        api.get("institutions").then(response => {
            setInstitutions(response.data);
        });
    }, []);

    function handleNavigateToInstitutionDetails(id: number) {
        navigation.dispatch(CommonActions.navigate({ name: "InstitutionDetails", params: { id } }));
    }

    function handleNavigateToCreateInstitution() {
        navigation.dispatch(CommonActions.navigate({ name: "SelectMapPosition" }));
    }

    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map} 
                initialRegion={{
                    latitude: -22.835987,
                    longitude: -43.306520,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
            >
                {institutions.map(institution => {
                    return(
                        <Marker 
                            key={institution.id}
                            icon={mapMarker}
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8
                            }}
                            coordinate={{
                                latitude: institution.latitude,
                                longitude: institution.longitude
                            }}
                        >
                            <Callout tooltip onPress={() => handleNavigateToInstitutionDetails(institution.id)}>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>{institution.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    );
                })}
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>{institutions.length} institution(s) found</Text>

                <RectButton style={styles.createInstitutionButton} onPress={handleNavigateToCreateInstitution}>
                    <Feather name="plus" size={20} color="#fff" />
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 16,
        justifyContent: "center"
    },

    calloutText: {
        color: "#0089a5",
        fontSize: 14,
        fontFamily: "Nunito_700Bold"
    },

    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: "#fff",
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        elevation: 3
    },

    footerText: {
        fontFamily: "Nunito_700Bold",
        color: "#8fa7b3"
    },

    createInstitutionButton: {
        width: 56,
        height: 56,
        backgroundColor: "#15c3d6",
        borderRadius: 20,

        justifyContent: "center",
        alignItems: "center"
    }
});