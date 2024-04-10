import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './app/routes/Routes';

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

