import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";

const TodoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginVertical: 8,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
    }
});
export default TodoItem;