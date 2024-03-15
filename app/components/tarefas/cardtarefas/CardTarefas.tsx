import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, MD3Colors } from "react-native-paper";
import Tarefa from "../../../models/Tarefa";

interface CardTarefaProps {
    tarefa: Tarefa
}

export default function CardTarefas({ tarefa }: CardTarefaProps) {
    return (

        <View style={styles.cardContainerStyle}>
            <Text style={styles.tarefaStyle}>{tarefa.nome}</Text>
            <Text style={styles.textStyle}>{tarefa.responsavel}</Text>
            <Text style={styles.textStyle}>{new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'medium',
                timeZone: 'America/Sao_Paulo',
            }).format(new Date(tarefa.data))}
            </Text>
            <Text style={tarefa.status == 1 ?
                styles.emAndamentoStyle :
                styles.naoIniciadaStyle}
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
            <Text style={styles.textStyle}>Categoria: {tarefa.categoria?.descricao}</Text>
            <View style={styles.botaoContainerStyle}>
                <Button labelStyle={styles.botaoStyle} icon="pencil" mode="contained" onPress={() => console.log('Editar...')}>
                    Editar
                </Button>
                <Button labelStyle={styles.botaoStyle} icon="delete" mode="contained" onPress={() => console.log('Deletar...')}>
                    Deletar
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
        borderRadius: 8,
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