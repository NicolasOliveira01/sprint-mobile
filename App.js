import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AccessAccount from './screens/AccessAccount.js'
import Account from './screens/Account.js'
import CreateAccount from './screens/CreateAccount'
import Bets from './screens/Bets.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="AccessAccount" 
          component={AccessAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Account" 
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Bets" 
          component={Bets}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
