import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ( {focused, title, icon}: any) => {
    if(focused){
    
    return(
           <ImageBackground source={images.highlight} className='flex-1 flex-row w-full justify-center min-w-[112px] min-h-16 mt-5 items-center rounded-full overflow-hidden'
            >
                <Image source={icon} className='size-5' tintColor="#151312" />

                <Text className='text-secondary text-base font-semibold ml-2' >{title}</Text>

            </ImageBackground>
    )}
    return (
       <View className='size-full mt-4 size- justify-center items-center rounded-full'>
          <Image source={icon} className='size-5' tintColor="#A8B5DB" />
       </View>

    )

}

const _layout = () => {
  return (
 <Tabs
 screenOptions={{
    tabBarShowLabel: false,
    tabBarItemStyle: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: "center", 
    },
    tabBarStyle: {
        backgroundColor: "#0f0D23",
        marginHorizontal: 20,
        marginBottom: 36,
      height: 52,
      borderRadius: 50,
      position: "absolute",
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "#0f0d23"
    }
 }}
 >
    <Tabs.Screen
    name='index'
    options={{headerShown: false,
        title:"Home",
        tabBarIcon: ({focused}) => (
         <TabIcon 
         focused = {focused} 
         icon = {icons.home}
          title = "Home"
            
            
          />

        )
    }}
    
    />

        <Tabs.Screen
    name='search'
    options={{headerShown: false,
        title:"Search",
          tabBarIcon: ({focused}) => (
         <TabIcon 
         focused = {focused} 
         icon = {icons.search}
          title = "Search" />

        )
        
    }}
    
    />

        <Tabs.Screen
    name='saved'
    options={{headerShown: false,
        title:"Saved",
          tabBarIcon: ({focused}) => (
         <TabIcon
          focused = {focused}
           icon = {icons.save} 
           title = "Saved"/>

        )
    }}
    
    />

        <Tabs.Screen
    name='profile'
    options={{headerShown: false,
        title:"Profile",
          tabBarIcon: ({focused}) => (
         <TabIcon
          focused = {focused}
           icon = {icons.person}
            title = "Profile"/>

        )
    }}
    
    />
 </Tabs>
  )
}

export default _layout