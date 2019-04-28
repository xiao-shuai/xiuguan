import React,{Component} from 'react'
import {
  Home,
  Me,
  HomeDetail,
  Message,
  Info,
  ShouZhi,
  QuShi,
  Baoxiu,
} from '../component/index'
import { 
     createBottomTabNavigator,
     createAppContainer,
     createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {met} from './styles'

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
          color={focused?met.themetitle:met.themeColor} />;
         }
     }),
     tabBarOptions: {
        activeTintColor:met.themetitle,
        inactiveTintColor:met.themeColor,
      },
    }
)
const AllStack=createStackNavigator({
    //  Btm:{
    //     screen:BottomTab,
    //     navigationOptions:()=>({
    //         header:null,
    //         headerBackTitle:null,
    //     })
    //  },
    Home:{
      screen:Home,
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
     },
     Message:{
      screen:Message,
      navigationOptions:()=>({
       // header:null,
       // headerBackTitle:null,
       title:'消息'
   })
    },
    Me:{
      screen:Me,
      navigationOptions:()=>({
       // header:null,
       // headerBackTitle:null,
       title:'我的'
   })
    },
    Baoxiu:{
      screen:Baoxiu,
      navigationOptions:()=>({
       // header:null,
       // headerBackTitle:null,
       title:'保修统计'
   })
    },
    QuShi:{
      screen:QuShi,
      navigationOptions:()=>({
       // header:null,
       // headerBackTitle:null,
       title:'趋势统计'
   })
    },
    Info:{
      screen:Info,
      navigationOptions:()=>({
       // header:null,
       // headerBackTitle:null,
       title:'信息统计'
   })
    },
    ShouZhi:{
      screen:ShouZhi,
      navigationOptions:()=>({
       // header:null,
       // headerBackTitle:null,
       title:'收支统计'
   })
    },
    
})

export default createAppContainer(AllStack)