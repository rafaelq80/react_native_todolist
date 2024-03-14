import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FAB, MD3Colors } from 'react-native-paper';
import Tarefa from '../../../models/Tarefa';
import { listar } from '../../../services/Service';
import CardTarefas from '../cardtarefas/CardTarefas';

export default function ListarTarefas() {

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

  return (
    <View style={{ flex: 1 }}>

      <ScrollView>

        {tarefas.map((tarefa) => (
          <CardTarefas key={tarefa.id} tarefa={tarefa} />
        ))}

      </ScrollView>

      <View>
        <TouchableOpacity
          style={styles.touchableOpacityStyle}
        >

          <FAB
            icon="plus"
            onPress={() => console.log('Pressed')}
          />

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
});