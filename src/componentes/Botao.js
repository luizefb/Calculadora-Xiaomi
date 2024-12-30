import React from "react";
import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.botao}>
                {props.texto}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 50,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        textAlign: "center",
        backgroundColor: "#fefffe",
        borderRadius: 25,
        color: '#ff8715'
    }
})