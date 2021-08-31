import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

interface InstitutionDataRouteParams {
    position: { latitude: number, longitude: number };
}

export default function InstitutionData() {
    const route = useRoute();
    const navigation = useNavigation();

    const [open_on_weekends, setOpenOnWeekends] = useState(false);

    const params = route.params as InstitutionDataRouteParams;
    const position = params.position;

    function handleCreateInstitution() {
        // todo
    }

    async function handleSelectImages() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            alert("Eita! Precisamos de acesso às suas fotos...");
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <Text style={styles.title}>Data</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
            />

            <Text style={styles.label}>About</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
            />

            <Text style={styles.label}>WhatsApp</Text>
            <TextInput
                style={styles.input}
            />

            <Text style={styles.label}>Photos</Text>
            <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
                <Feather name="plus" size={24} color="#15B6D6" />
            </TouchableOpacity>

            <Text style={styles.title}>Visitation</Text>

            <Text style={styles.label}>Instructions</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
            />

            <Text style={styles.label}>Opening hours</Text>
            <TextInput
                style={styles.input}
            />

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Open on weekend?</Text>
                <Switch
                    thumbColor="#fff"
                    trackColor={{ false: "#ccc", true: "#39CC83" }}
                    value={open_on_weekends}
                    onValueChange={setOpenOnWeekends}
                />
            </View>

            <RectButton style={styles.nextButton} onPress={handleCreateInstitution}>
                <Text style={styles.nextButtonText}>Register</Text>
            </RectButton>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        color: "#5c8599",
        fontSize: 24,
        fontFamily: "Nunito_700Bold",
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: "#D3E2E6"
    },

    label: {
        color: "#8fa7b3",
        fontFamily: "Nunito_600SemiBold",
        marginBottom: 8,
    },

    comment: {
        fontSize: 11,
        color: "#8fa7b3",
    },

    input: {
        backgroundColor: "#fff",
        borderWidth: 1.4,
        borderColor: "#d3e2e6",
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: "top",
    },

    imagesInput: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderStyle: "dashed",
        borderColor: "#96D2F0",
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 32,
    },

    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
    },

    nextButton: {
        backgroundColor: "#15c3d6",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 56,
        marginTop: 32,
    },

    nextButtonText: {
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
        color: "#FFF",
    }
})