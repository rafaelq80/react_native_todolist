import { useEffect, useState } from 'react';
import { Alert, NativeSyntheticEvent, ScrollView, SwitchChangeEvent, Text, TextInputChangeEventData, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Appbar, Button, Provider, Switch, TextInput } from 'react-native-paper';
import { DatePickerInput, pt, registerTranslation } from 'react-native-paper-dates';
import { useNavigate, useParams } from 'react-router-native';
import Categoria from '../../../models/Categoria';
import Tarefa from '../../../models/Tarefa';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
registerTranslation('pt', pt)

export default function FormTarefa() {

    let navigate = useNavigate();

    //const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
    })

    const [tarefa, setTarefa] = useState<Tarefa>({
        id: 0,
        nome: '',
        descricao: '',
        responsavel: '',
        data: new Date().toString(),
        status: false,
        categoria: null,
    })

    const { id } = useParams<{ id: string }>()


    async function buscarTarefaPorId(id: string) {
        await listar(`/tarefas/${id}`, setTarefa)
    }

    async function buscarCategorias() {
        await listar('/categorias', setCategorias)
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarTarefaPorId(id)
        }
    }, [id])

useEffect(() => {
    setTarefa({
        ...tarefa,
        categoria: categoria
    })
}, [categoria])

function atualizarData(data: Date | undefined) {

    let dataString: string;

    if (data !== undefined) {
        dataString = data.toString();
    } else {
        dataString = new Date().toDateString();
    }

    console.log("Nova Data: " + dataString);

    setTarefa({
        ...tarefa,
        data: dataString,
    });

}

function atualizarStatus(e: SwitchChangeEvent, name: string) {
    setTarefa({
        ...tarefa,
        [name]: e.nativeEvent.value
    });
}

function atualizarEstado(e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) {
    setTarefa({
        ...tarefa,
        [name]: e.nativeEvent.text,
        categoria: categoria
    });
}

async function gerarNovoProduto() {
    //setIsLoading(true)

    if (id !== undefined) {

        console.log("\nTarefa Update: " + JSON.stringify(tarefa))

        try {
            await atualizar(`/tarefas`, tarefa, setTarefa);

            Alert.alert('Tarefa atualizada!', 'sucesso')

        } catch (error: any) {
            Alert.alert('Erro ao atualizar a Tarefa', 'erro')
        }

    } else {
        try {
            await cadastrar(`/tarefas`, tarefa, setTarefa)

            Alert.alert('Tarefa cadastrado!', 'sucesso');

        } catch (error: any) {
            Alert.alert('Erro ao cadastrar a Tarefa', 'erro');
            console.log(JSON.stringify(error));
        }
    }

    //setIsLoading(false)
    retornar()

}

function retornar() {
    // setTarefa({
    //     id: 0,
    //     nome: '',
    //     descricao: '',
    //     responsavel: '',
    //     data: new Date().toString(),
    //     status: false,
    //     categoria: null,
    // });
    navigate('/listartarefas')
}

console.log(JSON.stringify(tarefa))

return (

    <Provider>

        <Appbar.Header>
            <Appbar.BackAction onPress={() => retornar()} />
            <Appbar.Content title="Cadastrar Tarefa" />
        </Appbar.Header>

        <ScrollView>

            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    outlineStyle={{ borderRadius: 24 }}
                    mode='outlined'
                    placeholder='Tarefa'
                    value={tarefa.nome}
                    onChange={(e) => atualizarEstado(e, 'nome')}
                />

                <TextInput
                    style={styles.input}
                    outlineStyle={{ borderRadius: 24 }}
                    mode='outlined'
                    placeholder='Descrição'
                    value={tarefa.descricao}
                    onChange={(e) => atualizarEstado(e, 'descricao')}
                />

                <TextInput
                    style={styles.input}
                    outlineStyle={{ borderRadius: 24 }}
                    mode='outlined'
                    placeholder='Responsável'
                    value={tarefa.responsavel}
                    onChange={(e) => atualizarEstado(e, 'responsavel')}
                />

                <DatePickerInput
                    style={styles.dateSelectInput}
                    locale="pt"
                    label="Data"
                    value={new Date(tarefa.data)}
                    onChange={(e) => atualizarData(e)}
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
                        value={tarefa.status}
                        onChange={(e) => atualizarStatus(e, 'status')}
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
                        onPress={() => gerarNovoProduto()}
                    >
                        Salvar
                    </Button>
                </View>
            </View>
        </ScrollView>
    </Provider>
);
}