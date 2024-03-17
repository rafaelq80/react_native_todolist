import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { styles } from '../../styles/NavbarStyles';

export default function NavBar() {

    let navigate = useNavigate()

    const _goHome = () => navigate('/');
    
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
                        onPress={_goHome}
                    />
            </View>

        </View>
    )
}
