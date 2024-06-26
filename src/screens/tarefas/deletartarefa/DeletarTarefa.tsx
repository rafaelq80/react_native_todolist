﻿import { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { Appbar, Button, Card, Provider } from "react-native-paper";
import Tarefa from "../../../models/Tarefa";
import { deletar, listar } from "../../../services/Service";
import { styles } from "../../../styles/TarefasStyles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { tarefasPropsStack } from "../../../types/StackTarefasParamList";

export default function DeletarTarefa() {

    //const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigation = useNavigation<tarefasPropsStack>();
    
    const [tarefa, setTarefa] = useState<Tarefa>({} as Tarefa)

    const params : RouteProp<{params: {id: string}}, 'params'> = useRoute();

    const id: string = params.params?.id;

    async function buscarPorId(id: string) {
        try {
            await listar(`/tarefas/${id}`, setTarefa)
        } catch (error: any) {
            Alert.alert('Tarefa não encontrada!', 'erro')

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTarefa() {
        //setIsLoading(true)

        try {
            await deletar(`/tarefas/${id}`)

            Alert.alert('Tarefa Excluída!', 'sucesso')

        } catch (error) {
            Alert.alert('Erro ao Excluir a Tarefa', 'erro')
        }

        //setIsLoading(false)
        retornar()
    }
    
    function retornar() {
        navigation.navigate("ListarTarefas")
    }

    return (

        <Provider>

            {/* <Appbar.Header>
                <Appbar.BackAction onPress={() => retornar()} />
                <Appbar.Content title="Deletar Tarefa" />
            </Appbar.Header> */}

            <Card style={styles.card}>

                <Card.Content style={styles.cardContent}>
                    <Text style={styles.titleCard}>Você deseja excluir a tarefa?</Text>
                    <Text style={styles.text}>{tarefa.nome}</Text>
                    <Text style={styles.text}>{tarefa.responsavel}</Text>
                </Card.Content>

                <Card.Actions style={styles.cardActions}>
                    <Button
                        style={styles.button}
                        labelStyle={styles.labelButton}
                        icon="check" mode="contained"
                        onPress={() => deletarTarefa()}
                    >
                        Sim
                    </Button>
                    <Button
                        style={styles.button}
                        labelStyle={styles.labelButton}
                        icon="cancel" 
                        mode="contained"
                        onPress={() => retornar()}
                    >
                        Não
                    </Button>
                </Card.Actions>

            </Card>

        </Provider>
    )
}

