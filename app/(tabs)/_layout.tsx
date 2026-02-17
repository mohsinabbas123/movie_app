import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const Tabicon = ( {focused, title, icon}: any ) => {
    if(focused){
    return(
          <ImageBackground
            source={images.highlight} className='flex-1 flex flex-row items-center justify-center min-w-[112px] min-h-16 w-full rounded-full mt-6 overflow-hidden'
            >

                <Image source={icon} className='size-5' tintColor="#151312" />

                <Text className='text-secondary text-base font-semibold ml-2' >{title}</Text>

            </ImageBackground>
    ) }
    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
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
        alignItems: "center",
        justifyContent: "center",
        
        
    },

    tabBarStyle: {
        backgroundColor: "#0f0D23",
        borderRadius: 50,
        marginBottom: 36,
        marginHorizontal: 20,
        height: 52,
        borderColor: "#0f0D23",
        borderWidth: 1,
        position: "absolute",
        overflow: "hidden",

    }
  }}
  >
    <Tabs.Screen
    name='index'
    options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
         <Tabicon focused = {focused}  title = "Home" icon = {icons.home} />
        )

         }}
         />
    

      <Tabs.Screen
    name='search'
    options={{
        title: "Search",
        headerShown: false,
         tabBarIcon: ({ focused }) => (
         <Tabicon focused = {focused}  title = "Search" icon = {icons.search} />
        )

    }}
    />

      <Tabs.Screen
    name='saved'
    options={{
        title: "Saved",
        headerShown: false,
         tabBarIcon: ({ focused }) => (
         <Tabicon focused = {focused}  title = "Saved" icon = {icons.save} />
        )

    }}
    />

      <Tabs.Screen
    name='profile'
    options={{
        title: "Profile",
        headerShown: false,
         tabBarIcon: ({ focused }) => (
         <Tabicon focused = {focused}  title = "Profile" icon = {icons.person} />
        )

    }}
        
    />

  </Tabs>
  )
}

export default _layout