import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './app/routes/Routes';

export default function App() {

  return (
    // <PaperProvider>
    //   <SafeAreaProvider>
    //     <NativeRouter>
    //       <SafeAreaView style={styles.containerStyle}>
    //         <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    //         <Routes>
    //           <Route path="/" Component={Home} />
    //           <Route path="/listartarefas" Component={ListarTarefas} />
    //           <Route path="/cadastrar" Component={FormTarefa} />
    //           <Route path="/editar/:id" Component={FormTarefa} />
    //           <Route path="/deletar/:id" Component={DeletarTarefa} />
    //         </Routes>
    //       </SafeAreaView>
    //     </NativeRouter> 

    //   </SafeAreaProvider>
    // </PaperProvider>

    <PaperProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

