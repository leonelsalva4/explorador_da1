import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { FavoritesProvider } from './src/context/FavoritesContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesList"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Inicio" component={HomeStack} />
          <Tab.Screen name="Favoritos" component={FavoritesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
