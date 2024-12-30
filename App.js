import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';

import Botao from './src/componentes/Botao';
import Display from './src/componentes/Display';

export default class App extends Component {

  state= {
    displayValor: '0'
  }

  

  render(){
    return (
      <View style={styles.container}>
        <Display valor={this.state.displayValor}/>
        <View style={styles.botoes}>
          <Botao texto='c'/>
          <Botao texto='<'/>
          <Botao texto='%'/>
          <Botao texto='÷'/>
          <Botao texto='7' cor='#000'/>
          <Botao texto='8' cor='#000'/>
          <Botao texto='9' cor='#000'/>
          <Botao texto='x'/>
          <Botao texto='4' cor='#000'/>
          <Botao texto='5' cor='#000'/>
          <Botao texto='6' cor='#000'/>
          <Botao texto='-'/>
          <Botao texto='1' cor='#000'/>
          <Botao texto='2' cor='#000'/>
          <Botao texto='3' cor='#000'/>
          <Botao texto='+'/>
          <Botao texto='?'/>
          <Botao texto='0' cor='#000'/>
          <Botao texto=',' cor='#000'/>
          <Botao texto='=' corFundo='#fe8715' cor='#FFF'/> 
        </View>
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6f6',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'center',
    padding:10
  },
  numBotoes: {
    color: '#000'
  }
});
