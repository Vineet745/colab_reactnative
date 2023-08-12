import {StyleSheet} from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension'

export default Addhindrancestyle = StyleSheet.create({
    Addhindrancemain:{
        paddingVertical:verticalScale(5),
        paddingHorizontal:horizontalScale(15)
    },
    dateselector:{
        backgroundColor:"white",
        borderRadius:moderateScale(10),
        marginTop:verticalScale(10),
        elevation:4
    },
    maintextholder:{
        paddingTop:verticalScale(5),
        paddingHorizontal:horizontalScale(15),

    },
    maintext:{
        fontFamily:"Geologica-Bold",
        fontSize:moderateScale(15),
        color:"black"
    },
    fromdate:{
        backgroundColor:"#f6f8fb",
        paddingHorizontal:horizontalScale(15),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:verticalScale(10),
        borderRadius:moderateScale(5)
    },
    dateholder:{
        padding:moderateScale(10)
    },
    Daysholder:{
        backgroundColor:"white",
        paddingHorizontal:horizontalScale(15),
        paddingVertical:verticalScale(15),
        marginTop:verticalScale(12),
        borderRadius:moderateScale(10),
        flexDirection:"row",
        alignItems:"center",
        elevation:2
    }   ,
    cameraholder:{
        padding:verticalScale(10),
        backgroundColor:"white",
        marginTop:verticalScale(12),
        borderRadius:moderateScale(10),
    },
    buttonstyle:{
        backgroundColor:"#ffba4d",
        borderRadius:moderateScale(20),
        alignItems:"center",
        justifyContent:"center",
        padding:moderateScale(12),
        marginVertical:verticalScale(10),
    },
})

