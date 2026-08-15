import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row  items-center  px-5 py-4 bg-dark-200 rounded-full">
      <Image
        source={icons.search}
        className="size-5"
        tintColor="#ab8bff"
        resizeMode="contain"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="text-white flex-1 ml-2"
      />
    </View>
  );
};

export default SearchBar;
