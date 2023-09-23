import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons';

import SeriesRepositories from "../repository/Series_Repository";

const DEVICEWIDTH = Dimensions.get('window').width;
const DEVICEHEIGHT = Dimensions.get('window').height;

export default function Series({route}){
    const navigation = useNavigation();
    const [isLoading, Set_isLoading] = React.useState(true);
    const [Intenal, Set_Intenal] = React.useState(true);
    const [Leagu, Set_League] = React.useState(false);
    const [Domest, Set_Domest] = React.useState(false);
    const [Womenn, Set_Womenn] = React.useState(false);

    const [DataFirstM, Set_DataFirstM] = React.useState([]);

    const FetchData=async ()=>{
        let FM;
            FM = await SeriesRepositories.Get_FirstMenu();
            Set_DataFirstM(FM);
        setTimeout(()=> {
            Set_isLoading(false);
            //setRefreshing(false);
        }, 2000);
    }
    React.useEffect(() => {
        FetchData();
    }, []);

    //------------------------
    const MenuList = ({item})=>{
        console.log("Series.js, id : ", item.id);
        console.log("Series.js, link : ", item.link);
        return(
            <View style={{width: DEVICEWIDTH * 0.95,}}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("SeriesM_Page", {title: item.name, sourceUrl: item.id})}>
                    <Text style={{color: "#FFFFFF", fontSize: 16, padding:10}}>{item.name}</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: "grey", height: 2, left: "2%"}}></View>
            </View>
        );
    }


//-----------------------
    return (
        <View>
            {
                isLoading ? (
                    <ActivityIndicator/>
                ):(
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={DataFirstM}
                        keyExtractor={(item, index) => index.toString()}
                        enableEmptySections={true}
                        renderItem={MenuList}
                    />

                )
            }

        </View>
    );
}

//                    onPress={() => navigation.navigate("ShowDetails2", {title: item.name+" 5", sourceUrl: item.link})}>
//onPress={() => navigation.navigate("WebView", {title: item.name, sourceUrl: item.link})}>
