﻿import { StyleSheet} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    card: {
        width: 'auto',
        margin: 16,
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    cardContent: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    cardActions: {
        width: '100%',
        marginTop: 4,
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCard: {
        fontSize: 24,
        lineHeight: 28,
        color: '#000000',
        fontWeight: '700',
        paddingTop: 8,
        paddingBottom: 8,
    },
    text: {
        fontSize: 20,
        lineHeight: 24,
        color: '#000000',
        paddingTop: 8,
        paddingBottom: 8,
    },
    tarefaNaoIniciada: {
        fontSize: 20,
        lineHeight: 24,
        color: '#b91c1c',
        fontWeight: '700',
        paddingTop: 8,
        paddingBottom: 8,
    },
    tarefaEmAndamento: {
        fontSize: 20,
        lineHeight: 24,
        color: '#1d4ed8',
        fontWeight: '700',
        paddingTop: 8,
        paddingBottom: 8,
    },
    button: {
        minWidth: '45%',
    },
    labelButton: {
        fontSize: 20,
        lineHeight: 28,
    },
    inputContainer: {
        padding: 16,
    },
    input: {
        backgroundColor: Colors.PurpleLight,
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
        marginTop: 8,
        marginBottom: 8,
    },
    switchContainer: {
        width: '100%',
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 8,
    },
    buttonContainer: {
        width: '100%',
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    dateSelectInput: {
        backgroundColor: Colors.PurpleLight,
        borderRadius: 24,
        borderWidth: 1,
        fontSize: 20,
        lineHeight: 28,
        marginTop: 8,
        marginBottom: 8,
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
      },
      fab: {
        backgroundColor: '#6750A4',
      },
});