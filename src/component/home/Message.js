import React,{Component} from 'react'
import {
    View,Text,
    TouchableOpacity,
    Image
    ,ScrollView,StyleSheet,
    ActivityIndicator} from 'react-native'

import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import { Divider } from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import {met} from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
@inject(["homeStore"])
@observer // 监听当前组件
class Message extends  Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

  render(){
      console.log('666---!',this.props.homeStore.text)
      return(
          <SafeAreaView style={{flex:1}}>
          <ScrollView>
              
          </ScrollView>

          </SafeAreaView>
      )
  }

}
const styles=StyleSheet.create({
    linearGradient: {
        // flex: 1,
        height:200,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})
export default Message