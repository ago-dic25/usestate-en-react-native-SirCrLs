import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { estiloTextos } from './misEstilos';
import { useState } from 'react';
import { FlatList, TextInput } from 'react-native-web';

export default function App() {

  const [contador,setContador] = useState(0);
  const [nombre,setNombre] = useState('');
  const [mensaje,setMensaje] = useState('');
  const [listaAl,setListaAl] = useState([]);

  function saludar(){
    if (nombre.trim === ''){
      setMensaje('Escribe tu nombre...');
    }
    else{
      setMensaje(nombre);
    }
  }

  function contar(){
    if(nombre.length === 0){
      setMensaje('🤐');
    } else if (nombre.length < 10){
      setMensaje('👻👻');
    } else if (nombre.length < 20){
      setMensaje('🎃🎃🎃');
    } else{
      setMensaje('😱😱🙀🙀');
    }
  }

  function agregarNombre(){
    setListaAl([...listaAl,nombre]);
    setNombre('');
  }

  return (
    <View style={styles.container}>
      <Text>{nombre}{mensaje}</Text>
      <TextInput placeholder='Escribe tu nombre' value={nombre} onChangeText={setNombre}></TextInput>
      <button title='Mostrar mensaje' onClick={contar}>mensaje</button>
      <button title='limpiar' onClick={()=>setContador(nombre = '')}>limpiar nombre</button>

      <button title='Agregar alumno' onClick={agregarNombre}></button>
      <FlatList 
      data = {listaAl} 
      keyExtractor={(item,index) => index.toString()} 
      renderItem={(item) => <Text style={styles.ListElement}>{item}</Text>}>

      </FlatList>

      <Text>Haz hecho click {contador} veces</Text>
      <button title='aumentar' onClick={()=>setContador(contador + 1)}>Aumentar</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
