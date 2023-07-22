import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function CourseContent() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleBackPress}>
      <Text style={{ color: 'transparent' }}>Back</Text>
    </TouchableOpacity>
        <YoutubePlayer
            height={300}
            play={true}
            videoId={"yEgHrxvLsz0"} 
            />
            <ScrollView>
              <Text style={{fontSize: 20, fontWeight: "normal", textAlign: "center", marginTop: 10}}>
              We believe that AI has the potential to transform learning in a positive way, but we are also keenly aware of the risks. To test the possibilities, we’re inviting our district partners to opt in to Khan Labs, a new space for testing learning technology. We want to ensure that our work always puts the needs of students and teachers first, and we are focused on ensuring that the benefits of AI are shared equally across society. In addition to teachers and students, we’re inviting the general public to join a waitlist to test Khanmigo. Teachers, students and donors will be our partners on this learning journey, helping us test AI to see if we can harness it as a learning tool for all.
          
              </Text>
            </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

})