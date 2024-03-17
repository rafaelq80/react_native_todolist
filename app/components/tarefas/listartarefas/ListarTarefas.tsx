import { useEffect, useState } from 'react';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import Tarefa from '../../../models/Tarefa';
import { listar } from '../../../services/Service';
import NavBar from '../../navbar/NavBar';
import { styles } from '../../../styles/TarefasStyles';
import CardTarefas from '../cardtarefas/CardTarefas';

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

      <ScrollView>

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
          onPress={() => open()} />

      </TouchableOpacity>

    </>

  );
}
