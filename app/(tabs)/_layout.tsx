import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({title, icon, focused}: any) => {

    if(focused) {
    return(
         <ImageBackground source={images.highlight}
            className= "flex flex-row w-full flex-1 min-w-[114px] mt-6  min-h-16 justify-center items-center rounded-full overflow-hidden"
            
            >
                <Image source={icon} tintColor= '#151312' className="size-5"  />
                

                <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>


            </ImageBackground>
    )}
    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#A8B5DB" className='size-5'/>
        </View>
    )
}

const _layout = () => {
  return (
   <Tabs
   screenOptions={{
    tabBarShowLabel: false,   // it removes the labels
    tabBarItemStyle:{    // This style applies to ONE tab button, not the whole bar.
        width: "100%",  // Each tab takes full available width given to it
        height: "100%",  // same for height
        justifyContent: "center",   
        alignItems:"center"
    },
    tabBarStyle: {
        backgroundColor: "#0f0D23", // Sets the background color of the whole navbar
        borderRadius: 50,
        marginHorizontal: 10,  // Adds space on left and right
        marginBottom: 36, // Pushes the navbar up from the bottom
        height: 52,  // it will set the total height of nav bar
        position: "absolute",  //Without this: Navbar would push screen content up: Think like a sticker on top of a page
        overflow: "hidden",  // Anything going outside navbar shape is cut off
        borderWidth: 1,
        borderColor: "0f0d23"
    }



   }}
   >
    <Tabs.Screen
    name='index'
    options={{headerShown: false,
        title: "Home",
        tabBarIcon: ({ focused }) => (
            <TabIcon
            focused = {focused} 
            icon={icons.home}
             title= "Home"
             />
         
        )

    }}
    />

      <Tabs.Screen
    name='search'
    options={{headerShown: false,
        title: "Search",
         tabBarIcon: ({ focused }) => (
            <TabIcon
             focused = {focused} 
            icon={icons.search}
             title= "Search"
            />
         
        )

    }}
    />

      <Tabs.Screen
    name='saved'
    options={{headerShown: false,
        title: "Saved",
         tabBarIcon: ({ focused }) => (
            <TabIcon
             focused = {focused} 
            icon={icons.save}
             title= "Saved"
            />
         
        )

    }}
    />

      <Tabs.Screen
    name='profile'
    options={{headerShown: false,
        title: "Profile",
         tabBarIcon: ({ focused }) => (
            <TabIcon
             focused = {focused} 
            icon={icons.person}
             title= "Profile"
            />
         
        )

    }}
    />

   </Tabs>
  )
}

export default _layout