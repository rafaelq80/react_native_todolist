import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./TabRoutes";
import { StackParamList } from "../types/StackParamList";
import Home from "../screens/home/Home";

const Stack = createNativeStackNavigator<StackParamList>();

export default function HomeStackRoutes() {
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
