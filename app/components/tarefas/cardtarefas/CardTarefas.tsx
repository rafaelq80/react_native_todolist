import { Text, View } from "react-native";
import { Button, Card, Icon, MD3Colors, Provider } from "react-native-paper";
import { useNavigate } from "react-router-native";
import { styles } from "../../../layouts/Styles";
import Tarefa from "../../../models/Tarefa";

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

        <Card style={styles.cardTarefa}>

            <Card.Content style={styles.cardContentTarefa}>

                <Text style={styles.title}>{tarefa.nome}</Text>
                <Text style={styles.text}>Responsável: {tarefa.responsavel}</Text>

                <Text style={styles.text}>Data: {new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'short',
                    timeStyle: 'medium',
                    timeZone: 'America/Sao_Paulo',
                }).format(new Date(tarefa.data))}
                </Text>

                <Text style={tarefa.status == 1 ?
                    styles.tarefaEmAndamento :
                    styles.tarefaNaoIniciada}
                >
                    {tarefa.status == 1 ?
                        <Icon
                            source="clock"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        :
                        <Icon
                            source="stop-circle"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                    }
                    {tarefa.status == 1 ? "Em Andamento" : "Não Iniciada"}
                </Text>
                <Text style={styles.text}>Categoria: {tarefa.categoria?.descricao}</Text>

            </Card.Content>

            <Card.Actions style={styles.cardActionsTarefa}>

                <Button labelStyle={styles.labelButton} icon="pencil" mode="contained" onPress={() => editar(`${tarefa.id}`)}>
                    Editar
                </Button>

                <Button labelStyle={styles.labelButton} icon="delete" mode="contained" onPress={() => deletar(`${tarefa.id}`)}>
                    Deletar
                </Button>

            </Card.Actions>

        </Card>

    )
}