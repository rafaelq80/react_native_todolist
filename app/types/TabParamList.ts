import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";


export type TabParamList = {
    Tarefas: undefined;
    Categorias: undefined;
    Perfil: undefined;
};

export type propsTab = BottomTabNavigationProp<TabParamList>