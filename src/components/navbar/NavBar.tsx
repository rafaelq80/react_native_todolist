import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { styles } from '../../styles/NavbarStyles';
import { propsStack } from '../../types/StackParamList';

export default function NavBar() {

    const navigation = useNavigation<propsStack>();
    
    return (
        <View style={styles.container}>

            <View style={styles.containerNavbar}>
                <Avatar.Image
                    size={60}
                    source={{
                        uri: 'https://i.imgur.com/pjuPoU8.png',
                    }}
                />
                <Text style={styles.text}>
                    Seja Bem Vinde!
                </Text>
                <IconButton
                        icon="logout"
                        iconColor='white'
                        size={28}
                        onPress={() => navigation.goBack()}
                    />
            </View>

        </View>
    )
}
