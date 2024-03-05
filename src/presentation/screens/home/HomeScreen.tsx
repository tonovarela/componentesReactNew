import React from 'react';
import { ScrollView, Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../../components/ui/Title';
import { MenuItem } from '../../components/ui/MenuItem';


const animationItems=[
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  }
];
const uiItems=[{
  name: 'Switches',
  icon: 'toggle-outline',
  component: 'SwitchScreen',
},
{
  name: 'Alerts',
  icon: 'alert-circle-outline',
  component: 'AlertScreen',
},
{
  name: 'TextInputs',
  icon: 'document-text-outline',
  component: 'TextInputScreen',
},];

const menuItems = [

  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },

  
  
];

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title  safe text='Opciones de Menu'></Title>          
          
         
          <View style={{height:30}}/>
          {
            animationItems.map((item,index) => {
              return (                
                  <MenuItem key={item.component}  {...item} isFirst={index==0} isLast={index==animationItems.length-1 }/>                     
              )
            })
          }
           <View style={{height:30}}/>
          {
            uiItems.map((item,index) => {
              return (                
                  <MenuItem key={item.component}  {...item} isFirst={index==0} isLast={index==uiItems.length-1 }/>                     
              )
            })
          }
          <View style={{height:30}}/>
          {
            menuItems.map((item,index) => {
              return (                
                  <MenuItem key={item.component}  {...item} isFirst={index==0} isLast={index==menuItems.length-1 }/>                     
              )
            })
          }
        </ScrollView>

      </View>    
    </View>
  )
}