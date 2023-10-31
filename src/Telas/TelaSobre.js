import { Button, View, Text, ScrollView, FlatList, Image } from 'react-native';
import headStyle from '../Components/HeadStyle';
import bodyStyle from '../Components/MainStyle';
import sobreStyle from '../Components/SobreStyle';
import { Header } from '@rneui/base';

export default function SobreScreen() {
    return(
      <View style={{flex: 10, backgroundColor: '#FFF'}}>
                <View style={sobreStyle.container}>

                    <Header
                        centerComponent={{ text: 'Bazzaar', style: headStyle.textLogo }} 
                        containerStyle={headStyle.container} 
                    />
                    
                    <ScrollView>
                        <View style={sobreStyle.bemVindoContainer}>
                            <Text style={sobreStyle.bemVindoTitulo}>Sobre Nós</Text>
                            <Text style={sobreStyle.bemVindo}>Bem-vindo ao Bazzaar, onde a moda se transforma em uma expressão de individualidade. Nossa jornada começou com a paixão por vestir as pessoas com confiança e estilo. Na Bazzaar, não vendemos apenas roupas, vendemos a sensação de se destacar, a confiança que a moda certa pode proporcionar e a autenticidade que cada um de nós busca.</Text>
                        </View>
                        <View style={sobreStyle.imgContainer}>
                            <Image source={require('../Images/arianaFoto.jpg')} style={sobreStyle.imgStyle} />
                        </View>
                    
                    </ScrollView>
                
            </View>
        </View>
    )
  }