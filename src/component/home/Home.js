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
import {sty} from '../../config/styles'

@inject(["homeStore"])
@observer // 监听当前组件
class Home extends  Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

  render(){
      console.log('666---!',this.props.homeStore.text)
      return(
          <SafeAreaView style={{flex:1}}>

          <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('HomeDetail')
          }}>
        <Text>gogogo</Text>
        </TouchableOpacity>

          </SafeAreaView>
      )
  }

}
export default Home