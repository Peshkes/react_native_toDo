import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name={'delete'} color={'#bbb'} size={18}/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item:{
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        padding: 16,
        marginVertical: 8,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
    },
    text: {
        marginLeft: 12,
    }
});
export default TodoItem;