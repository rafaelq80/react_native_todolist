import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/HomeStyles';
import { propsStack } from '../../types/StackParamList';

export default function Home() {

    const navigation = useNavigation<propsStack>();

    return (
        <View style={styles.containerHome}>

            <Image
                source={{
                    uri: 'https://i.imgur.com/0oXaYVi.png',
                }}
                style={styles.imageHome}
            />

            <Text style={styles.headerHome}>Todo List Mobile</Text>

            <Text style={styles.paragraphHome}>Adicione suas tarefas!</Text>

            <View style={styles.actionsHome}>

                <Button
                    style={styles.buttonHome}
                    labelStyle={styles.labelButtonHome}
                    mode="contained"
                    onPress={() => navigation.navigate('Main', {screen: 'Tarefas'})}
                >
                    Entrar
                </Button>

                <Button
                    style={styles.buttonHome}
                    labelStyle={styles.labelButtonHome}
                    mode="outlined"
                    onPress={() => console.log('Entrar')}
                >
                    Cadastrar
                </Button>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textFooter}>Desenvolvido por Rafael Queiróz</Text>
                <Text style={styles.textFooter}>Copyright: 2024</Text>
            </View>

        </View>
    )
}
