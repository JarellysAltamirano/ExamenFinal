import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

const HomeScreen = ({ navigation, route }: Props) => {

    const { id } = route.params;

    return (
        <View style={styles.container}>
            <Text></Text>
            <TextInput>Escriba Aquí su Nueva tarea</TextInput>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
    
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 4,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5
    },
})
