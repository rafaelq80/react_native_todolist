import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import DeletarTarefa from './app/components/tarefas/deletartarefa/DeletarTarefa';
import FormTarefa from './app/components/tarefas/formtarefa/FormTarefa';
import ListarTarefas from './app/components/tarefas/listartarefas/ListarTarefas';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './app/components/home/Home';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NativeRouter>
          <SafeAreaView style={styles.containerStyle}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/listartarefas" Component={ListarTarefas} />
              <Route path="/cadastrar" Component={FormTarefa} />
              <Route path="/editar/:id" Component={FormTarefa} />
              <Route path="/deletar/:id" Component={DeletarTarefa} />
            </Routes>
          </SafeAreaView>
        </NativeRouter>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
