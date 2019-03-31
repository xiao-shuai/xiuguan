import React,{Component} from 'react'
import {Home,Me,HomeDetail} from '../component/index'
import { 
     createBottomTabNavigator,
     createAppContainer,
     createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sty} from './styles'

const BottomTab=createBottomTabNavigator(
    {
      home:Home,
    //   manage:Manage,
    //   remote:Remote,
      me:Me
    },
    {
     initialRouteName: 'home',
     defaultNavigationOptions:({ navigation })=>({
         tabBarIcon:({focused, horizontal, tintColor})=>{
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'home') {
                iconName ='ios-home';
              } else if (routeName === 'manage') {
                iconName = 'ios-bookmarks';
              }else if(routeName==='remote'){
               iconName='ios-contacts'
              }else{
                  iconName='ios-person'
              }
              return <Ionicons name={iconName} size={horizontal ? 20 : 25} 
          color={focused?sty.themetitle:sty.themeColor} />;
         }
     }),
     tabBarOptions: {
        activeTintColor:sty.themetitle,
        inactiveTintColor:sty.themeColor,
      },
    }
)
const AllStack=createStackNavigator({
     Btm:{
        screen:BottomTab,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
     },
     HomeDetail:{
       screen:HomeDetail,
       navigationOptions:()=>({
        // header:null,
        // headerBackTitle:null,
    })
     }
    
})

export default createAppContainer(AllStack)