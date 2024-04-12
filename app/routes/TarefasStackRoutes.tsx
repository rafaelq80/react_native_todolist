import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./TabRoutes";
import { StackParamList } from "../types/StackParamList";
import Home from "../screens/home/Home";
import FormTarefa from "../screens/tarefas/formtarefa/FormTarefa";
import DeletarTarefa from "../screens/tarefas/deletartarefa/DeletarTarefa";
import { StackTarefasParamList } from "../types/StackTarefasParamList";
import Tarefas from "../screens/tarefas/listartarefas/Tarefas";

const Stack = createNativeStackNavigator<StackTarefasParamList>();

export default function TarefasStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="ListarTarefas"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListarTarefas" component={Tarefas} />
            <Stack.Screen name="FormTarefas" component={FormTarefa} />
            <Stack.Screen name="DeletarTarefas" component={DeletarTarefa} />
        </Stack.Navigator>
    )
}
