import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, Text, Dimensions, ActivityIndicator, Image, SafeAreaView, StyleSheet, ScrollView, 
            RefreshControl, } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import DR from "../repository/Detail_Repository";

const DEVICEWIDTH = Dimensions.get('window').width;
const DEVICEHEIGHT = Dimensions.get('window').height;

export default function ShowDetails({route}){

    const navigation = useNavigation();

    const [isLoading, set_isLoading] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [DataDetail, Set_DataDetail] = React.useState([]);
    const MonthNm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const FetchData=async ()=>{
        let Top5;
            Top5 = await DR.Get_Detail(route.params.PageID);
            Set_DataDetail(Top5);

            setTimeout(()=> {
                setRefreshing(false);
                set_isLoading(false);
            }, 300);
    }
    React.useEffect(async () => {
        setRefreshing(true);
        FetchData();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        FetchData();
        
    }, []);
    //-------------------------------
    const DisplayList = () => {
            let title = DataDetail.title.rendered, desc = DataDetail.content.rendered;
            title=title.replace(/<\/?[^>]+>/gi, '');
            desc=desc.replace(/<\/?[^>]+>/gi, '');
            //title= title.substring(0, 75);
            //desc= desc.substring(0, 80);
            // year = dt.substring(0, 4);
            // month = dt.substring(6, 7);
            // day = dt.substring(9, 10);
            // time = dt.substring(14, 16);
    console.log("ShowDetail.js, url : ", DataDetail._links["wp:featuredmedia"][0].href);
            return (
                <View style={{flexDirection: "column", marginTop: 10, marginBottom: 30,
                        width: DEVICEWIDTH * 0.95, padding: 10, alignItems: "center"}}>
                    <Image source={{uri: DataDetail._links["wp:featuredmedia"][0].href}} 
                        style={{width: DEVICEWIDTH * 0.92, height: DEVICEWIDTH * 0.5, borderRadius: 8}} />
                    <Text style={{color: "#FFFFFF", fontSize: 18, marginTop: 10,
                            width: DEVICEWIDTH * 0.92}}>{title}</Text>
                    <Text style={{color: "#FFFFFF", fontSize: 14, marginTop: 10,
                        width: DEVICEWIDTH * 0.92}}>{desc}</Text>
                </View>
            );
    }
    //---------------------Main
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
                <View style={{height: DEVICEHEIGHT * 0.921, width: DEVICEWIDTH, backgroundColor: "#000000",
                            alignItems: "center"}}>
                    <ScrollView
                    showsVerticalScrollIndicator={false} 
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    >
                        {
                            isLoading ? (
                                <ActivityIndicator/>
                            ):(
                                <DisplayList/>
                            )
                        }



                    </ScrollView>            
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
    cardview2: {
        backgroundColor: 'grey',
        borderRadius: 10,
        elevation: 10,
    },

});