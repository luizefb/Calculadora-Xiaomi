import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/componentes/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <Botao texto='c'/>
        <Botao texto='<'/>
        <Botao texto='%'/>
        <Botao texto='÷'/>
        <Botao texto='7'/>
        <Botao texto='8'/>
        <Botao texto='9'/>
        <Botao texto='x'/>
        <Botao texto='4'/>
        <Botao texto='5'/>
        <Botao texto='6'/>
        <Botao texto='-'/>
        <Botao texto='1'/>
        <Botao texto='2'/>
        <Botao texto='3'/>
        <Botao texto='+'/>
        <Botao texto='?'/>
        <Botao texto='0'/>
        <Botao texto=','/>
        <Botao texto='='/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botoes: {
    flexDirection: 'row',

  }
});
