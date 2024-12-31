import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';

import Botao from './src/componentes/Botao';
import Display from './src/componentes/Display';

const estadoInicial = {
  displayValor: '0',
  limparDisplay: false,
  operation: null,
  valores: [0, 0],
  current: 0,
  
}

export default class App extends Component {

  state={ ...estadoInicial }

  addDigit = n => {
    if (n === ',' && this.state.displayValor.includes(',')) {
      return
    }

    const limparDisplay = this.state.displayValor === '0'
      || this.state.limparDisplay
    const currentValor = limparDisplay ? '' : this.state.displayValor
    const displayValor = currentValor + n
    this.setState({ displayValor, limparDisplay: false })

    if (n !== '.') {
      const novoValor = parseFloat(displayValor)
      const valores = [...this.state.valores]
      valores[this.state.current] = novoValor
      this.setState({ valores })
    }
  }

  limparMemoria = () => {
    this.setState({ ...estadoInicial })
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, limparDisplay: true })
    } else {
      const igual = operation === '='
      const valores = [...this.state.valores]
      try {
        valores[0] = eval(`${valores[0]} ${this.state.operation} ${valores[1]}`)
      } catch (e) {
        valores[0] = this.state.valores[0]
      }

      valores[1] = 0
      this.setState({
        displayValor: valores[0],
        operation: igual ? null : operation,
        current: igual ? 0 : 1,
        limparDisplay: !igual,
        valores,
      })
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Display valor={this.state.displayValor}/>
        <View style={styles.botoes}>
          <Botao texto='ac' onClick={this.limparMemoria}/>
          <Botao texto='<'/>
          <Botao texto='%' onClick={() => this.setOperation('%')}/>
          <Botao texto='÷' onClick={() => this.setOperation('/')}/>
          <Botao texto='7' cor='#000' onClick={() => this.addDigit(7)}/>
          <Botao texto='8' cor='#000' onClick={() => this.addDigit(8)}/>
          <Botao texto='9' cor='#000' onClick={() => this.addDigit(9)}/>
          <Botao texto='x' onClick={() => this.setOperation('*')}/>
          <Botao texto='4' cor='#000' onClick={() => this.addDigit(4)}/>
          <Botao texto='5' cor='#000' onClick={() => this.addDigit(5)}/>
          <Botao texto='6' cor='#000' onClick={() => this.addDigit(6)}/>
          <Botao texto='-' onClick={() => this.setOperation('-')}/>
          <Botao texto='1' cor='#000' onClick={() => this.addDigit(1)}/>
          <Botao texto='2' cor='#000' onClick={() => this.addDigit(2)}/>
          <Botao texto='3' cor='#000' onClick={() => this.addDigit(3)}/>
          <Botao texto='+' onClick={() => this.setOperation('+')}/>
          <Botao texto='?'/>
          <Botao texto='0' cor='#000' onClick={() => this.addDigit(0)}/>
          <Botao texto=',' cor='#000' onClick={() => this.addDigit(',')}/>
          <Botao texto='=' corFundo='#fe8715' cor='#FFF' onClick={() => this.setOperation('=')}/> 
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
