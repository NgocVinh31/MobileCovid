import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Form1 from "./tintuc"
import Form2 from "./chitiettintuc"
import Form3 from "./huongdan"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

const color1="black"; // màu hienr thị khi được chọn
const color2="gray"; // màu hiển thị không được chọn 
export default function tab() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 10,
                left: 20,
                right: 20,
                backgroundColor: "white",
                borderRadius: 10,
                height: 60,
            }
        }}
        >
        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={style.itemTab}>
                <Icon2 style={{color: focused? color1:color2}} name="bell-o" size={25} color="black" />
                <Text style={[style.itemTab_text, {color: focused? color1:color2}]}>Form1</Text>
                </View>
            )
        }} name="Form1" component={Form1} />

        <Tab.Screen options={{
            tabBarIcon: ({focused})=>(
                <View style={[style.itemTab, style.itemTab2]}>
                <Icon2 style={{color: "white"}} name="qrcode" size={45} color="black" />
                <Text style={[style.itemTab_text, {color: "white"}]}>Form3</Text>
                </View>
            )
        }} name="Form3" component={Form3} />

       
      </Tab.Navigator>
    )
}

const style =StyleSheet.create({
    itemTab: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemTab2: {
        width: 90,
        height: 90,
        borderWidth: 1,
        position: "absolute",
        bottom: 7,
        backgroundColor: "#0deb57",
        borderColor: "#0deb57",
        borderRadius: 50,
    },
    itemTab_text: {
        fontSize: 15,
    }
})