import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import {Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App (){
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
       <View style={styles.titleBar}>
         <Ionicons name="ios-arrow-back" size={24}></Ionicons>
         <Ionicons name="md-more" size={24}></Ionicons>
       </View>      

        <View style={{ alignSelf: "center"}}>
          <View style={styles.profileImage}>
            <Image source={require("./assets/profile-pic.jpg")}
             style={styles.image} resizeMode="center"></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons name="ios-add" size={48} color="#000000" 
            style={{ marginTop: 6, marginLeft: 2}}></Ionicons>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>Lucas</Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14}]}>Backend Developer</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}>
            <Text style={[styles.text, { fontSize: 24}]}>46k</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24}]}>100</Text>
          <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>

        <View style={{ marginTop: 32}} >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/media1.jpg")} style={styles.image} redizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/media2.jpg")} style={styles.image} redizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/media3.jpg")} style={styles.image} redizeMode="cover"></Image>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   // backgroundColor: "#fff"
  },
  text: {
   // fontFamily: "fira-code",
    color: "#52575D"
  },
  subText: {
    fontSize: 12,
    color: "#f0f",
    textTransform:"uppercase",
    fontWeight: "500"
  },
  image: {
    flex:1,
    width: undefined,
    height: undefined
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#B8B8B8",
    position: "absolute",
    bottom: 0,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    top: 28,
    left:10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius:40
  },
  add: {
   backgroundColor: "#B8B8B8",
    position: "absolute",
    bottom: 0,
    right: -10,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: 'center'
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height:200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
  //  backgroundColor: "ff00ff",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0, 0.38)",
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  }
});