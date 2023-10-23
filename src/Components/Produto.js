import { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import produtoStyle from "./ProdutoStyle";

export default class Produto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            textButton: 'More' 
        }
    
      }

      atualizarOpen = () => {
        if(this.state.open == false) {
            this.setState({open: true, textButton: 'Less'})
        } else {
            this.setState({open: false, textButton: 'More'})
        }
      }

    render() {
        return (
            <View style={produtoStyle.bigContainer}>
                <View style={produtoStyle.container}>
                    <Image style={produtoStyle.imgStyle} source={this.props.path} />
                </View>
                { this.state.open == false ?
                    <View style={produtoStyle.priceArea}>
                        <Text style={produtoStyle.textPrice}>${this.props.price}</Text>
                        <Text style={produtoStyle.textPrice}>{this.props.name}</Text>
                    </View>
                    :
                    <View>
                        <View style={produtoStyle.priceArea}>
                            <Text style={produtoStyle.textPrice}>${this.props.price}</Text>
                            <Text style={produtoStyle.textPrice}>{this.props.name}</Text>
                        </View>
                        <View style={produtoStyle.priceAreaBig}>
                            <Text style={produtoStyle.textTecido}>Tecido: {this.props.tecido}</Text>
                            <Text style={produtoStyle.textDesc}>{this.props.desc}</Text>
                            <Text style={produtoStyle.textTecido}>Tipo: {this.props.tipo}</Text>
                            <TouchableOpacity style={produtoStyle.buttonBuy}>
                                <Text style={produtoStyle.textButton}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                }
                
                <TouchableOpacity onPress={this.atualizarOpen} style={produtoStyle.buttonOpen}>
                    <Text style={produtoStyle.textButton}>{this.state.textButton}</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}