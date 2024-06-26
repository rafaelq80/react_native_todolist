﻿import { Text } from "react-native";
import { Card, Icon, IconButton, MD3Colors } from "react-native-paper";
import Tarefa from "../../models/Tarefa";
import { styles } from "../../styles/TarefasStyles";
import { tarefasPropsStack } from "../../types/StackTarefasParamList";
import { useNavigation, useRoute } from "@react-navigation/native";

interface CardTarefaProps {
    tarefa: Tarefa
}

export default function CardTarefas({ tarefa }: CardTarefaProps) {

    const navigation = useNavigation<tarefasPropsStack>();
    
    return (

        <Card style={styles.card}>

            <Card.Content style={styles.cardContent}>

                <Text style={styles.titleCard}>{tarefa.nome}</Text>
                <Text style={styles.text}>Descrição: {tarefa.descricao}</Text>
                <Text style={styles.text}>Responsável: {tarefa.responsavel}</Text>

                <Text style={styles.text}>Data: {new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'short',
                    timeZone: 'America/Sao_Paulo',
                }).format(new Date(tarefa.data ? tarefa.data : ''))}
                </Text>

                <Text style={tarefa.status == true ?
                    styles.tarefaEmAndamento :
                    styles.tarefaNaoIniciada}
                >
                    {tarefa.status == true ?
                        <Icon
                            source="clock"
                            color={MD3Colors.primary50}
                            size={24}
                        />
                        :
                        <Icon
                            source="stop-circle"
                            color={MD3Colors.primary50}
                            size={24}
                        />
                    }
                    {tarefa.status == true ? "Em Andamento" : "Não Iniciada"}
                </Text>

                <Text style={styles.text}>Categoria: {tarefa.categoria?.descricao}</Text>

            </Card.Content>

            <Card.Actions style={styles.cardActions2}>

                <IconButton
                    //style={styles.button}
                    icon="pencil"
                    iconColor="white"
                    containerColor={MD3Colors.primary50}
                    mode="contained"
                    onPress={() => navigation.navigate("FormTarefas", {
                        id: `${tarefa.id}`
                    })}
                />

                <IconButton
                    //style={styles.button}
                    iconColor="white"
                    containerColor={MD3Colors.error50}
                    icon="delete"
                    mode="contained"
                    onPress={() => navigation.navigate("DeletarTarefas", {
                        id: `${tarefa.id}`
                    })}
                />

            </Card.Actions>

        </Card>

    )
}