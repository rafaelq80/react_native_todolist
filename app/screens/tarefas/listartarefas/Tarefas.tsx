import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { FAB, PaperProvider } from 'react-native-paper';
import CardTarefas from '../../../components/cardtarefas/CardTarefas';
import Tarefa from '../../../models/Tarefa';
import { listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
import { tarefasPropsStack } from '../../../types/StackTarefasParamList';

export default function Tarefas() {

  const navigation = useNavigation<tarefasPropsStack>();

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
  }, [tarefas]);

  function open() {
    navigation.navigate("FormTarefas");
  }

  return (

    <>
      {/* <PaperProvider> */}

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
      {/* </PaperProvider> */}
    </>

  );
}
