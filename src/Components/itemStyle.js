import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export const itemStyle
 = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: "center",
        flex: 8,
     },
     imgContainer: {
      width: wp('100%'),
      height: hp('40%'),
      
     },
     textImg: {
         fontSize: 31,
         fontWeight: "bold",
         color: '#303030',
     },
     titleContainer: {
         backgroundColor: '#D1D1D1',
         alignItems: "center",
         padding: 10,

     },
     descStyle: {
         backgroundColor: '#D1D1D1',
         padding: 20,
         justifyContent: "space-around",
         paddingLeft: 50,

         width: wp('100%'),
         height: hp('40%'),
         
     },
     descText: {
         fontSize: 24,
         color: '#303030'
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
})



export const principalStyle
 = StyleSheet.create({
    container: {
        backgroundColor: '#DBA240',
        width: wp('100%'),
        height: hp('50%'),
        justifyContent: "center",
        alignItems: "center",
      }, 
      textBemVindo: {
        color: '#303030',
        fontSize: 51,
        textAlign: "center"
      },  
      containerDesc: {
        backgroundColor: '#D1D1D1',
        width: wp("100%"),
        height: hp("50%"),

      },   
      bemVindoTitulo: {
        fontSize: 31,
        color: '#303030',
        marginBottom: 30,
        fontWeight: "bold",
        backgroundColor: '#DBA240',
        padding: 10,
        textAlign: "center"
    },  
    bemVindo: {
        fontSize: 21,
        color: '#303030',
     },
    bemVindoContainer: {
        backgroundColor: '#EAEBE9',
        padding: 40,
        

        justifyContent: "center",
        alignItems: "center",
    },   

    buttonBuy: {
        backgroundColor: '#303030', 
        height: 75,
        width: wp('50%'),
        justifyContent:"center",
        alignItems: "center",
        marginBottom: wp('5%')
    },
    textButton: {
       color: '#DBA240',
       fontWeight: "bold",
       fontSize: 22
    }, 
 })


