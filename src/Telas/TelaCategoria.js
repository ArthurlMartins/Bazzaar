// import { Button, View, Text, ScrollView, FlatList } from 'react-native';
// import headStyle from '../Components/HeadStyle';
// import bodyStyle from '../Components/MainStyle';
// import { Header } from '@rneui/base';

import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList } from 'react-native';
import headStyle from '../Components/HeadStyle';
import bodyStyle from '../Components/MainStyle';
import Produto from '../Components/Produto';
import { Header } from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import categoriaStyle from '../Components/itemStyle';

export default function CategoriasScreen({ navigation }) {
    const imgsFem = [
        {
          id: '0',
          name: 'Basic Female T-Shirt',
          path: require('../Images/fotoEdited.png'),
          price: 60,
          tecido: 'Lã',
          desc: 'Elegante em sua simplicidade, nossa camiseta básica feminina oferece o equilíbrio perfeito entre conforto e estilo',
          type: 'Feminino'
        },
        {
          id: '1',
          name: 'Flowers Dress',
          path: require('../Images/vestidoRosa2.png'),
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
          path: require('../Images/basicaMasc.png'),
          price: 60,
          tecido: 'Lã',
          desc: 'Fabricada com tecido de alta qualidade, esta camiseta é uma opção versátil para todas as ocasiões. Seu corte simples.',
          type: 'Masculino'
        },
        {
          id: '1',
          name: 'Bucket Hat',
          path: require('../Images/bucketRaw2.png'),
          price: 30,
          tecido: 'Lã',
          desc: 'Explore o estilo casual e a proteção sob o sol com o nosso chapéu bucket. Com sua aba larga e design descontraído.',
          type: 'Masculino'
        },
      ]; 

        mudarTela = (name, price, tecido, desc, tipo, path) => {
            navigation.navigate('Home', {
                name: name,
                price: price,
                tecido: tecido,
                desc: desc,
                tipo: tipo,
                path: path,
            })
        }
      
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
                    mudarTela={mudarTela}
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
                      mudarTela={mudarTela}
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