import React from "react";
import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";

export default props => {
    const coresDinamicas = {
        backgroundColor: props.corFundo || "#fefffe",
        color: props.cor || '#ff8715'
    };

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={[styles.botao, coresDinamicas]}>
                {props.texto}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 36,
        height: Dimensions.get("window").width / 5,
        width: Dimensions.get("window").width / 5,
        padding: 20,
        textAlign: "center",
        backgroundColor: "#fefffe",
        borderRadius: 25,
        margin: 5
    }
})