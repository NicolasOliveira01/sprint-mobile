import { View, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { encode } from 'base-64';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function AccessAccount() {
  
    const navigation = useNavigation();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleLogin = async () => {
      setLoginError(false);

      try {
        const credentials = encode('username:1234');

        const response = await axios.post(
          'http://10.0.2.2:8080/auth/login',
          {
            username: username,
            password: password
          },
          {
            headers: {
              'Authorization': `Basic ${credentials}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.status === 200) {
          navigation.replace('Account');  // só navega aqui, no sucesso
        } else {
          setLoginError(true);
        }
      } catch (_) {
        setLoginError(true);
        //console.error('Erro no login:', error);
        if (axios.isAxiosError(error)) {
          // Silencie o erro silenciosamente (não mostre nada)
        }
      }
    };
  
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Acesse sua Conta!</Text>

        <View style={styles.yellowLine}/>

        <TextInput
            placeholder="Digite seu Usuário:"
            placeholderTextColor="#fff"
            style={[styles.input, loginError && styles.errorInput]}
            onChangeText={setUsername}
            value={username}
            onFocus={() => setLoginError(false)}
        />

        <TextInput
            placeholder="Digite sua Senha:"
            placeholderTextColor="#fff"
            style={[styles.input, loginError && styles.errorInput]}
            secureTextEntry
            keyboardType="numeric"
            onChangeText={setPassword}
            value={password}
            onFocus={() => setLoginError(false)}
        />

        {loginError && <Text style={styles.errorText}>Usuário ou senha incorretos</Text>}

        <TouchableOpacity
          style={styles.button}
          //onPress={() => navigation.replace('Account')} 
          /* NÃO ESQUECER DE MUDAR ISSO*/
          onPress={handleLogin} // só chama a função, não navega direto
        >     
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.replace('CreateAccount')}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

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
    height: 10,                  
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
  errorInput: {
    borderColor: '#FF3B3B',
  },
  errorText: {
    color: '#FF3B3B',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FCC000',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.18,
    marginTop: height * 0.03,
    borderRadius: 50,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#FCC000',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.18,
    marginTop: height * 0.05,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
});