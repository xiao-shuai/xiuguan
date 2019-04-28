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
import Echarts from 'native-echarts'
@inject(["homeStore"])
@observer // 监听当前组件
class QuShi extends  Component{
    constructor(props){
        super(props)
        this.state={
       
        }

    }

  render(){
      console.log('666---!',this.props.homeStore.text)
      return(
          <SafeAreaView style={{flex:1}}>
          <LinearGradient colors={['#74ebd5','#ACB6E5']} style={{
            width:met.w,height:met.h,alignItems:'center'
          }}>
             <View style={{flexDirection:'row',justifyContent:'space-between',width:met.w*.95,marginTop:15}}>

              <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('Me')
              }}>
           <Ionicons name={'ios-person'} size={met.w*.1} color={'white'} />
              </TouchableOpacity>
              <Text style={{fontSize:met.w*.06,color:'white',fontWeight:'600'}}> 首页</Text>
              <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Message')
              }}>
          <Ionicons name={'ios-notifications-outline'} size={met.w*.1} color='white' />
              </TouchableOpacity>

             </View>
             {/* one  */}
            
          <TouchableOpacity onPress={()=>{
              
          }} style={{width:'90%',marginTop:met.h*.05}}>
           <LinearGradient colors={['#c0c0aa','#1cefff']} 
           style={{
            width:met.w*.4,
           height:met.w*.4,
           alignItems:'center',
           justifyContent:'center',
           borderRadius:met.w*.2,      
           }}
           >
            <Text style={{fontSize:met.w*.05,color:'white'}}>保修统计</Text>
             </LinearGradient>
          </TouchableOpacity>
         
          {/*  two */}
          <TouchableOpacity onPress={()=>{
              
            }} style={{
            width:'90%',marginTop:met.h*.02,
            alignItems:'flex-end'
            }}>
            <LinearGradient 
            colors={['#ff4b1f','#1fddff']}
            style={{
                 width:met.w*.3,
                height:met.w*.3,
alignItems:'center',
justifyContent:'center',
                borderRadius:met.w*.15,      
                }} >
               <View >
               <Text style={{fontSize:met.w*.05,color:'white'}}>收支统计</Text>
               </View>
               </LinearGradient>
            </TouchableOpacity>
            {/*  three*/}
          <TouchableOpacity onPress={()=>{
              
            }} style={{width:'90%',marginTop:met.h*.02,
          alignItems:'flex-start'
            }}>
            <LinearGradient colors={['#ff4b1f','#1fddff']}
            style={{
              width:met.w*.3,
             height:met.w*.3,
             borderRadius:met.w*.15,    
             alignItems:'center',
             justifyContent:'center'  
             }}
            >
              <Text style={{fontSize:met.w*.05,color:'white'}}>信息统计</Text>
               </LinearGradient>
            </TouchableOpacity>
            {/*  */}
          <TouchableOpacity onPress={()=>{
              
            }} style={{width:'90%',marginTop:met.h*.02,
          alignItems:'flex-end'
            }}>
            <LinearGradient colors={['#ff4b1f','#1fddff']} 
            style={{
              width:met.w*.4,
             height:met.w*.4,
             backgroundColor:'white',
             borderRadius:met.w*.2,      
             alignItems:'center',
             justifyContent:'center'
             }}>
               <Text style={{fontSize:met.w*.05,color:'white'}}>趋势分析</Text>
              </LinearGradient>
            </TouchableOpacity>

          </LinearGradient>

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
export default QuShi