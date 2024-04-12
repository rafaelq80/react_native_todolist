import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavBar from "../components/navbar/NavBar";
import { TabParamList } from "../types/TabParamList";
import Categorias from "../screens/categorias/listarcategorias/Categorias";
import Perfil from "../screens/perfil/Perfil";
import Tarefas from "../screens/tarefas/listartarefas/Tarefas";
import TarefasStackRoutes from "./TarefasStackRoutes";


const Tab = createBottomTabNavigator<TabParamList>();

export default function TabRoutes() {

    return (
        <>
<NavBar />
        <Tab.Navigator
            initialRouteName="Tarefas"
            screenOptions={{
                
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#6750A4',
                    height: 60,
                    
                },
                tabBarLabelStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                },
                tabBarActiveBackgroundColor: '#663399',
            }}
        >
            <Tab.Screen
                name="Tarefas"
                component={TarefasStackRoutes}
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
                component={Categorias}
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

        </>
    )
}
