import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AccountImage from "../assets/images/account.png";
import BiologyImage from "../assets/images/biology.png";
import NotifoicationImage from "../assets/images/notifoicationImage.png";
import DrRavinaImage from "../assets/images/DrRavina.png";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import TabBar from "../component/TabBar";

const popularCategoriesData = [
  {
    id: 1,
    name: "Accounting",
    cousre: "20 courses",
    image: AccountImage,
  },

  {
    id: 2,
    name: "Bioloogy",
    cousre: "15 Courses",
    image: BiologyImage,
  },
  {
    id: 3,
    name: "Accounting",
    cousre: "20 courses",
    image: AccountImage,
  },

  {
    id: 4,
    name: "Bioloogy",
    cousre: "15 Courses",
    image: BiologyImage,
  },
  {
    id: 5,
    name: "Accounting",
    cousre: "20 courses",
    image: AccountImage,
  },

  { id: 6, name: "Bioloogy", cousre: "15 Courses", image: BiologyImage },
  { id: 7, name: "Accounting", cousre: "20 courses", image: AccountImage },

  { id: 8, name: "Bioloogy", cousre: "15 Courses", image: BiologyImage },
  { id: 9, name: "Accounting", cousre: "20 courses", image: AccountImage },

  { id: 10, name: "Bioloogy", cousre: "15 Courses", image: BiologyImage },
];

export default function NotificationScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      {/* 1st */}
      <View
        style={{
          margin: 20,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, color: "#000", fontWeight: "600" }}>
          Notification
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
         <Feather name="settings" size={24} color="black" />
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: "#bbb" }} />
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={NotifoicationImage}
          style={{
            width: "100%",
            height: "60%",
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            color: "#000",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          No notification,
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: "#000",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          yet!
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            color: "#6F6F79",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt dolore magna aliqua
        </Text>
      </View>

      <TabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#FFF",
  },
  tabBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: "45%",
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: "#778899",
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: "#B0C4DE",
  },
});
