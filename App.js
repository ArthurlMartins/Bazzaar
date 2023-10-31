import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bodyStyle from './src/Components/MainStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Component } from 'react';

//telas
import HomeScreen from './src/Telas/TelaInicio';
import CartaoScreen from './src/Telas/TelaCartao';
import SobreScreen from './src/Telas/TelaSobre';
import CategoriasScreen from './src/Telas/TelaCategoria';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Categorias') {
                iconName = focused ? 'reorder-four-sharp' : 'reorder-four-outline';
  
              } else if (route.name === 'Sobre') {
                iconName = focused ? 'earth' : 'earth-outline';
  
              } else if (route.name === 'Cartões') {
                iconName = focused ? 'card' : 'card-sharp';
              }
              
  
              // You can return any component that you like here!
              return <Icon style={bodyStyle.icone} name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: '#DBA240',
            tabBarInactiveTintColor: '#EAEBE9', 
            headerShown: false,
            tabBarStyle: bodyStyle.tabStyle, 
            tabBarLabelPosition: 'below-icon',  
            tabBarLabelStyle: bodyStyle.tabText,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen}  />
          <Tab.Screen name="Categorias" component={CategoriasScreen}/>
          <Tab.Screen name="Sobre" component={SobreScreen} />
          <Tab.Screen name="Cartões" component={CartaoScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
  