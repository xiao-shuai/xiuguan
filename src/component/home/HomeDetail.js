import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image
    ,ScrollView,StyleSheet,ActivityIndicator} from 'react-native'

import {observable} from 'mobx'
import { SafeAreaView } from 'react-navigation';
import { Divider } from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import {met} from '../../config/styles'

class HomeDetail  extends Component{
   
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
       <SafeAreaView>
          <Text>HomeDetail</Text>
      </SafeAreaView>
        )
    }
    
}
export default HomeDetail