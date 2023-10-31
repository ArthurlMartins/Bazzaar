import { Button, View, Text, ScrollView, FlatList, Image } from 'react-native';
import headStyle from '../Components/HeadStyle';
import bodyStyle from '../Components/MainStyle';
import cartaoStyle from '../Components/CartaoStyle';
import { Header } from '@rneui/base';

export default function CartaoScreen() {
    return(

        <View style={{flex: 10, backgroundColor: '#FFF'}}>

            <Header
                centerComponent={{ text: 'Bazzaar', style: headStyle.textLogo }} 
                containerStyle={headStyle.container} 
            />

            <View style={cartaoStyle.container}>
                <View>
                    <Text style={cartaoStyle.textStyle}>Cartões aceitos:</Text>
                    <Image source={require('../Images/formasPagamento.png')} />
                </View>
            </View>
            
        </View>
      
    )
  }