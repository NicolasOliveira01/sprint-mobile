// Home.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Bets() {
  const navigation = useNavigation();

  /* VALOR QUE O USUÁRIO APOSTOU */
  const value = 5555;


  const helpButton = {
    borderRadius: 10,
    marginBottom: 20,
    maxWidth: 250,
  };

  const getStatusInfo = (val) => {
    if (val <= 500) {
      return {
        status: 'verde',
        backgroundColor: '#4CAF50',
        padding: 6,
        fontSize: width * 0.04,
        texto: 'Quer conversar? Estamos aqui',
      };
    }
    if (val <= 1000) {
      return {
        status: 'amarelo',
        backgroundColor: '#FFC107',
        padding: 8,
        fontSize: width * 0.045,
        texto: 'Talvez seja bom conversar com alguém',
      };
    }
    return {
      status: 'vermelho',
      backgroundColor: '#F44336',
      padding: 10,
      fontSize: width * 0.05,
      texto: 'Você não está sozinho. Fale com alguém',
    };
  };

  // Simulação de juros compostos
  const simulateInvestment = (initial, months, monthlyRate) => {
    return (initial * Math.pow(1 + monthlyRate, months)).toFixed(2);
  };

  const investmentData = [
    { label: '1 mês', months: 1 },
    { label: '3 meses', months: 3 },
    { label: '6 meses', months: 6 },
    { label: '12 meses', months: 12 },
  ];

  // Dentro do componente:
  const aggressiveRate = 0.02; // 2% ao mês

  const { backgroundColor, padding, fontSize, texto } = getStatusInfo(value);

  return (
    <View style={styles.container}>

      <Text style={styles.mainTitle}>Tela de investimentos</Text>
      
      <View style={styles.yellowLine}/>

      <View style={[styles.card, { backgroundColor }]}>
        <Text style={styles.cardText}>Valor de apostas esse mês:</Text>
        <Text style={styles.cardText}>R$ {value},00</Text>
      </View>

      <TouchableOpacity style={[ helpButton, { backgroundColor, padding }]} activeOpacity={0.7}>
        <Text style={{ fontSize, textAlign: 'center' }}>{texto}</Text>
      </TouchableOpacity>
      
      <View style={styles.investmentContainer}>
        <Text style={styles.investmentTitle}>Se você tivesse investido:</Text>

        {investmentData.map((item) => {
          const result = simulateInvestment(value, item.months, aggressiveRate);
          return (
            <Text key={item.label} style={styles.investmentText}>
              {item.label}: R$ {result}
            </Text>
          );
        })}

        <TouchableOpacity style={styles.investButton} activeOpacity={0.8}>
          <Text style={styles.investButtonText}>Comece a investir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.replace('Account')}>
          <FontAwesome name="user" size={28} color="#fff" />
        </TouchableOpacity>
      </View>  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FCC000',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.18,
    marginTop: height * 0.08,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: 300,
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mainTitle: {
    color: '#fff',
    fontSize: height * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    //textAlign: 'left', // força o alinhamento à esquerda
  },
  yellowLine: {
    width: width,
    height: 10,                  
    backgroundColor: '#FCC000',
    //marginTop: height * 0.01,
    marginBottom: height * 0.05,          
  },
  label: {
    color: '#cccccc',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 40,         // sobe 20 pixels acima dos botões do sistema
    left: 45,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
    paddingVertical: 15,
    marginTop: 10,
    width: width * 0.8,
    gap: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 10,
  },
  footerIcon: {
    fontSize: 24,
    color: '#fff',
    //marginBottom: 50,
  },
  investmentContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  investmentTitle: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  investmentText: {
    color: '#333',
    fontSize: 16,
    marginVertical: 3,
  },

  investButton: {
    marginTop: 15,
    backgroundColor: '#00C853',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  investButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});