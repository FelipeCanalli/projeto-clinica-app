import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import InicialScreen from "../screens/InicialScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import ListarScreen from "../screens/ListarScreen";
import LocalizacaoScreen from "../screens/LocalizacaoScreen";
import {
  BottomTabParamList,
  InicialParamList,
  LoginParamList,
  CadastroParamList,
  ListarParamList,
  LocalizacaoParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Localização"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ban" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Inicial"
        component={InicialNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="hospital" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cadastro"
        component={CadastroNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-plus" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Listar"
        component={ListarNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="address-book" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Localização"
        component={LocalizacaoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-location" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
    </LoginStack.Navigator>
  );
}

const InicialStack = createStackNavigator<InicialParamList>();

function InicialNavigator() {
  return (
    <InicialStack.Navigator>
      <InicialStack.Screen
        name="InicialScreen"
        component={InicialScreen}
        options={{
          headerTitle: "SEG - SEX | 8:00 às 22:00 SÁB | 8:00 às 13:00",
        }}
      />
    </InicialStack.Navigator>
  );
}

const CadastroStack = createStackNavigator<CadastroParamList>();

function CadastroNavigator() {
  return (
    <CadastroStack.Navigator>
      <CadastroStack.Screen
        name="CadastroScreen"
        component={CadastroScreen}
        options={{ headerTitle: "Cadastro de Paciente" }}
      />
    </CadastroStack.Navigator>
  );
}

const ListarStack = createStackNavigator<ListarParamList>();

function ListarNavigator() {
  return (
    <ListarStack.Navigator>
      <ListarStack.Screen
        name="ListarScreen"
        component={ListarScreen}
        options={{ headerTitle: "Pacientes" }}
      />
    </ListarStack.Navigator>
  );
}

const LocalizacaoStack = createStackNavigator<LocalizacaoParamList>();

function LocalizacaoNavigator() {
  return (
    <LocalizacaoStack.Navigator>
      <LocalizacaoStack.Screen
        name="LocalizacaoScreen"
        component={LocalizacaoScreen}
        options={{ headerTitle: "Venha conhecer uma de nossas lojas" }}
      />
    </LocalizacaoStack.Navigator>
  );
}
