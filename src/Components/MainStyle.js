import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';


const bodyStyle = StyleSheet.create({
     container: {
        backgroundColor: '#FFF',
        alignItems: "center", 
        flex: 8,


     },
     textoModa: {
        display: 'flex',
        color: '#303030',
        fontSize: 45,
        marginTop: 75,
        justifyContent: "center",
        backgroundColor: '#DBA240',
        padding: 10,
        alignItems: "center",
        fontWeight: 'bold',
        

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
     tabStyle: {
        height: hp('10%'),
        backgroundColor: '#303030',
        alignItems: "center"
        
     },
     icone: {
        justifyContent: "center",
        alignContent: "center",
     }, 
     tabText: {
        fontSize: 18,
        alignContent: "center",
     },
})

export default bodyStyle