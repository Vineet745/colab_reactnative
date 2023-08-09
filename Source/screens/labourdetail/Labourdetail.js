import { View, Text } from 'react-native'
import React from 'react'
import labourdetailstyle from './labourdetailstyle'

const Labourdetail = () => {
  return (
    <View  style={labourdetailstyle.labourcontainermain}>
        <View style={labourdetailstyle.labourname}>
            <Text style={labourdetailstyle.labournametext}>Dinesh</Text>
        </View>
        <View style={labourdetailstyle.labourdets}>
            <View style={labourdetailstyle.labourdetschild}>
                <Text style={labourdetailstyle.labourdetschildtextone}>In-Time</Text>
                <Text style={labourdetailstyle.labourdetschildtexttwo}>10:00</Text>
            </View>
            <View style={labourdetailstyle.labourdetschild}>
                <Text style={labourdetailstyle.labourdetschildtextone}>Out-Time</Text>
                <Text style={labourdetailstyle.labourdetschildtexttwo}>--:--</Text>
            </View>
            <View style={labourdetailstyle.labourdetschild}>
                <Text style={labourdetailstyle.labourdetschildtextone}>Hours</Text>
                <Text style={labourdetailstyle.labourdetschildtexttwo}>8</Text>
            </View>
            <View style={labourdetailstyle.labourdetschild}>
                <Text style={labourdetailstyle.labourdetschildtextone}>OT Rate</Text>
                <Text style={labourdetailstyle.labourdetschildtexttwo}>1200</Text>
            </View>
        </View>
    </View>
  )
}

export default Labourdetail