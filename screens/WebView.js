import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';


const DEVICEWIDTH = Dimensions.get('window').width;
const DEVICEHEIGHT = Dimensions.get('window').height;

export default class WebViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          parameter: {
            Title: this.props.route.params.title, // access with this.
            Url: this.props.route.params.sourceUrl, //access with this.
            // name:'Raushan',
            //   phone:9931428888
          },
          textMessage: ''
        };
      }

    render(){
        const { navigation } = this.props;
    return (
        <View style={{flex: 1}}>
                {/* Top app bar */}
                <View style={{flexDirection: 'row', height: DEVICEHEIGHT * 0.08, width: DEVICEWIDTH,
                            backgroundColor: "#2574EB", alignItems: 'center', marginTop: 34}}>
                <View style={{justifyContent:'center', alignItems: 'center', flexDirection: "row"}}>
                    <AntDesign name="arrowleft" size={35} color="#FFFFFF"
                                onPress={()=> this.props.navigation.goBack()} />
                    <Text style={{color: "#FFFFFF", marginStart: 10, fontSize: 20,
                                fontWeight: 'bold'}}>{this.state.parameter.Title}</Text>
                </View>
                </View>
                {/* Body */}
                    <WebView
                        originWhitelist={['*']}
                        style={{flex: 1}}
                        source={{ uri: this.state.parameter.Url }}
                    />

        </View>
    );
    }
}