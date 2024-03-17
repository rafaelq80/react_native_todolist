import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    containerHome: {
        width: '100%',
        height: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ede9fe',
        flex: 1,
    },
    headerHome: {
        fontSize: 36,
        color: '#6750A4',
        fontWeight: 'bold',
        paddingVertical: 14,
    },
    paragraphHome: {
        fontSize: 24,
        lineHeight: 26,
        color: '#6750A4',
        marginBottom: 14,
    },
    imageHome: {
        width: 150,
        height: 150,
        marginTop: "25%",
        marginBottom: 12,
    },
    buttonHome: {
        minWidth: '90%',
    },
    labelButtonHome: {
        fontSize: 20,
        lineHeight: 28,
    },
    actionsHome: {
        width: 'auto',
        margin: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textFooter: {
        fontSize: 16,
        textAlign: 'center',
        color: '#6750A4',
    },
});