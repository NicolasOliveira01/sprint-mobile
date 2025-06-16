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

        <TouchableOpacity onPress={() => navigation.replace('Bets')}>
          <Text style={styles.footerIcon}>📈</Text>
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
  card: {
    width: '90%',
    backgroundColor: '#191919',
    borderRadius: width * 0.03,
    padding: width * 0.05,
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
    paddingLeft: width * 0.05,
  },
  yellowLine: {
    width: width,
    height: height * 0.01,                  
    backgroundColor: '#FCC000',
    marginBottom: height * 0.05,          
  },

  balance: {
    color: '#ffffff',
    fontSize: height * 0.03,
    fontWeight: 'bold',
    marginVertical: width * 0.03,
  },

  future: {
    color: '#cccccc',
    fontSize: height * 0.015,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionBox: {
    backgroundColor: 'transparent',
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: width * 0.01,
    borderColor: '#191919',
    marginHorizontal: width * 0.005,
  },
  icon: {
    fontSize: width * 0.06,
    color: '#FCC000',
    marginBottom: height * 0.01,
  },
  actionText: {
    color: '#fff',
    fontSize: width * 0.035,
  },
  card1: {
    borderRadius: width * 0.035,
    backgroundColor: '#fff',
    width: width * 0.95, 
    height: height * 0.24,
    marginTop: width * 0.05, 
    padding: width * 0.045,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: height * 0.018,
    marginBottom: height * 0.01,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: width * 0.035,
  },
  transactionDetails: {
    flexShrink: 1,
  },
  transactionTitle: {
    fontWeight: '600',
    fontSize: width * 0.035,
  },
  transactionSubtitle: {
    color: '#555',
    fontSize: width * 0.03,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionDate: {
    fontSize: width * 0.03,
    color: '#777',
  },
  transactionValue: {
    fontWeight: 'bold',
    fontSize: width * 0.035,
  },
  footer: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#191919',
    paddingVertical: height * 0.02,
    width: width * 0.8,
    gap: width * 0.05,
    borderTopLeftRadius: width * 0.035,
    borderTopRightRadius: width * 0.035,
    zIndex: 10,
  },
  footerIcon: {
    fontSize: width * 0.06,
    color: '#fff',
  },
});
