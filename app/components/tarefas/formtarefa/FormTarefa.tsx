import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { Alert, NativeSyntheticEvent, ScrollView, SwitchChangeEvent, Text, TextInputChangeEventData, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Appbar, Button, Provider, Switch, TextInput } from 'react-native-paper';
import { useNavigate, useParams } from 'react-router-native';
import Categoria from '../../../models/Categoria';
import Tarefa from '../../../models/Tarefa';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';

export default function FormTarefa() {

    let navigate = useNavigate();

    const [changeCategoria, setChangeCategoria] = useState<boolean>(false)

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
        data: new Date(),
        status: false,
        categoria: null
    })

    const [showDate, setShowDate] = useState<boolean>(false);

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

    // function atualizarData(e: DateTimePickerEvent, name: string) {

    //     const dataInput: Date = new Date(e.nativeEvent.timestamp)

    //     setShowDate(false)

    //     setTarefa({
    //         ...tarefa,
    //         [name]: dataInput
    //     });

    //     setChangeDate(true)

    // }

    function atualizarStatus(e: SwitchChangeEvent, name: string) {
        setTarefa({
            ...tarefa,
            [name]: e.nativeEvent.value
        });
    }

    function atualizarEstado(e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) {

        setTarefa({
            ...tarefa,
            [name]: e.nativeEvent.text
        });

    }

    function atualizarCategoria(categoria: Categoria) {

        setCategoria({
            id: categoria.id,
            descricao: categoria.descricao
        });

        setChangeCategoria(true)
    }

    async function gerarNovaTarefa() {

        if (id !== undefined) {

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

        retornar()

    }

    function retornar() {
        navigate('/listartarefas')
    }


    function formatarData(data: Date) {
        return new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeZone: 'America/Sao_Paulo',
        }).format(new Date(data))
    }

    // console.log(JSON.stringify(tarefa))

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

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Data'
                        value={formatarData(tarefa.data)}
                        editable
                        onFocus={() => setShowDate(true)}
                    />

                    {React.useMemo(() => {
                        return showDate &&
                        <DateTimePickerModal
                            isVisible={showDate}
                            mode="date"
                            date={new Date(tarefa.data)}
                            onConfirm={(date) => {
                                setShowDate(false)
                                setTarefa({
                                    ...tarefa,
                                    data: new Date(date)
                                });

                            }}
                            onCancel={() => setShowDate(false)}
                        />
                    }, [showDate])}

                        {/* {React.useMemo(() => {
                        return showDate &&
                            <RNDateTimePicker
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                locale='pt'
                                timeZoneName={'America/Sao_Paulo'}
                                testID="dateTimePicker"
                                value={new Date(tarefa.data)}
                                mode='date'
                                is24Hour={true}
                                positiveButton={{ label: 'OK', textColor: 'green' }}
                                negativeButton={{ label: 'Cancelar', textColor: 'red' }}
                                onChange={(e) => atualizarData(e, 'data')}
                            />
                    }, [showDate])} */}

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
                        onChange={(value) => atualizarCategoria(value)}
                    />

                    <View style={styles.cardActions}>
                        <Button
                            style={styles.button}
                            labelStyle={styles.labelButton}
                            icon="content-save"
                            mode="contained"
                            onPress={() => gerarNovaTarefa()}
                            disabled={changeCategoria ? false : true}
                        >
                            Salvar
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </Provider>
    );
}