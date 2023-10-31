import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const produtoStyle = StyleSheet.create({
     bigContainer: {
      marginTop: 75
     },  
     container: {
        backgroundColor: '#EAEBE9',

        width: wp('70%'),
        height: hp('30%'),
        justifyContent: "center",
        alignItems: "center",
        
     },
     priceArea: {
        backgroundColor: '#D1D1D1',
        justifyContent: "center",
        alignItems: "center",

        width: wp('70%'),
        height: 75,
     },
     priceAreaBig: {
        backgroundColor: '#D1D1D1',
        padding: 20,
        justifyContent: "space-around",
        paddingLeft: 50,

        width: wp('70%'),
        height: hp('30%'),
     },
     textTecido: {
         fontSize: 21,
         color: '#303030'
     },
     textDesc: {
         fontSize: 16,
         color: '#303030'
     },
     textPrice: {
        fontSize: 21,
        color: '#303030',
     },
     buttonOpen: {
        backgroundColor: '#303030',
        width: wp('70%'),
        height: 50,
        justifyContent:"center",
        alignItems: "center"
     },
     buttonBuy: {
         backgroundColor: '#303030', 
         height: 50,
         width: wp('30%'),
         justifyContent:"center",
         alignItems: "center"
     },
     textButton: {
        color: '#DBA240',
        fontWeight: "bold",
        fontSize: 21
     }, 
     imgStyle: {
        width: wp('70%'),
        height: hp('30%'),
        justifyContent: 'center',
        alignContent: "center"
     },
     
})

export default produtoStyle