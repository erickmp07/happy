import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import InstitutionsMap from "./pages/InstitutionsMap";
import InstitutionDetails from "./pages/InstitutionDetails";

import SelectMapPosition from "./pages/CreateInstitution/SelectMapPosition";
import InstitutionData from "./pages/CreateInstitution/InstitutionData";

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#f2f3f5" } }}>
                <Screen name="InstitutionsMap" component={InstitutionsMap} />

                <Screen name="InstitutionDetails" component={InstitutionDetails} />

                <Screen name="SelectMapPosition" component={SelectMapPosition} />

                <Screen name="InstitutionData" component={InstitutionData} />
            </Navigator>
        </NavigationContainer>
    );
}