// Home.js
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { encode } from 'base-64';
import React, { useState } from 'react';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default function Account() {
  const navigation = useNavigation();

  const [clientName, setClientName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    setLoading(true);

    try {

      //const start = Date.now();

      const credentials = encode('username:1234');

      const response = await axios.post(
        "http://10.0.2.2:8080/api/v1/users",
        {
          clientName,
          username,
          password
        },
        {
          headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json'
          }
        }
      );

      //console.log('Tempo da requisição:', Date.now() - start, 'ms');

      if (response.status === 200 || response.status === 201) {
        console.log('Cadastro feito com sucesso:', response.data);
        navigation.replace('AccessAccount');
      } /*else {
        console.log('Status inesperado:', response.status);
      }*/

    } catch (_) {
      //console.error('Erro ao cadastrar:');
      if (axios.isAxiosError(error)) {
        // Silencie o erro silenciosamente (não mostre nada)
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRIAR CONTA</Text>

      <View style={styles.yellowLine} />

      <TextInput
        placeholder="Digite seu nome:"
        placeholderTextColor="#fff"
        style={styles.input}
        value={clientName}
        onChangeText={setClientName}
      />

      <TextInput
        placeholder="Digite seu username:"
        placeholderTextColor="#fff"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Digite sua senha:"
        placeholderTextColor="#fff"
        style={styles.input}
        secureTextEntry
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCadastro}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.replace('AccessAccount')}
      >
        <Text style={styles.buttonText}>Voltar a tela inicial</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', 
  },
  title: {
    color: '#fff',
    fontSize: height * 0.045,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  yellowLine: {
    width: width,
    height: 4,                  
    backgroundColor: '#FCC000',
    marginTop: height * 0.05,
    marginBottom: height * 0.05,          
  },
  input: {
    color: '#fff',
    width: width * 0.5,
    height: height * 0.055,
    borderColor: '#FCC000',
    borderWidth: width * 0.005,
    borderRadius: 20,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.025,
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
  },
  button: {
    backgroundColor: '#FCC000',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.18,
    marginTop: height * 0.08,
    borderRadius: 50,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#FCC000',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.12,
    marginTop: height * 0.08,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
