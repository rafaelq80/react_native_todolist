import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import NavBar from './app/components/navbar/NavBar';
import ListarTarefas from './app/components/tarefas/listartarefas/ListarTarefas';
import { NativeRouter, Route, Routes } from "react-router-native";
import FormTarefa from './app/components/tarefas/formtarefa/FormTarefa';

export default function App() {

  return (
    <NativeRouter>
      <SafeAreaView style={styles.containerStyle}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <NavBar />
        <Routes>
          <Route path="/" Component={ListarTarefas} />
          <Route path="/cadastrar" Component={FormTarefa} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
