import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, Provider, Switch, TextInput } from 'react-native-paper';
import { DatePickerInput, pt, registerTranslation } from 'react-native-paper-dates';
import { PaperSelect } from 'react-native-paper-select';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigate } from 'react-router-native';
import { styles } from '../../../layouts/Styles';
registerTranslation('pt', pt)

export default function FormTarefa() {

    let id = 1;
    let navigate = useNavigate();

    const [checked, setChecked] = useState<boolean>(false);
    const [inputDate, setInputDate] = useState<Date | undefined>(undefined)

    const [categoria, setCategoria] = useState({
        value: '',
        list: [
            { _id: '1', value: 'MALE' },
            { _id: '2', value: 'FEMALE' },
            { _id: '3', value: 'OTHERS' },
        ],
        selectedList: [],
    });

    const _goBack = () => navigate('/');

    return (

        <Provider>

            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title={id === undefined ? "Cadastrar Tarefa" : "Editar Tarefa"} />
            </Appbar.Header>

            <ScrollView>

                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Tarefa'
                    />

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Descrição'
                    />

                    <TextInput
                        style={styles.input}
                        outlineStyle={{ borderRadius: 24 }}
                        mode='outlined'
                        placeholder='Responsável'
                    />

                    <DatePickerInput
                        style={styles.dateSelectInput}
                        locale="pt"
                        label="Data"
                        value={inputDate}
                        onChange={(d) => setInputDate(d)}
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
                            value={checked}
                            onValueChange={(value) => setChecked(value)}
                        />
                    </View>

                    <PaperSelect
                        label="Selecione uma Categoria..."
                        dialogCloseButtonText="Voltar"
                        dialogDoneButtonText="OK"
                        value={categoria.value}
                        onSelection={(value: any) => {
                            setCategoria({
                                ...categoria,
                                value: value.text,
                                selectedList: value.selectedList,
                            });
                        }}
                        arrayList={[...categoria.list]}
                        selectedArrayList={categoria.selectedList}
                        multiEnable={false}
                        hideSearchBox={true}
                        dialogTitleStyle={{ color: '#000000' }}
                        theme={{
                            roundness: 24,
                            colors: {
                                placeholder: 'black',
                            }
                        }}
                        textInputProps={{
                            underlineColor: "transparent",
                            activeUnderlineColor: "transparent",
                        }}
                        textInputStyle={styles.dateSelectInput}
                    />

                    <View style={styles.buttonContainer}>
                        <Button labelStyle={styles.button} icon="content-save" mode="contained" onPress={() => console.log('Salvar...')}>
                            Salvar
                        </Button>
                    </View>
                </View>
            </ScrollView>

        </Provider>

    );
}