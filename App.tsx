import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import NavBar from './app/components/navbar/NavBar';
import ListarTarefas from './app/components/tarefas/listartarefas/ListarTarefas';

export default function App() {

  return (
    <SafeAreaView style={styles.containerStyle}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      
     <NavBar />

      <ListarTarefas />

      {/* <FormTarefa /> */}
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1, 
  },
});
