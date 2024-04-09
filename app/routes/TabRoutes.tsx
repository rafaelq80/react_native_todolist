import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListarCategorias from "../components/categorias/listarcategorias/ListarCategorias";
import NavBar from "../components/navbar/NavBar";
import Tarefas from "../components/tarefas/listartarefas/Tarefas";
import Perfil from "../pages/perfil/Perfil";
import { TabParamList } from "../types/TabParamList";


const Tab = createBottomTabNavigator<TabParamList>();

export default function TabRoutes() {

    return (

        <Tab.Navigator
            initialRouteName="Tarefas"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#6750A4',
                },
                tabBarLabelStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
                tabBarActiveBackgroundColor: '#663399',
            }}
        >
            <NavBar />
            <Tab.Screen
                name="Tarefas"
                component={Tarefas}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="tasks"
                        color='#ffffff'
                        size={18}
                    />
                }}
            />
            <Tab.Screen
                name="Categorias"
                component={ListarCategorias}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="star"
                        color='#ffffff'
                        size={18}
                    />
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="user-alt"
                        color='#ffffff'
                        size={18}
                    />
                }}
            />
        </Tab.Navigator>
    )
}
