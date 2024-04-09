import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/Home";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Main" component={TabRoutes} />
        </Stack.Navigator>
    )
}
