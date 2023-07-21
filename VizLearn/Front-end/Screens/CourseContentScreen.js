import React from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


export default function CourseContent() {
  return (
    <View>
        <YoutubePlayer
            height={300}
            play={true}
            videoId={"2Vv-BfVoq4g"} 
            />
    </View>
  );
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

})