import { Text } from "react-native";
import { Appbar, Button, Card, Provider } from "react-native-paper";
import { useNavigate } from "react-router-native";
import { styles } from "../../../layouts/Styles";

export default function DeletarTarefa() {

    let navigate = useNavigate()

    function back() {
        navigate('/')
    }

    const _goBack = () => navigate('/');

    return (

        <Provider>

            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="Deletar Tarefa" />
            </Appbar.Header>

            <Card style={styles.card}>

                <Card.Content style={styles.cardContent}>
                    <Text style={styles.title}>Você deseja excluir a tarefa?</Text>
                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Responsável</Text>
                </Card.Content>

                <Card.Actions style={styles.cardActions}>
                    <Button labelStyle={styles.labelButton} icon="check" mode="contained" onPress={() => console.log('Deletar...')}>
                        Sim
                    </Button>
                    <Button labelStyle={styles.labelButton} icon="cancel" mode="contained" onPress={() => back()}>
                        Não
                    </Button>
                </Card.Actions>

            </Card>

        </Provider>
    )
}

