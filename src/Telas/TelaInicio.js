import * as React from 'react';
import { Button, View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import headStyle from '../Components/HeadStyle';
import bodyStyle from '../Components/MainStyle';
import Produto from '../Components/Produto';
import { Header } from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';
import { itemStyle, principalStyle} from '../Components/itemStyle';

export default function HomeScreen({ route, navigation }) {
  

    const {name, price, tecido, desc, tipo, path} = route?.params || {}

    return (
      <View style={{flex: 10, backgroundColor: '#FFF'}}>
        
        {/* <View style={headStyle.container}>
          <Text style={headStyle.textLogo}>Bazzaar</Text>
        </View> */}
  
        <Header
          centerComponent={{ text: 'Bazzaar', style: headStyle.textLogo }} 
          containerStyle={headStyle.container} 
        />
        {name
        ? 
        <ScrollView>
        <View style={itemStyle.container}>
          <View>
            <Image style={itemStyle.imgContainer} source={path} />
            <View style={itemStyle.titleContainer}>
              <Text style={itemStyle.textImg}>{price}$</Text>
              <Text style={itemStyle.textImg}>{name}</Text>
              <TouchableOpacity style={itemStyle.buttonBuy}>
                    <Text style={itemStyle.textButton}>Comprar</Text>
              </TouchableOpacity>    
            </View>
          </View>

          <View style={itemStyle.descStyle}>
            <Text style={itemStyle.descText}>Tecido: {tecido}</Text>
            <Text style={itemStyle.descText}>{desc}</Text>
            <Text style={itemStyle.descText}>Sexo: {tipo}</Text>
          </View>
        </View>
      </ScrollView>

      
      :


      <ScrollView>
          <View style={itemStyle.container}>
            <View style={principalStyle.container}>
              <Text style={principalStyle.textBemVindo}>Seja Bem-Vindo Ao Bazzar</Text>
            </View>
            <View style={principalStyle.containerDesc}>
              <View style={principalStyle.bemVindoContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Categorias')} style={principalStyle.buttonBuy}>
                    <Text style={principalStyle.textButton}>Comece a Comprar Agora!</Text>
              </TouchableOpacity> 
                <Text style={principalStyle.bemVindo}>Bem-vindo ao nosso aplicativo de moda, onde a sua expressão pessoal ganha vida. Descubra peças incríveis e uma experiência de compra excepcional</Text>
              </View>  
            </View>
          </View>
        </ScrollView>
        }
        

        

        
        
       
      </View>  
    );
  }