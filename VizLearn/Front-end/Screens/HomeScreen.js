import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import AccountImage from "../assets/images/account.png";
import BiologyImage from "../assets/images/biology.png";
import DrTaniya from "../assets/images/DrTaniya.png";
import DrRavinaImage from "../assets/images/DrRavina.png";
import { ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import TabBar from "../component/TabBar";

const popularCategoriesData = [
  {
    name: "Accounting",
    cousre: "20 courses",
    image: AccountImage,
  },

  {
    name: "Bioloogy",
    cousre: "15 Courses",
    image: BiologyImage,
  },
];

const popularTeacherData = [
  {
    name: "Dr.Ravina",
    color: "#f59b42",
    image: DrRavinaImage,
  },

  {
    name: "Dr.Taniya",
    color: "#02B1EE",
    image: DrTaniya,
  },
  {
    name: "Dr.Baniya",
    color: "#FFFF00",
    image: DrRavinaImage,
  },

  {
    name: "Dr.Lavniya",
    color: "#bf9b77",
    image: DrTaniya,
  },
  {
    name: "Dr.Bhatia",
    color: "#c4c0bc",
    image: DrRavinaImage,
  },

  {
    name: "Dr.Lathiya",
    color: "#f0d2b4",
    image: DrTaniya,
  },
];
export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      {/* 1st */}
      <View
        style={{
          backgroundColor: "#5176C0",
          height: "24%",
          borderRadius: 20,
          padding: 20,
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 22, color: "white", fontWeight: "600" }}>
              Hello,
            </Text>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "400" }}>
              good Morning
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#859fd3",
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Ionicons name="notifications" size={24} color="#fff" />
          </View>
        </View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon="magnify"
          style={{ marginTop: 30 }}
        />
      </View>

      {/* 2nd */}
      <View
        style={{
          margin: 20,
          marginTop: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#000", fontWeight: "600" }}>
          Popular categories
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#4D8AF0",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          See all
        </Text>
      </View>
      <View
        style={{
          margin: 20,
          justifyContent: "space-between",
          marginTop: 0,
          flexDirection: "row",
          width: "90%",
          height: "20%",
        }}
      >
        {popularCategoriesData?.map((item) => {
          return (
            <View
              style={{
                height: "100%",
                width: "45%",
                borderRadius: 20,
                padding: 10,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 3,
              }}
            >
              <Text style={{ fontSize: 18, color: "#000", fontWeight: "500" }}>
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

              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </View>
          );
        })}
      </View>

      {/* 3rd */}
      <View
        style={{
          margin: 20,
          marginTop: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#000", fontWeight: "600" }}>
          Our top popular teacher
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#4D8AF0",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          See all
        </Text>
      </View>
      <ScrollView horizontal>
        <View
          style={{
            marginLeft: 20,
            marginTop: 0,
            flexDirection: "row",
          }}
        >
          {popularTeacherData?.map((item) => {
            return (
              <View
                key={item}
                style={{
                  width: 160,
                  aspectRatio: 0.8, // Adjust the aspect ratio to control the card height
                  borderRadius: 20,
                  padding: 10,
                  marginRight: 10, // Add some margin between the cards
                }}
              >
                <View
                  style={{
                    height: "70%",
                    borderRadius: 20,
                    backgroundColor: item.color,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 80,
                      height: 120,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                    color: "#000",
                    fontWeight: "500",
                  }}
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
                  Professor
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <TabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
