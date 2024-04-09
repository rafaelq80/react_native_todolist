import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NavBar from "../components/navbar/NavBar";
import StackRoutes from "./StackRoutes";

export default function Routes() {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.containerStyle}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <StackRoutes />
            </SafeAreaView>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
});