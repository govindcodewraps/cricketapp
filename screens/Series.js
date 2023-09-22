import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons';

const DEVICEWIDTH = Dimensions.get('window').width;
const DEVICEHEIGHT = Dimensions.get('window').height;

export default function Series({route}){
    const navigation = useNavigation();
    const [Intenal, Set_Intenal] = React.useState(true);
    const [Leagu, Set_League] = React.useState(false);
    const [Domest, Set_Domest] = React.useState(false);
    const [Womenn, Set_Womenn] = React.useState(false);

    function InternationalActive(){
        Set_Intenal(true);
        Set_League(false);
        Set_Domest(false);
        Set_Womenn(false);
    }
    function LeagueActive(){
        Set_Intenal(false);
        Set_League(true);
        Set_Domest(false);
        Set_Womenn(false);
    }
    function DomesticActive(){
        Set_Intenal(false);
        Set_League(false);
        Set_Domest(true);
        Set_Womenn(false);
    }
    function WomenActive(){
        Set_Intenal(false);
        Set_League(false);
        Set_Domest(false);
        Set_Womenn(true);
    }



    return (
        <View>
            <View style={{backgroundColor: "grey", width: DEVICEWIDTH, height: DEVICEWIDTH * 0.13,
                        justifyContent: "center"}}>
                <View style={{height: "70%",flexDirection: "row", marginLeft: 10,}}>
                    <View  style={{width: DEVICEWIDTH * 0.28, alignItems: "center",
                            justifyContent: "center"}}>
                    <TouchableOpacity onPress={()=>InternationalActive()}>
                        <Text style={{color: Intenal ? "#000000" : "#FFFFFF",
                            fontSize: Intenal ? 12 : 10, padding: 3, width: DEVICEWIDTH * 0.27,
                            backgroundColor: Intenal ? "#7B94EC" : "grey",
                            borderRadius: 7}}>
                                INTERNATIONAL</Text>
                    </TouchableOpacity>
                    </View>
                    <View  style={{width: DEVICEWIDTH * 0.2, alignItems: "center",
                            justifyContent: "center"}}>
                    <TouchableOpacity onPress={()=>LeagueActive()}>
                        <Text style={{color: Leagu ? "#000000" : "#FFFFFF",
                            fontSize: Leagu ? 12 : 10, padding: 3,
                            backgroundColor: Leagu ? "#7B94EC" : "grey",
                            borderRadius: 7}}>
                                LEAGUE</Text>
                    </TouchableOpacity>
                    </View>
                    <View  style={{width: DEVICEWIDTH * 0.2, alignItems: "center",
                            justifyContent: "center"}}>
                    <TouchableOpacity onPress={()=>DomesticActive()}>
                        <Text style={{color: Domest ? "#000000" : "#FFFFFF",
                            fontSize: Domest ? 12 : 10, padding: 3,
                            backgroundColor: Domest ? "#7B94EC" : "grey",
                            borderRadius: 7}}>
                                DOMESTIC</Text>
                    </TouchableOpacity>
                    </View>
                    <View  style={{width: DEVICEWIDTH * 0.2, alignItems: "center",
                                justifyContent: "center"}}>
                    <TouchableOpacity onPress={()=>WomenActive()}>
                        <Text style={{color: Womenn ? "#000000" : "#FFFFFF",
                            fontSize: Womenn ? 12 : 10, padding: 3,
                            backgroundColor: Womenn ? "#7B94EC" : "grey",
                            borderRadius: 7}}>
                                WOMEN</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        <View style={{alignItems: "center"}}>
            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "India Tour of West India 2023"})}>
                <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                    <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                        <Text style={{fontSize: 17, color: "#FFFFFF"}}>India Tour of West India 2023</Text>
                        <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                    </View>
                    <Entypo name="chevron-right" size={33} color="#FFFFFF" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "Sri Lanka Tour of India 2023"})}>
            <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                    <Text style={{fontSize: 17, color: "#FFFFFF"}}>Sri Lanka Tour of India 2023</Text>
                    <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                </View>
                <Entypo name="chevron-right" size={33} color="#FFFFFF" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "ICC World Cup 2023"})}>
            <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                    <Text style={{fontSize: 17, color: "#FFFFFF"}}>ICC World Cup 2023</Text>
                    <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                </View>
                <Entypo name="chevron-right" size={33} color="#FFFFFF" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "IPL 2023"})}>
            <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                    <Text style={{fontSize: 17, color: "#FFFFFF"}}>IPL 2023</Text>
                    <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                </View>
                <Entypo name="chevron-right" size={33} color="#FFFFFF" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "WPL 2023"})}>
            <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                    <Text style={{fontSize: 17, color: "#FFFFFF"}}>WPL 2023</Text>
                    <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                </View>
                <Entypo name="chevron-right" size={33} color="#FFFFFF" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "Australia Tour of India 2023"})}>
            <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                    <Text style={{fontSize: 17, color: "#FFFFFF"}}>Australia Tour of India 2023</Text>
                    <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                </View>
                <Entypo name="chevron-right" size={33} color="#FFFFFF" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> 
                    navigation.navigate("MoreMnu", {title: "Criket T20 Events.."})}>
            <View style={{borderColor: "grey", borderWidth: 2, borderRadius: 10,
                        width: DEVICEWIDTH * 0.95, padding: 10, marginTop: 10,
                        flexDirection: "row"}}>
                <View style={{flexDirection: "column", width: DEVICEWIDTH * 0.8}}>
                    <Text style={{fontSize: 17, color: "#FFFFFF"}}>Criket T20 Events..</Text>
                    <Text style={{fontSize: 10, color: "#FFFFFF"}}>26 August 2023 - 21 September 2023</Text>
                </View>
                <Entypo name="chevron-right" size={33} color="#FFFFFF" />
            </View>
            </TouchableOpacity>

        </View>

        </View>
    );
}