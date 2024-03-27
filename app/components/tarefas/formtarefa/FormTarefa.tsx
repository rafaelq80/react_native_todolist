import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Appbar, Button, Provider, Switch, TextInput } from 'react-native-paper';
import { DatePickerInput, pt, registerTranslation } from 'react-native-paper-dates';
import { useNavigate } from 'react-router-native';
import Categoria from '../../../models/Categoria';
import Tarefa from '../../../models/Tarefa';
import { cadastrar, listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
registerTranslation('pt', pt)

export default function FormTarefa() {

    let navigate = useNavigate();

    const [inputNome, setNome] = useState<string>('');
    const [inputDescricao, setDescricao] = useState<string>('');
    const [inputResponsavel, setResponsavel] = useState<string>('');
    const [inputData, setData] = useState<Date | undefined>(new Date())
    const [inputStatus, setStatus] = useState<boolean>(false);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
    })

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [_, setTarefa] = useState<Tarefa>()

    async function buscarCategorias() {
        await listar('/categorias', setCategorias)

    }

    useEffect(() => {
        buscarCategorias()
    }, []);

    const _goBack = () => navigate('/listartarefas');

    function handleTarefa() {

        let tarefa = {
            id: 0,
            nome: inputNome,
            descricao: inputDescricao,
            responsavel: inputResponsavel,
            data: inputData,
            status: inputStatus,
            categoria: categoria
        };

        cadastrarTarefa(tarefa);
    }

    async function cadastrarTarefa(tarefa: Tarefa) {
        try {
            await cadastrar(`/tarefas`, tarefa, setTarefa)
            Alert.alert('Tarefa cadastrada com sucesso!', "sucesso")
        } catch (error) {
            console.log(JSON.stringify(error))
            Alert.alert('Erro ao cadastrar o tarefa!', "erro")
        }

        navigate('/listartarefas')
    }

    return (

        <Provider>

            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="Cadastrar Tarefa" />
            </Appbar.Header>

            <ScrollView>

                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Tarefa'
                        value={inputNome}
                        onChangeText={(text) => setNome(text)}
                    />

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Descrição'
                        value={inputDescricao}
                        onChangeText={(text) => setDescricao(text)}
                    />

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Responsável'
                        value={inputResponsavel}
                        onChangeText={(text) => setResponsavel(text)}
                    />

                    <DatePickerInput
                        style={styles.dateSelectInput}
                        locale="pt"
                        label="Data"
                        value={inputData}
                        onChange={(value) => setData(value)}
                        inputMode="start"
                        presentationStyle="pageSheet"
                        underlineColor='transparent'
                        activeUnderlineColor="transparent"
                        theme={{
                            roundness: 24,
                        }}
                    />

                    <View style={styles.switchContainer}>
                        <Text style={styles.text}>Em andamento: </Text>
                        <Switch
                            value={inputStatus}
                            onValueChange={(value) => setStatus(value)}
                        />
                    </View>

                    <Dropdown
                        style={styles.selectInput}
                        placeholderStyle={styles.placeholder}
                        selectedTextStyle={styles.placeholder}
                        inputSearchStyle={styles.placeholder}
                        itemTextStyle={styles.placeholder}
                        data={categorias}
                        search
                        maxHeight={300}
                        labelField="descricao"
                        valueField="id"
                        placeholder='Select item'
                        searchPlaceholder="Search..."
                        value={categoria}
                        onChange={(value) => {
                            setCategoria({
                                id: value.id,
                                descricao: value.descricao
                            });
                        }}
                    />

                    <View style={styles.cardActions}>
                        <Button
                            style={styles.button}
                            labelStyle={styles.labelButton}
                            icon="content-save"
                            mode="contained"
                            onPress={() => handleTarefa()}
                        >
                            Salvar
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </Provider>
    );
}