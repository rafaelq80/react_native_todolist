import { useEffect, useState } from 'react';
import { Alert, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Appbar, Button, Card, FAB, Icon, MD3Colors, Modal, PaperProvider, Portal, Text, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import Categoria from '../../../models/Categoria';
import Tarefa from '../../../models/Tarefa';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
import NavBar from '../../navbar/NavBar';
import CardTarefas from '../cardtarefas/CardTarefas';
import { useNavigate } from 'react-router-native';

export default function ListarTarefas() {

  let navigate = useNavigate();

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  async function buscarTarefas() {
    try {
      await listar('/tarefas', setTarefas);
    } catch (error: any) {
      Alert.alert('Erro ao listar as Tarefas.')
    }
  }

  useEffect(() => {
    buscarTarefas();
  }, [tarefas.length]);

  function open() {
    navigate('/cadastrar')
  }

  return (

    <>

      <NavBar />
      <PaperProvider>

        <ScrollView>

          {tarefas.sort((a, b) => +new Date(b.data) - +new Date(a.data)).map((tarefa) => (
            <CardTarefas key={tarefa.id} tarefa={tarefa} />

          ))}

        </ScrollView>

        <TouchableOpacity
          style={styles.touchableOpacityStyle}
        >

          <FAB
            style={styles.fab}
            icon="plus"
            color="#ffffff"
            onPress={() => open()}
          />

        </TouchableOpacity>
      </PaperProvider>
    </>

  );
}
