import React, {useState} from 'react';
import {Text, TextInput, Button, StyleSheet, View} from "react-native";

const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState('');
    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={'new todo...'}
                onChangeText={changeHandler}
            />
            <Button title={'add todo'} color={'coral'} onPress={()=>submitHandler(text)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: "#ddd"
    }
})

export default AddTodo;