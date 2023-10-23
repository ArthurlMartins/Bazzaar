import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import headStyle from './src/Components/HeadStyle'
import bodyStyle from './src/Components/MainStyle';
import Produto from './src/Components/Produto';
import { Header } from '@rneui/base';




function HomeScreen({ navigation }) {
  
  const imgsFem = [
  {
    id: '0',
    name: 'Basic Female T-Shirt',
    path: require('./src/Images/fotoEdited.png'),
    price: 60,
    tecido: 'Lã',
    desc: 'Elegante em sua simplicidade, nossa camiseta básica feminina oferece o equilíbrio perfeito entre conforto e estilo',
    type: 'Feminino'
  },
  {
    id: '1',
    name: 'Flowers Dress',
    path: require('./src/Images/vestidoRosa2.png'),
    price: 90,
    tecido: 'Poliester',
    desc: 'Feito com tecido de alta qualidade, este vestido oferece conforto inigualável e um design minimalista que é atemporal.',
    type: 'Feminino'
  },
]; 

const imgsMas = [
  {
    id: '0',
    name: 'Basic Male T-Shirt',
    path: require('./src/Images/basicaMasc.png'),
    price: 60,
    tecido: 'Lã',
    desc: 'Fabricada com tecido de alta qualidade, esta camiseta é uma opção versátil para todas as ocasiões. Seu corte simples.',
    type: 'Masculino'
  },
  {
    id: '1',
    name: 'Bucket Hat',
    path: require('./src/Images/bucketRaw2.png'),
    price: 30,
    tecido: 'Lã',
    desc: 'Explore o estilo casual e a proteção sob o sol com o nosso chapéu bucket. Com sua aba larga e design descontraído.',
    type: 'Masculino'
  },
]; 

  return (
    <View style={{flex: 10, backgroundColor: '#FFF'}}>
      
      {/* <View style={headStyle.container}>
        <Text style={headStyle.textLogo}>Bazzaar</Text>
      </View> */}

      <Header
        centerComponent={{ text: 'Bazzaar', style: headStyle.textLogo }} 
        containerStyle={headStyle.container} 
      />

      <ScrollView>
        
        <View style={bodyStyle.bemVindoContainer}>
          <Text style={bodyStyle.bemVindoTitulo}>Seja bem vindo ao Bazzar</Text>
          <Text style={bodyStyle.bemVindo}>Bem-vindo ao nosso aplicativo de moda, onde a sua expressão pessoal ganha vida. Descubra peças incríveis e uma experiência de compra excepcional</Text>
        </View>  
        <View style={bodyStyle.container}> 
        
        <Text style={bodyStyle.textoModa}>Moda Feminina</Text>
          <FlatList 
            scrollEnabled={false}
            data={imgsFem}
            renderItem={({item}) => 
            <>
              <Produto
              price={item.price}
              name={item.name}
              path={item.path}
              tecido={item.tecido}
              desc={item.desc}
              tipo={item.type}
              />
              
            </>
            }
          />
          </View>
            <View style={bodyStyle.container}>
            <Text style={bodyStyle.textoModa}>Moda Masculina</Text>
            <FlatList 
              scrollEnabled={false}
              data={imgsMas}
              renderItem={({item}) => 
              <>
                <Produto
                price={item.price}
                name={item.name}
                path={item.path}
                tecido={item.tecido}
                desc={item.desc}
                tipo={item.type}
                />
                
              </>
              }
            />
          </View>
          <View style={[bodyStyle.bemVindoContainer, {marginTop: 75}]}>
            <Text style={bodyStyle.bemVindoTitulo}>Local</Text>
            <Text style={bodyStyle.bemVindo}>Rua Eusébio 10</Text>
            <Text style={bodyStyle.bemVindo}>Centro, Cidade das Águas</Text>
            <Text style={bodyStyle.bemVindo}></Text>
            <Text style={[bodyStyle.bemVindo, {textAlign: 'center'}]}>Centro, Aberta de segunda ás sexta das 10:00 ás 21:00</Text>
          </View>  
          
            
        
      </ScrollView>
        
    </View>  
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;