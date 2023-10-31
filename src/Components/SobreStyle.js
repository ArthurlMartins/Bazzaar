import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const sobreStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: "center",
        flex: 8,
     },
     cartaoFoto: {
        justifyContent: "flex-end",
        alignItems: "center",
     }, 
     textStyle: {
        color: '#303030',
        fontSize: 20,
        textAlign: "center",
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
    imgStyle: {
        maxWidth: wp('75%'),
        maxHeight: hp('40%'),
    },
    imgContainer: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default sobreStyle