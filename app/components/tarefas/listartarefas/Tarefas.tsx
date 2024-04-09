import { useEffect, useState } from 'react';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { FAB, PaperProvider } from 'react-native-paper';
import Tarefa from '../../../models/Tarefa';
import { listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
import CardTarefas from '../cardtarefas/CardTarefas';

export default function Tarefas() {

  //let navigate = useNavigate();

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
  }, []);

  function open() {
    //navigate('/cadastrar')
    console.log("abrir")
  }

  return (

    <>
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
