import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'coral',
    },
    title:{
        marginTop: 70,
        color: 'white',
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default Header;