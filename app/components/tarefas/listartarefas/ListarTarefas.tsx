import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FAB, Provider } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import Tarefa from '../../../models/Tarefa';
import { listar } from '../../../services/Service';
import CardTarefas from '../cardtarefas/CardTarefas';
import NavBar from '../../navbar/NavBar';

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

    <Provider>

      <ScrollView>

        <NavBar />

        {tarefas.map((tarefa) => (
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

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
  },
  fab: {
    backgroundColor: '#7845AC',
  },
});