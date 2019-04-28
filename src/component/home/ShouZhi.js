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
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
@inject(["homeStore"])
@observer // 监听当前组件
class ShouZhi extends  Component{
    constructor(props){
        super(props)
        this.state={
       
        }
        this.one1={
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }

    }

  render(){
      console.log('666---!',this.props.homeStore.text)
      return(
          <SafeAreaView style={{flex:1}}>
          <ScrollableTabView>
              <ScrollView tabLabel="收入统计">
               <Echarts option={this.one1} height={300}/>
          </ScrollView>
              <ScrollView tabLabel="支出统计">

              </ScrollView>
              <ScrollView tabLabel="对比分析">

              </ScrollView>
          </ScrollableTabView>
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
export default ShouZhi