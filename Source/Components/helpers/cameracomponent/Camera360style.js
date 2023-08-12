import {StyleSheet} from "react-native"
import { horizontalScale } from "../../../assets/Dimension"

export default camera360style = StyleSheet.create({
    cameramain:{
        flexDirection:"row",
        alignItems:"center",
    },
    textholder:{
        marginLeft:horizontalScale(10)
    }
})