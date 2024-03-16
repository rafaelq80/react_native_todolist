import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Provider, Switch, TextInput } from 'react-native-paper';
import { DatePickerInput, pt, registerTranslation } from 'react-native-paper-dates';
import { PaperSelect } from 'react-native-paper-select';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigate } from 'react-router-native';
registerTranslation('pt', pt)

export default function FormTarefa() {

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
        // error: '',
    });

    function back() {
        navigate('/')
    }

    return (
        <SafeAreaProvider>
            <Provider>
                <View style={{ flex: 1 }}>
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
                                        // error: '',
                                    });
                                }}
                                arrayList={[...categoria.list]}
                                selectedArrayList={categoria.selectedList}
                                // errorText={categoria.error}
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
                                <Button labelStyle={styles.button} icon="home" mode="contained" onPress={() => back()}>
                                    Voltar
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Provider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        margin: 16,
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
    text: {
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
        padding: 8,
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
    button: {
        fontSize: 18,
        padding: 2,
    },
    dateSelectInput: {
        backgroundColor: Colors.PurpleLight,
        borderRadius: 24,
        borderWidth: 1,
        fontSize: 20,
        lineHeight: 24,
        marginTop: 8,
        marginBottom: 8,
    },
});