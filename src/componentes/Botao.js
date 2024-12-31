import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

export default props => {
    const coresDinamicas = {
        backgroundColor: props.corFundo || "#fefffe",
        color: props.cor || '#ff8715'
    };

    return (
        <TouchableOpacity onPress={props.onClick}>
            <Text style={[styles.botao, coresDinamicas]}>
                {props.texto}
            </Text>
        </TouchableOpacity>
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