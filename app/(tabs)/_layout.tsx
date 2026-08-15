import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-1 flex-row justify-center items-center min-w-[112px] min-h-16 mt-6 rounded-full overflow-hidden"
      >
        <Image source={icon} className="size-5" tintColor="#151312" />

        <Text className="text-secondary font-semibold text-sm ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={icon} className="size-5 mt-4" tintColor="#A8B5DB" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "#0f0D23",
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
