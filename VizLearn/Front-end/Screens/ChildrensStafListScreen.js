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
import DrTaniya from "../assets/images/DrTaniya.png";
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

export default function ChildrensStafListScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon="magnify"
        style={{ marginBottom: 10 }}
      />

      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={popularCategoriesData}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card}>
                <View>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: "500" }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#727272",
                      fontWeight: "500",
                    }}
                  >
                    {item.cousre}
                  </Text>
                </View>

                <Image style={{ marginLeft: 30 ,marginTop:10}} source={item.image} />
              </TouchableOpacity>
            );
          }}
        />
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
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
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
});
