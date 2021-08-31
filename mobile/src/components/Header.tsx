import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    const navigation = useNavigation();

    function handleGoBackToAppHomepage() {
        navigation.dispatch(CommonActions.navigate({ name: "InstituionsMap" }));
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6" />
            </BorderlessButton>

            <Text style={styles.title}>{props.title}</Text>

            <BorderlessButton onPress={handleGoBackToAppHomepage}>
                <Feather name="x" size={24} color="#ff669d" />
            </BorderlessButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#f9fafc",
        borderBottomWidth: 1,
        borderColor: "#dde3f0",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    title: {
        fontFamily: "Nunito_600SemiBold",
        color: "#8fa7b3",
        fontSize: 16
    }
});