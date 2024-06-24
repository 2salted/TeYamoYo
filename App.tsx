import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
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
            <Image source={item.pfp} style={styles.image} />
            <Text>
              {item.firstName} {item.lastName}
            </Text>
          </View>
        )}
        keyExtractor={(item: Users) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: width / 2,
    marginBottom: 10,
  },
});
