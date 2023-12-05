import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
    const [count, setCount] = useState(3);
    const [todos, setTodos] = useState([
        {text: 'buy some coffee', key: '1'},
        {text: 'create an app', key: '2'},
        {text: 'play on the switch', key: '3'},
    ]);
    const pressHandler = (key) => {
        setTodos(prevState => prevState.filter(item => item.key !== key))
    }
    const submitHandler = (text) => {
        setTodos(prevState => [{text: text, key:count + 1},...prevState]);
        setCount(prevState => ++prevState);
    }
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});
