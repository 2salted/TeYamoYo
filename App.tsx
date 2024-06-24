import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { users } from "./localJSON";
import { StatusBar } from "expo-status-bar";

type Users = {
  firstName: string;
  lastName: string;
  userType: string;
  id: string;
  pfp: any;
};

const { width } = Dimensions.get("window");

export default function Main(): React.JSX.Element {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <FlatList
        data={users}
        renderItem={({ item }: { item: Users }) => (
          <View className="w-1/2 items-center justify-center">
            <TouchableOpacity style={styles.image}>
              <Image source={item.pfp} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item: Users) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: width / 1.37,
  },
});
