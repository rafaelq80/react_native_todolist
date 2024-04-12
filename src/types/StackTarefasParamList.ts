import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackTarefasParamList = {
    ListarTarefas: undefined;
    FormTarefas?: {
        id: string;
    };
    DeletarTarefas: {
        id: string;
    };
};

export type tarefasPropsStack = NativeStackNavigationProp<StackTarefasParamList>