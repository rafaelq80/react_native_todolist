import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigate } from "react-router-native";

export default function DeletarTarefa() {

    let navigate = useNavigate()
    
    function back() {
        navigate('/')
    }

    return (

        <View style={styles.cardContainerStyle}>
            <Text style={styles.tarefaStyle}>Você deseja excluir a tarefa?</Text>
            <Text style={styles.tarefaStyle}>Nome</Text>
            <Text style={styles.textStyle}>Responsável</Text>
            <View style={styles.botaoContainerStyle}>
                <Button labelStyle={styles.botaoStyle} icon="check" mode="contained" onPress={() => console.log('Deletar...')}>
                    Sim
                </Button>
                <Button labelStyle={styles.botaoStyle} icon="cancel" mode="contained" onPress={() => back()}>
                    Não
                </Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    cardContainerStyle: {
        width: 'auto',
        margin: 16,
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#f1f5f9',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tarefaStyle: {
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
        fontWeight: '700',
        padding: 8,
    },
    textStyle: {
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
        padding: 8,
    },
    naoIniciadaStyle: {
        fontSize: 20,
        lineHeight: 28,
        color: '#b91c1c',
        fontWeight: '700',
        padding: 8,
    },
    emAndamentoStyle: {
        fontSize: 20,
        lineHeight: 28,
        color: '#1d4ed8',
        fontWeight: '700',
        padding: 8,
    },
    botaoContainerStyle: {
        width: '100%',
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    botaoStyle: {
        fontSize: 18,
        padding: 2,
    },
});