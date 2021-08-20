import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import  MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

import mapMarker from "./src/images/map-marker.png";

export default function App() {
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
                <Marker 
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8
                    }}
                    coordinate={{
                        latitude: -22.835987,
                        longitude: -43.306520
                    }}
                >
                    <Callout tooltip onPress={() => { }}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Children residential institution</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
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
        fontSize: 14
    }
});
