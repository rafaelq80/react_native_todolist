import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { styles } from '../../styles/HomeStyles';

export default function Home() {

    let navigate = useNavigate()

    function lista() {
        navigate('/listarTarefas')
    }

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
                    onPress={() => lista()}
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
