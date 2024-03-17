import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '15%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6750A4',
    },
    containerNavbar: {
        width: '90%',
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        paddingLeft: 4,
    },
});