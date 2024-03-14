import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from 'react-native-input-select';
import { Button, TextInput, Switch } from 'react-native-paper';

export default function FormTarefa() {

    const [checked, setChecked] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<number>(0);

    return (
        <View style={{ flex: 1 }}>

            <View>

                <View style={styles.inputContainerStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        outlineStyle={{borderRadius: 24}}
                        mode='outlined'
                        placeholder='Tarefa'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        outlineStyle={{borderRadius: 24}}
                        mode='outlined'
                        placeholder='Descrição'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        outlineStyle={{borderRadius: 24}}
                        mode='outlined'
                        placeholder='Responsável'
                    />

                    <View style={styles.switchContainerStyle}>
                        <Text style={styles.textStyle}>Em andamento: </Text>
                        <Switch
                            value={checked}
                            onValueChange={(value) => setChecked(value)}
                        />
                    </View>

                    <View>
                        <Dropdown
                            placeholder="Selecione uma Categoria"
                            options={[
                                { label: 'Diária', value: 1 },
                                { label: 'Semanal', value: 2 },
                                { label: 'Mensal', value: 3 },
                            ]}
                            selectedValue={categoria}
                            onValueChange={(value: any) => setCategoria(value)}
                            primaryColor={'black'}
                            placeholderStyle={{
                                fontSize: 20,
                                color: '#8895A0',
                                borderColor: '#8895A0',
                            }}
                            dropdownStyle={{borderRadius: 24}}
                            selectedItemStyle={{
                                fontSize: 20
                            }}
                        />
                    </View>

                    <View style={styles.botaoContainerStyle}>
                        <Button icon="content-save" mode="contained" onPress={() => console.log('Pressed')}>
                            Salvar
                        </Button>
                        <Button icon="home" mode="contained" onPress={() => console.log('Pressed')}>
                            Voltar
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        width: 'auto',
        margin: 16,
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    inputContainerStyle: {
        padding: 8,
    },
    inputStyle: {
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
        marginTop: 8,
        marginBottom: 8,
    },
    switchContainerStyle: {
        width: '100%',
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 8,
    },
    textStyle: {
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
        padding: 8,
    },
    botaoContainerStyle: {
        width: '100%',
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
});