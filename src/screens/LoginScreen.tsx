import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';

type Props = NativeStackScreenProps<MainStackParamList, 'LoginScreen'>;

const LoginScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>

            <Text>Usuario</Text>
            <TextInput
                style={styles.input}
            >
            </TextInput>

            <Text>Contraseña</Text>
            <TextInput
                keyboardType='visible-password'
                style={styles.input}
            >
            </TextInput>

            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen', {
                    id: 1
                })}
            >
                <Text>Entrar</Text>
                
            </TouchableOpacity>
            
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        


    },
    input: {
        backgroundColor: '#05786A',
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        paddingHorizontal: 50,
        paddingBottom: 10,
        fontSize: 30,
        color: 'black',
        

    },
    TextInput: {
        alignItems: 'center',
        color:'green',
        backgroundColor:'blue',
    }
})
