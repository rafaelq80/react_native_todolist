import { Text } from "react-native";
import { Button, Card, Icon, MD3Colors } from "react-native-paper";
import { useNavigate } from "react-router-native";
import Tarefa from "../../../models/Tarefa";
import { styles } from "../../../styles/TarefasStyles";

interface CardTarefaProps {
    tarefa: Tarefa
}

export default function CardTarefas({ tarefa }: CardTarefaProps) {

    let navigate = useNavigate()

    function editar(id: string) {
        navigate(`/editar/${id}`)
    }

    function deletar(id: string) {
        navigate(`/deletar/${id}`)
    }

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

            <Card.Actions style={styles.cardActions}>

                <Button
                    style={styles.button}
                    labelStyle={styles.labelButton}
                    icon="pencil"
                    mode="contained"
                    onPress={() => editar(`${tarefa.id}`)}
                >
                    Editar
                </Button>

                <Button
                    style={styles.button}
                    labelStyle={styles.labelButton}
                    icon="delete"
                    mode="contained"
                    onPress={() => deletar(`${tarefa.id}`)}
                >
                    Deletar
                </Button>

            </Card.Actions>

        </Card>

    )
}