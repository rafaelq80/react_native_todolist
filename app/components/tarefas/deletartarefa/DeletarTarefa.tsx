import { Text } from "react-native";
import { Appbar, Button, Card, Provider } from "react-native-paper";
import { useNavigate } from "react-router-native";
import { styles } from "../../../styles/TarefasStyles";

export default function DeletarTarefa() {

    let navigate = useNavigate()

    const _goBack = () => navigate('/listartarefas');

    return (

        <Provider>

            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="Deletar Tarefa" />
            </Appbar.Header>

            <Card style={styles.card}>

                <Card.Content style={styles.cardContent}>
                    <Text style={styles.titleCard}>Você deseja excluir a tarefa?</Text>
                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Responsável</Text>
                </Card.Content>

                <Card.Actions style={styles.cardActions}>
                    <Button
                        style={styles.button}
                        labelStyle={styles.labelButton}
                        icon="check" mode="contained"
                        onPress={() => console.log('Deletar...')}
                    >
                        Sim
                    </Button>
                    <Button
                        style={styles.button}
                        labelStyle={styles.labelButton}
                        icon="cancel" 
                        mode="contained"
                        onPress={() => _goBack()}
                    >
                        Não
                    </Button>
                </Card.Actions>

            </Card>

        </Provider>
    )
}

