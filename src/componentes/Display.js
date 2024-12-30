import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValor} numberOfLines={1}>
                {props.valor}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex:1,
        paddingRight: 20,
        justifyContent: 'flex-end',
        backgroundColor: '#f7f6f6',
        alignItems:'flex-end'
    },
    displayValor: {
        fontSize: 80,
        color: '#000000'
    }
})