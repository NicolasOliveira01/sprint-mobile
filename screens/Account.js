import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');


export default function Account() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.mainTitle}>Conta Corrente</Text>

      <View style={styles.yellowLine}/>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.future}>Saldo em conta</Text>
        </View>
        <Text style={styles.balance}>R$ 4.098,42</Text>
        <Text style={styles.future}>Lançamentos futuros  - R$ 100,00</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionBox}>
          <Text style={styles.icon}>🟡</Text>
          <Text style={styles.actionText}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBox}>
          <Text style={styles.icon}>💰</Text>
          <Text style={styles.actionText}>Pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBox}>
          <Text style={styles.icon}>🔁</Text>
          <Text style={styles.actionText}>Transferir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card1}>
        <Text style={styles.title}>Últimas transações</Text>

        {/* Transação 1 */}
        <View style={styles.transactionRow}>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Pagamento Fatura</Text>
            <Text style={styles.transactionSubtitle}>cartão XP</Text>
          </View>
          <View style={styles.transactionRight}>
            <Text style={styles.transactionDate}>24 de abril</Text>
            <Text style={styles.transactionValue}>- R$ 6.000,00</Text>
          </View>
        </View>

        {/* Transação 2 */}
        <View style={styles.transactionRow}>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Pix recebido de Camila</Text>
            <Text style={styles.transactionSubtitle}>Santos de Oliveira</Text>
          </View>
          <View style={styles.transactionRight}>
            <Text style={styles.transactionDate}>23 de abril</Text>
            <Text style={[styles.transactionValue, { color: 'green' }]}>+ R$ 2.400,00</Text>
          </View>
        </View>

        {/* Transação 3 */}
        <View style={styles.transactionRow}>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Transferência para</Text>
            <Text style={styles.transactionSubtitle}>Alexandre Magno</Text>
          </View>
          <View style={styles.transactionRight}>
            <Text style={styles.transactionDate}>20 de abril</Text>
            <Text style={styles.transactionValue}>- R$ 1.200,00</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        
        <TouchableOpacity onPress={() => navigation.replace('AccessAccount')}>
          <FontAwesome name="user" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Bets')}>
          <Text style={styles.footerIcon}>📈</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//<TouchableOpacity onPress={() => navigation.replace('AccessAccount')}>
//          <Text style={styles.footerIcon}><FontAwesomeIcon icon="fa-regular fa-user" /></Text>
//        </TouchableOpacity>

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
    //marginTop: height * 0.08,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    backgroundColor: '#191919',
    borderRadius: 10,
    padding: 20,
    marginBottom: height * 0.025,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  arrow: {
    color: '#cccccc',
    fontSize: 18,
  },

  balance: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  future: {
    color: '#cccccc',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  actionBox: {
    backgroundColor: 'transparent',
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#191919',
    marginHorizontal: 2,
  },
  icon: {
    fontSize: 22,
    color: '#FCC000',
    marginBottom: height * 0.01,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
  },
  card1: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: width * 0.95, 
    height: height * 0.24,
    marginTop: width * 0.05, 
    padding: 15,
    // backgroundColor branco você já setou inline, pode tirar daqui
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: height * 0.01,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  transactionDetails: {
    flexShrink: 1,
  },
  transactionTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
  transactionSubtitle: {
    color: '#555',
    fontSize: 12,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionDate: {
    fontSize: 12,
    color: '#777',
  },
  transactionValue: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 40,         // sobe 20 pixels acima dos botões do sistema
    left: 45,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});
