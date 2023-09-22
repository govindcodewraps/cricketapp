import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, Text, Dimensions, TouchableOpacity, Image, SafeAreaView, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const DEVICEWIDTH = Dimensions.get('window').width;
const DEVICEHEIGHT = Dimensions.get('window').height;

export default function MoreMnu({navigation, route}){

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
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView>
                {/* Top app bar */}
                <View style={{flexDirection: 'row', height: DEVICEHEIGHT * 0.08, width: DEVICEWIDTH,
                            backgroundColor: "#2574EB", alignItems: 'center', marginTop: 34}}>
                <View style={{justifyContent:'center', alignItems: 'center', flexDirection: "row"}}>
                    <AntDesign name="arrowleft" size={35} color="#FFFFFF" onPress={()=> navigation.goBack()} />
                    <Text style={{color: "#FFFFFF", marginStart: 10, fontSize: 20,
                    fontWeight: 'bold'}}>{route.params.title}</Text>
                </View>
                </View>
                {/* Body */}
                <View style={{height: DEVICEHEIGHT * 0.921, width: DEVICEWIDTH, backgroundColor: "#000000",}}>


            
                </View>

            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      height: DEVICEHEIGHT,
      width: DEVICEWIDTH,
      flexDirection: 'column',
    },
});